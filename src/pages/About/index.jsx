export default function About() {
    return (
        <div className="container mx-auto flex flex-col gap-y-12">
            <div className="mockup-code">
                <pre data-prefix="$"><code>cat aboutyunus</code></pre>
                <pre data-prefix=">" className="text-success">
                    <code>Hello! I'm Yunus. I'm a systems engineer for Google. I studied CompSci at Harvard, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!</code>
                </pre>
            </div>

            <div className="mockup-code">
                <pre data-prefix="$"><code>cd skills/tools</code></pre>
                <pre data-prefix=">" className="text-warning"><code>ls</code></pre>
                <pre data-prefix="">
                    <code className="text-success">Proficient With</code>
                    <div className="ml-12 w-96">
                        <div className="flex flex-wrap justify-between">
                            <span className="w-1/2">javascript</span>
                            <span className="w-1/2">react</span>
                            <span className="w-1/2">git</span>
                            <span className="w-1/2">github</span>
                            <span className="w-1/2">bootstrap</span>
                            <span className="w-1/2">html5</span>
                            <span className="w-1/2">css3</span>
                            <span className="w-1/2">figma</span>
                        </div>
                        <code className="text-success">Exposed To</code>
                        <div className="flex flex-wrap justify-between">
                            <span className="w-1/2">nodejs</span>
                            <span className="w-1/2">adobe illustrator</span>
                            <span className="w-1/2">python</span>
                        </div>
                    </div>
                </pre>
            </div>

            <div className="mockup-code">
                <pre data-prefix="$"><code>cd hobbies/interests</code></pre>
                <pre data-prefix=">" className="text-warning"><code>ls</code></pre>
                <pre data-prefix="" className="text-success">
                    <code className="text-success">Hobbies</code>
                    <ul className="ml-12 text-gray-400">
                        <li>📖reading</li>
                        <li>🎭theater</li>
                        <li>🎥movies</li>
                        <li>🌶cooking</li>
                    </ul>
                </pre>
            </div>
        </div>
    )
}