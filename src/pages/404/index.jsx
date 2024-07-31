import { FaRegSadCry } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <section className="flex items-center justify-center">
            <div className="text-center h-96 w-full rounded-2xl shadow-2xl max-w-md relative !z-1 flex flex-col items-center justify-center">
                <FaRegSadCry className="text-[16rem] opacity-10 text-red-500 mb-4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1]" />
                <h1 className="text-4xl font-bold mb-2">404</h1>
                <p className="text-lg text-gray-600 mb-4">Oops! Page not found.</p>
                <p className="text-sm text-gray-500 mb-8">The page you are looking for might have been moved or deleted.</p>
                <Link to="/" className="btn btn-ghost">Go Back Home</Link>
            </div>
        </section>
    )
}