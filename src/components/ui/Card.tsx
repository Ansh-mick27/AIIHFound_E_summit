import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
    return (
        <div
            className={`
        glass-card p-6 
        ${hover ? 'hover:scale-105 hover:shadow-xl transition-all duration-300' : ''}
        ${className}
      `}
        >
            {children}
        </div>
    );
}
