const { PrismaClient } = require('@prisma/client');
const fs = require('fs');

const prisma = new PrismaClient();

async function dump() {
    const users = await prisma.user.findMany();
    const students = await prisma.student.findMany();
    const events = await prisma.companyEvent.findMany();
    const applications = await prisma.companyEventApplication.findMany();
    const interviews = await prisma.mockInterview.findMany();
    const interviewResults = await prisma.mockInterviewResult.findMany();
    const internships = await prisma.internship.findMany();

    const data = {
        users,
        students,
        events,
        applications,
        interviews,
        interviewResults,
        internships
    };

    fs.writeFileSync('db_dump.json', JSON.stringify(data, null, 2));
    console.log('DB dumped to db_dump.json');
}

dump()
    .catch(e => console.error(e))
    .finally(async () => await prisma.$disconnect());
