import React from 'react';
import CodeBlock from '@/components/CodeBlock';
import data from '@/data/about.json';

const CodeLineRenderer = ({ line }) => {
    if (line.type === "list") {
        return (
            <div className="md:w-96 w-80 ml-4">
                <div className="flex flex-wrap justify-between">
                    {line.items.map((item, index) => (
                        <span key={index} className="w-1/2">{item.text}</span>
                    ))}
                </div>
            </div>
        );
    }
    return <code className={line.className}>{line.text}</code>;
};

export default function About() {
    return (
        <div className="container mx-auto flex flex-col gap-y-12">
            {data.map((section, index) => (
                <div key={index}>
                    {section.codeBlocks.map((block, blockIndex) => (
                        <CodeBlock
                            key={blockIndex}
                            prefix={block.prefix}
                            codeLines={block.codeLines.map((line, lineIndex) => (
                                <CodeLineRenderer key={lineIndex} line={line} />
                            ))}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}
