import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="flex justify-center gap-x-1 items-center pt-6 pb-6 w-full opacity-70 text-xs">
            <Link to="/">yunusemretopcu</Link>&copy; {new Date().getFullYear()}
        </footer>
    )
}