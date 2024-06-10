import React from 'react'

export default function LayoutScreen({ children, className }) {
    return (
        <div className={`mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ${className}`}>
            {children}
        </div>
    )
}