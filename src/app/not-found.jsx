import React from 'react'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-6xl font-bold text-red-500">404</h1>
            <p className="text-xl mt-4">Oops! Page not found.</p>
            <a
                href="/"
                className="mt-6 px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
            >
                Go Home
            </a>
        </div>
    )
}
