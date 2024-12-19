import { useState } from 'react';

import RSSFeedItem from "../components/RSSFeedItem";

const MyPostsPage = () => {
    const [posts, setPosts] = useState([
        // Sample data
        {
            id: 1,
            title: 'Sample Post Title',
            feedTitle: 'Tech News Blog',
            publishDate: '2024-03-19',
            excerpt: 'This is a sample post excerpt...',
            link: 'https://example.com/post'
        }, {
            id: 1,
            title: 'Sample Post Title',
            feedTitle: 'Tech News Blog',
            publishDate: '2024-03-19',
            excerpt: 'This is a sample post excerpt...',
            link: 'https://example.com/post'
        }
    ]);

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold">My Posts</h2>
            <div className="grid gap-6">
                {posts.map(post => (
                    <RSSFeedItem
                        key={post.id}
                        item={{
                            title: post.title,
                            description: post.excerpt,
                            link: post.link,
                            source: post.feedTitle,
                            publish_date: post.publishDate,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default MyPostsPage;
