'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Trash2, Upload, Plus } from 'lucide-react';

export default function AdminPage() {
    const [posters, setPosters] = useState<string[]>([]);
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        fetchPosters();
    }, []);

    const fetchPosters = async () => {
        const res = await fetch('/api/posters');
        const data = await res.json();
        setPosters(data);
    };

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files?.[0]) return;
        setUploading(true);

        const formData = new FormData();
        formData.append('file', e.target.files[0]);

        try {
            await fetch('/api/posters', {
                method: 'POST',
                body: formData,
            });
            await fetchPosters(); // Refresh list
        } catch (error) {
            console.error("Upload failed", error);
            alert("Upload failed");
        } finally {
            setUploading(false);
        }
    };

    const handleDelete = async (path: string) => {
        if (!confirm("Are you sure you want to delete this poster?")) return;

        try {
            await fetch('/api/posters', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ path }),
            });
            await fetchPosters();
        } catch (error) {
            console.error("Delete failed", error);
        }
    };

    return (
        <div className="min-h-screen bg-neutral-900 text-white p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-12">
                    <h1 className="text-4xl font-black">Admin Dashboard</h1>
                    <a href="/" className="text-neutral-400 hover:text-white transition">← Back to Site</a>
                </div>

                {/* Upload Section */}
                <div className="bg-neutral-800 p-8 rounded-2xl mb-12 border border-neutral-700">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Plus className="w-6 h-6 text-green-500" />
                        Add New Poster
                    </h2>
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-neutral-600 rounded-xl cursor-pointer hover:bg-neutral-700/50 transition">
                        <input type="file" className="hidden" onChange={handleUpload} disabled={uploading} accept="image/*" />
                        <div className="flex flex-col items-center">
                            {uploading ? (
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mb-2"></div>
                            ) : (
                                <Upload className="w-8 h-8 text-neutral-400 mb-2" />
                            )}
                            <span className="text-sm text-neutral-400">{uploading ? 'Uploading...' : 'Click to Upload Image'}</span>
                        </div>
                    </label>
                </div>

                {/* Gallery */}
                <h2 className="text-2xl font-bold mb-6">Current Posters ({posters.length})</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {posters.map((src, index) => (
                        <div key={index} className="relative group bg-neutral-800 rounded-xl overflow-hidden border border-neutral-700">
                            <div className="relative aspect-[3/4]">
                                <Image src={src} alt="Poster" fill className="object-cover" />
                            </div>
                            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                    onClick={() => handleDelete(src)}
                                    className="flex items-center justify-center w-full gap-2 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium transition"
                                >
                                    <Trash2 className="w-4 h-4" /> Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
