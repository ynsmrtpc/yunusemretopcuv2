import { LiaHandSpock } from "react-icons/lia";

export default function Home() {
    return (
        <section className="flex items-center justify-center  md:flex-nowrap flex-wrap gap-5">
            <img src="/photo.png" className="w-96 h-96 mr-8 bg-profile-gradient rounded-full" alt="" />
            <div>
                <h1 className="text-4xl">Hi, I'm Yunus <LiaHandSpock className="inline animate-wave text-[#ffd151]" /></h1>
                <h1 className="text-3xl">I'm a Full Stack Developer.</h1>
                <ul class="p-2">
                    <li className="text-xl leading-9"><span role="img">☕</span> fueled by coffee</li>
                    <li className="text-xl leading-9"><span role="img">🌎</span> based in the TR</li>
                    <li className="text-xl leading-9"><span role="img">💼</span> Sotfware Engineer at ZB Belediyesi</li>
                    <li className="text-xl leading-9"><span role="img">📧</span> yunus@yunusemretopcu.com</li ></ul >
            </div>
        </section>
    )
}