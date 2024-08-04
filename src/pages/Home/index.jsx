import { LiaHandSpock } from "react-icons/lia";
import data from '@/data/home.json';

export default function Home() {
    return (
        <section className="flex items-center justify-center md:flex-nowrap flex-wrap gap-5">
            <img src={data.profile_image} className="w-72 h-72 md:w-96 md:h-96 bg-profile-gradient rounded-full" alt="" />
            <div>
                <h1 className="text-4xl md:text-left text-center">
                    {data.greeting} <LiaHandSpock className="inline animate-wave text-[#ffd151]" />
                </h1>
                <h1 className="text-3xl">{data.title}</h1>
                <ul className="p-2">
                    {data.details.map((detail, index) => (
                        <li key={index} className="text-xl leading-9">
                            <span role="img">{detail.icon}</span> {detail.text}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
