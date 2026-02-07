'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-primary-blue-dark/95 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold">
                        E-SUMMIT <span className="gradient-text">2026</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                            Home
                        </Link>
                        <Link href="/solvex" className="text-gray-300 hover:text-white transition-colors">
                            SolveX
                        </Link>
                        <Link href="/pitchbiz" className="text-gray-300 hover:text-white transition-colors">
                            PitchBiz
                        </Link>
                        <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                            About
                        </Link>
                        <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden mt-4 space-y-4 pb-4">
                        <Link href="/" className="block text-gray-300 hover:text-white transition-colors">
                            Home
                        </Link>
                        <Link href="/solvex" className="block text-gray-300 hover:text-white transition-colors">
                            SolveX
                        </Link>
                        <Link href="/pitchbiz" className="block text-gray-300 hover:text-white transition-colors">
                            PitchBiz
                        </Link>
                        <Link href="/about" className="block text-gray-300 hover:text-white transition-colors">
                            About
                        </Link>
                        <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors">
                            Contact
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
