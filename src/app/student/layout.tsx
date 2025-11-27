"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

export default function StudentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const navItems = [
        { name: "Dashboard", href: "/student/dashboard" },
        { name: "CAF", href: "/student/caf" },
        { name: "Events", href: "/student/events" },
        { name: "Internships", href: "/student/internships" },
    ];

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md">
                <div className="p-6">
                    <h2 className="text-xl font-bold text-blue-600">Placement Portal</h2>
                    <p className="text-sm text-gray-500">Student Panel</p>
                </div>
                <nav className="mt-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`block px-6 py-3 text-sm font-medium ${pathname === item.href
                                    ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
                                    : "text-gray-700 hover:bg-gray-50"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <button
                        onClick={() => signOut({ callbackUrl: "/login" })}
                        className="block w-full px-6 py-3 text-left text-sm font-medium text-red-600 hover:bg-red-50"
                    >
                        Logout
                    </button>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">
                {children}
            </main>
        </div>
    );
}
