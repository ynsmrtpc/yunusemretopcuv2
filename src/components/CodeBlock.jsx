import React from 'react';

const CodeBlock = ({ prefix, codeLines }) => {
    return (
        <article className="bg-base-200 rounded-box py-12 px-6 relative w-full overflow-hidden">
            <div className="absolute top-0 w-full flex gap-x-2.5 mt-4">
                <span className='w-2.5 h-2.5 p-1 bg-base-content rounded-full'></span>
                <span className='w-2.5 h-2.5 p-1 bg-base-content rounded-full'></span>
                <span className='w-2.5 h-2.5 p-1 bg-base-content rounded-full'></span>
            </div>
            {codeLines.map((line, index) => (
                <p key={index} className='md:ml-6'>
                    <span className='text-green-600 font-mono'>{prefix[index]}</span>  <code>{line}</code>
                </p>
            ))}
        </article>
    );
};

export default CodeBlock;
