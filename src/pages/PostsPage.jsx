import React, { useState } from 'react';
import { Calendar, Globe, User } from 'lucide-react';

// Sample data - replace with your actual data source
const SAMPLE_POSTS = [
    {
        id: 1,
        title: "Understanding React Hooks",
        feedName: "React Blog",
        publishDate: "2024-03-19",
        author: "John Doe",
        excerpt: "Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class component...",
        link: "https://example.com/post1",
        thumbnail: "https://picsum.photos/200/300"
    },
    {
        id: 2,
        title: "The Future of JavaScript",
        feedName: "JavaScript Weekly",
        publishDate: "2024-03-18",
        author: "Jane Smith",
        excerpt: "ECMAScript continues to evolve. Let's explore the upcoming features that will shape the future of JavaScript...",
        link: "https://example.com/post2",
        thumbnail: "https://picsum.photos/200/300"
    }
];

const PostsPage = () => {
    const [selectedFeed, setSelectedFeed] = useState('all');
    const [sortBy, setSortBy] = useState('date');
    const [posts, setPosts] = useState(SAMPLE_POSTS);

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const sortPosts = (postsToSort) => {
        return [...postsToSort].sort((a, b) => {
            if (sortBy === 'date') {
                return new Date(b.publishDate) - new Date(a.publishDate);
            }
            return b.title.localeCompare(a.title);
        });
    };

    const sortedPosts = sortPosts(posts);

    return (
        <div className="max-w-6xl mx-auto px-4">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-6">RSS Feed Posts</h1>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                    <div className="flex items-center space-x-4">
                        <select
                            value={selectedFeed}
                            onChange={(e) => setSelectedFeed(e.target.value)}
                            className="px-4 py-2 border rounded-md bg-white"
                        >
                            <option value="all">All Feeds</option>
                            <option value="tech">Tech News</option>
                            <option value="science">Science</option>
                            <option value="dev">Development</option>
                        </select>

                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-4 py-2 border rounded-md bg-white"
                        >
                            <option value="date">Sort by Date</option>
                            <option value="title">Sort by Title</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="grid gap-6">
                {sortedPosts.map((post) => (
                    <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="p-6">
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <h2 className="text-xl font-semibold mb-2">
                                        <a
                                            href={post.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-blue-600 transition-colors"
                                        >
                                            {post.title}
                                        </a>
                                    </h2>

                                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                                        <div className="flex items-center">
                                            <Globe className="h-4 w-4 mr-1" />
                                            <span>{post.feedName}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Calendar className="h-4 w-4 mr-1" />
                                            <span>{formatDate(post.publishDate)}</span>
                                        </div>
                                        {post.author && (
                                            <div className="flex items-center">
                                                <User className="h-4 w-4 mr-1" />
                                                <span>{post.author}</span>
                                            </div>
                                        )}
                                    </div>

                                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                                    <a
                                        href={post.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                                    >
                                        Read more →
                                    </a>
                                </div>

                                {post.thumbnail && (
                                    <img
                                        src={post.thumbnail}
                                        alt=""
                                        className="w-32 h-32 object-cover rounded-lg ml-6 hidden sm:block"
                                    />
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {posts.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                    No posts found. Try selecting a different feed.
                </div>
            )}
        </div>
    );
};

export default PostsPage;
