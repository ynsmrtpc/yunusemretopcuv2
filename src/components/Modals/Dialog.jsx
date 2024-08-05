import useFormatDateTime from "@/hooks/useFormatDateTime";
import { Link } from "react-router-dom";

export default function Dialog({ title, content, open, clearModal }) {
    const formattedDateTime = useFormatDateTime(new Date(content.pubDate));
    return (
        <dialog id="dialog" className="modal backdrop-invert-0 bg-black/50" open={open}>
            <div className="modal-box">
                <div className="relative mb-3">
                    <img src={content.mediaContent} alt={title} className="rounded-box" />
                    <div className="flex justify-between items-center">
                        <small className="text-xs font-normal">{content.creator}</small>
                        <small className="text-xs font-normal">{formattedDateTime}</small>
                    </div>
                </div>
                <h3 className="font-bold text-2xl text-center">{title}</h3>
                <p className="py-4">{content.description}</p>
                <div className="block text-right">
                    <Link
                        to={content.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                        onClick={clearModal}
                    >
                        Devamını Oku
                    </Link>
                </div>
            </div>
            <form method="dialog" className="modal-backdrop transition-all" >
                <button onClick={clearModal}>close</button>
            </form>
        </dialog>
    );
}
