
import { Rocket, Briefcase, Settings, Palette, Trophy, TrendingUp, Mic, Lightbulb } from "lucide-react";

export const eventsData = {
    "founders-talk": {
        title: "FOUNDER'S TALK",
        category: "SESSION",
        description: "Startup Expo, the flagship event of E-Summit, provides a dynamic platform for early-stage startups to pitch their ideas to investors and industry leaders.",
        longDescription: "Founder's Talk is the defining highlight of E-Summit, where visionary entrepreneurs share the real stories behind their success. More than a session, it is a catalyst that transforms ambition into action.\n\nThrough candid conversations, founders reveal their journeys — the risks, failures, breakthroughs, and lessons that shaped their ventures. The session offers powerful insights into resilience, leadership, and the mindset required to build and scale meaningful ideas.",
        icon: Rocket,
        details: [
            { label: "Date", value: "18th, 19th, 20th March'26" },
            { label: "Time", value: "11:00 am - 12:00 pm" },
            { label: "Venue", value: "Acropolis Group of Institutions" },
            { label: "Event SPOCs", value: "Pradhyumn Mehta\nKeshav Banger\nAditi Vyas" },
        ],
        posters: ["/images/placeholder-event-1.jpg", "/images/placeholder-event-2.jpg", "/images/placeholder-event-3.jpg"]
    },
    "solvex": {
        title: "SolveX",
        category: "COMPETITION",
        description: "SolveX is a national platform empowering innovators to transform bold ideas into structured ventures through competition and real-world validation.",
        longDescription: "SolveX 2026 is a National Innovation and Business Model Competition designed for innovators, founders, and problem-solvers ready to turn ideas into impact. It is where bold concepts are transformed into structured prototypes and scalable ventures.\n\nParticipants can choose between two tracks — the Innovation Challenge, focused on building working prototypes with measurable real-world impact, and the Business Model Competition, where ideas are refined, validated, and shaped for market viability and scale. With mentorship, incubation opportunities, and national visibility, SolveX empowers builders to execute with direction and compete for a ₹1.2 Lakh prize pool.",
        icon: Briefcase,
        details: [
            { label: "Date", value: "19th, 20th March'26" },
            { label: "Time", value: "2:00 PM – 4:00 PM" },
            { label: "Venue", value: "Acropolis Group of Institutions" },
            { label: "Event SPOCs", value: "Aadya Singh\nIshaan Dadoo" },
        ],
        posters: ["/images/placeholder-event-1.jpg", "/images/placeholder-event-2.jpg", "/images/placeholder-event-3.jpg"]
    },
    "pitchbiz": {
        title: "PITCHBIZ 5.0",
        category: "PITCH",
        description: "PitchBiz 5.0 is a curated founder–investor platform where high-potential startups pitch live, enabling strategic growth opportunities.",
        longDescription: "PITCHBIZ 5.0 is a curated founder–investor platform where high-potential startups pitch live to active investors in a setting designed to mirror a real fundraising environment. It enables structured capital conversations, strategic feedback, and meaningful investor connections.\n\nThe platform operates in two distinct phases — the Angel Stage, tailored for early-stage startups seeking validation and seed capital, and the Growth Stage, designed for scaling ventures ready to engage with larger investment opportunities. Each phase ensures founders present within the right capital context, increasing the relevance and depth of investor engagement.\n\nMore than a pitch session, PITCHBIZ is where credible ventures step forward with clarity, confidence, and the ambition to secure strategic growth.",
        icon: Settings,
        details: [
            { label: "Date", value: "19th, 20th March 2026" },
            { label: "Time", value: "12:00 PM – 1:00 PM" },
            { label: "Venue", value: "Acropolis Group of Institutions" },
            { label: "Event SPOCs", value: "Ashmi Jain\nMohd. Ayaan Khan\nDanish Khan" },
        ],
        posters: ["/images/placeholder-event-1.jpg", "/images/placeholder-event-2.jpg", "/images/placeholder-event-3.jpg"]
    },
    "creators-connect": {
        title: "CREATOR'S CONNECT 2.0",
        category: "PANEL",
        description: "Creators Connect 2.0 convenes leading influencers and digital creators to decode the business of content and the discipline behind personal brands.",
        longDescription: "Creators Connect 2.0 convenes leading influencers, digital creators, and emerging voices to decode the business of content and the discipline behind building powerful personal brands. It explores how creativity evolves into structured growth, monetization, and long-term relevance.\n\nThrough insightful conversations and real-world experiences, creators unpack strategies around audience building, brand collaborations, content positioning, and sustainable scaling. Blending creativity with entrepreneurship, the session transforms influence into intentional strategy and opportunity.",
        icon: Palette,
        details: [
            { label: "Date", value: "18th March 2026" },
            { label: "Time", value: "12:00 PM – 1:00 PM" },
            { label: "Venue", value: "Acropolis Group of Institutions" },
            { label: "Event SPOCs", value: "Aditya Upadhyay\nKavyansh Rajput" },
        ],
        posters: ["/images/placeholder-event-1.jpg", "/images/placeholder-event-2.jpg", "/images/placeholder-event-3.jpg"]
    },
    "ama": {
        title: "AMA",
        category: "PANEL",
        description: "Engage in a direct dialogue with leading investors, gaining candid insights and exclusive perspectives straight from the capital decision-makers.",
        longDescription: "Engage in a direct dialogue with leading investors, gaining candid insights and exclusive perspectives straight from the capital decision-makers. From career advice to industry trends, get honest answers and unparalleled access to the minds shaping the future.",
        icon: Trophy,
        details: [
            { label: "Date", value: "TBA" },
            { label: "Time", value: "TBA" },
            { label: "Venue", value: "Main Auditorium" },
        ],
        posters: ["/images/placeholder-event-1.jpg", "/images/placeholder-event-2.jpg", "/images/placeholder-event-3.jpg"]
    },
    "masterclass": {
        title: "MASTER CLASS",
        category: "SESSION",
        description: "A Masterclass is an interactive event where experts share practical insights, real-world experience, and actionable learning beyond theory.",
        longDescription: "A Masterclass is an interactive event where experts share practical insights, real-world experience, and actionable learning beyond theory. Led by domain experts, these intensive sessions provide practical knowledge and hands-on skills that you can apply immediately. Elevate your expertise.",
        icon: TrendingUp,
        details: [
            { label: "Date", value: "TBA" },
            { label: "Time", value: "TBA" },
            { label: "Venue", value: "Workshop Hall" },
        ],
        posters: ["/images/placeholder-event-1.jpg", "/images/placeholder-event-2.jpg", "/images/placeholder-event-3.jpg"]
    },
    "speed-mentoring": {
        title: "SPEED MENTORING",
        category: "MENTORSHIP",
        description: "Speed Mentoring is a curated advisory platform where participants gain strategic clarity on product, scalability, and growth from industry leaders.",
        longDescription: "Speed Mentoring is a curated advisory platform where participants gain strategic clarity on product, scalability, and growth from industry leaders. Rotate through a series of brief, focused sessions with different mentors. Get diverse perspectives on your challenges and build a network of advisors in record time.",
        icon: Mic,
        details: [
            { label: "Date", value: "TBA" },
            { label: "Time", value: "TBA" },
            { label: "Venue", value: "Networking Lounge" },
        ],
        posters: ["/images/placeholder-event-1.jpg", "/images/placeholder-event-2.jpg", "/images/placeholder-event-3.jpg"]
    }
};
