export default function Contacts() {
    return (
        <div className="min-h-screen flex items-center justify-center  p-6">
            <div className="max-w-lg h-auto w-full bg-white rounded-2xl shadow-lg p-8">
                {/* Heading */}
                <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
                    Contact Us
                </h1>

                {/* Contact Info */}
                <div className="space-y-4 text-gray-700">
                    <p>
                        📍 <span className="font-semibold">Address:</span> 123 Street, Dhaka,
                        Bangladesh
                    </p>
                    <p>
                        📞 <span className="font-semibold">Phone:</span> +880 123 456 789
                    </p>
                    <p>
                        📧 <span className="font-semibold">Email:</span>{" "}
                        contact@example.com
                    </p>
                </div>

                {/* Contact Form */}
                <form className="mt-5 space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <textarea
                        placeholder="Your Message"
                        rows="4"
                        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}
