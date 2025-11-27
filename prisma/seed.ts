import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    const passwordHash = await bcrypt.hash('password123', 10);

    // Create Admin
    const admin = await prisma.user.upsert({
        where: { email: 'admin@example.com' },
        update: {},
        create: {
            email: 'admin@example.com',
            password_hash: passwordHash,
            role: 'ADMIN',
        },
    });

    // Create Student
    const studentUser = await prisma.user.upsert({
        where: { email: 'student@example.com' },
        update: {},
        create: {
            email: 'student@example.com',
            password_hash: passwordHash,
            role: 'STUDENT',
        },
    });

    // Create Student Profile
    const studentProfile = await prisma.student.upsert({
        where: { userId: studentUser.id },
        update: {},
        create: {
            userId: studentUser.id,
            name: 'John Doe',
            rollNo: '123456',
            phone: '9876543210',
            tenthMarks: 85.5,
            twelfthMarks: 88.0,
            currentCGPA: 8.5,
            isCafLocked: false,
        },
    });

    console.log({ admin, studentUser, studentProfile });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
