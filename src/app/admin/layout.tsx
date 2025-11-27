"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const navItems = [
        { name: "Dashboard", href: "/admin/dashboard" },
        { name: "Events", href: "/admin/events" },
        { name: "Mock Interviews", href: "/admin/mock-interviews" },
        { name: "Internships", href: "/admin/internships" },
    ];

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-800 text-white shadow-md">
                <div className="p-6">
                    <h2 className="text-xl font-bold">Admin Portal</h2>
                    <p className="text-sm text-gray-400">Placement Cell</p>
                </div>
                <nav className="mt-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`block px-6 py-3 text-sm font-medium ${pathname.startsWith(item.href)
                                    ? "bg-gray-900 text-white border-r-4 border-blue-500"
                                    : "text-gray-300 hover:bg-gray-700"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <button
                        onClick={() => signOut({ callbackUrl: "/login" })}
                        className="block w-full px-6 py-3 text-left text-sm font-medium text-red-400 hover:bg-gray-700"
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
