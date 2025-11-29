import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: Number(process.env.EMAIL_SERVER_PORT),
    auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
    },
    secure: true, // Use TLS
});

export async function sendEmail(to: string, subject: string, html: string) {
    try {
        const info = await transporter.sendMail({
            from: process.env.EMAIL_FROM,
            to,
            subject,
            html,
        });
        console.log(`Email sent to ${to}: ${info.messageId}`);
        return info;
    } catch (error) {
        console.error(`Failed to send email to ${to}:`, error);
        // Don't throw, just log. We don't want to break the main flow if email fails.
        return null;
    }
}

export async function sendNewDriveEmail(studentEmail: string, event: { companyName: string; title: string; id: string }) {
    const subject = `New Placement Drive: ${event.companyName}`;
    const html = `
        <h1>New Placement Opportunity!</h1>
        <p><strong>${event.companyName}</strong> is hiring for the role of <strong>${event.title}</strong>.</p>
        <p>Log in to the portal to view details and apply.</p>
        <a href="${process.env.NEXTAUTH_URL}/student/events">View Drive</a>
    `;
    return sendEmail(studentEmail, subject, html);
}

export async function sendStatusUpdateEmail(studentEmail: string, eventTitle: string, status: string) {
    const subject = `Application Update: ${eventTitle}`;
    const html = `
        <h1>Application Status Update</h1>
        <p>Your application for <strong>${eventTitle}</strong> has been updated.</p>
        <p>New Status: <strong>${status}</strong></p>
        <p>Log in to the portal to view details.</p>
        <a href="${process.env.NEXTAUTH_URL}/student/dashboard">View Dashboard</a>
    `;
    return sendEmail(studentEmail, subject, html);
}
