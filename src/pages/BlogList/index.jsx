import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { XMLParser } from 'fast-xml-parser';
import NotFound from '../404';
import Dialog from '@/components/Modals/Dialog';

const BlogList = () => {
    const [posts, setPosts] = useState([]);
    const [modalPost, setModalPost] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [hoverIndex, setHoverIndex] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('https://api.yunusemretopcu.com/blog.php');
                const parser = new XMLParser({
                    ignoreAttributes: false,
                    attributeNamePrefix: "",
                    removeNSPrefix: true,
                    parseAttributeValue: true,
                    parseTrueNumberOnly: true
                });
                const data = parser.parse(response.data);
                const items = data.rss.channel.item;
                console.log(items)
                const formattedPosts = items.map(post => ({
                    title: post.title,
                    creator: post.creator,
                    link: post.link,
                    guid: post.guid["#text"],
                    description: post.description,
                    mediaContent: post.content.url ? post.content.url : '/default-image.jpg',
                    pubDate: new Date(post.pubDate)
                }));

                formattedPosts.sort((a, b) => b.pubDate - a.pubDate);
                setPosts(formattedPosts);
            } catch (err) {
                setError('Failed to fetch blogs');
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (loading) return <p className="text-center">Ops...</p>;
    if (error) return <NotFound error={2800} message={error} />;

    if (posts.length === 0) return <NotFound error={2801} message="Şuanlık blog bulunamadı :/" />;

    const latestPost = posts[0];

    return (
        <div className="container mx-auto p-4 flex flex-col items-center">
            {modalPost.title && (
                <Dialog title={modalPost.title} open={modalPost.title} content={modalPost} clearModal={() => setTimeout(() => { setModalPost({}) }, 100)} />
            )}
            <div className="relative w-full max-w-4xl min-h-96 flex justify-center items-center">
                <div
                    onClick={() => setModalPost(latestPost)}
                    className="cursor-pointer absolute w-40 h-40 md:w-72 md:h-72 bg-cover bg-center rounded-full border-4 border-white z-30"
                    style={{
                        backgroundImage: `url(${latestPost.mediaContent})`,
                        transform: `rotate(0deg) translate(0px) rotate(0deg)`,
                    }}
                >
                    <div className="flex items-center justify-center h-full w-full rounded-full bg-black bg-opacity-50">
                        <div
                            className="text-white text-center font-semibold md:text-lg text-sm p-2"
                        >
                            {latestPost.title}
                        </div>
                    </div>
                </div>

                {posts.slice(1).map((post, index) => {
                    const angle = 360 / (posts.length - 1);
                    const rotateAngle = angle * index;
                    const isHovered = hoverIndex === index;

                    return (
                        <div
                            key={index}
                            onClick={() => setModalPost(post)}
                            className={`cursor-pointer absolute w-20 h-20 md:w-52 md:h-52 bg-cover bg-center rounded-full border-4 border-white transition-transform duration-500 ease-in-out ${isHovered ? 'scale-150 z-20' : 'scale-100'}`}
                            style={{
                                backgroundImage: `url(${post.mediaContent})`,
                                transform: `rotate(${rotateAngle}deg) translate(${window.innerWidth < 768 ? 160 : 360}px) rotate(-${rotateAngle}deg)`,
                            }}
                            onMouseEnter={() => setHoverIndex(index)}
                            onMouseLeave={() => setHoverIndex(null)}
                        >
                            <div className={`flex items-center justify-center h-full w-full rounded-full bg-black bg-opacity-50 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                                <div
                                    className="text-white text-center font-semibold text-xs p-2"
                                >
                                    {post.title}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default BlogList;
