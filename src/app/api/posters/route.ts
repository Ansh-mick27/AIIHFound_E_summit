import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { writeFile, unlink } from 'fs/promises';

const DATA_FILE = path.join(process.cwd(), 'src/data/posters.json');
const UPLOAD_DIR = path.join(process.cwd(), 'public/assets/brochures');

// Helper to read data
function getPosters() {
    if (!fs.existsSync(DATA_FILE)) return [];
    const data = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(data);
}

// Helper to save data
function savePosters(posters: string[]) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(posters, null, 2));
}

export async function GET() {
    const posters = getPosters();
    return NextResponse.json(posters);
}

export async function POST(request: Request) {
    const data = await request.formData();
    const file: File | null = data.get('file') as unknown as File;

    if (!file) {
        return NextResponse.json({ success: false, message: 'No file uploaded' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Ensure upload dir exists
    if (!fs.existsSync(UPLOAD_DIR)) {
        fs.mkdirSync(UPLOAD_DIR, { recursive: true });
    }

    const filename = `${Date.now()}-${file.name.replace(/\s/g, '-')}`;
    const filepath = path.join(UPLOAD_DIR, filename);

    await writeFile(filepath, buffer);

    const publicPath = `/assets/brochures/${filename}`;
    const posters = getPosters();
    posters.push(publicPath);
    savePosters(posters);

    return NextResponse.json({ success: true, path: publicPath });
}

export async function DELETE(request: Request) {
    const { path: filePath } = await request.json();

    if (!filePath) return NextResponse.json({ success: false }, { status: 400 });

    const posters = getPosters();
    const updatedPosters = posters.filter((p: string) => p !== filePath);
    savePosters(updatedPosters);

    // Try to delete physical file
    try {
        const physicalPath = path.join(process.cwd(), 'public', filePath);
        if (fs.existsSync(physicalPath)) {
            await unlink(physicalPath);
        }
    } catch (error) {
        console.error("Error deleting file:", error);
    }

    return NextResponse.json({ success: true, posters: updatedPosters });
}
