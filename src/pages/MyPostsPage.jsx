import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/auth';
import { useEffect } from 'react';
import { apiService } from '../services/api';

import RSSFeedItem from "../components/RSSFeedItem";

const fetchPosts = async () => {
    try {
        const posts = await apiService.fetch("/posts", { method: 'GET' })
        return posts
    } catch (error) {
        console.error(error);
    }
    return null
}

const MyPostsPage = () => {
    const navigate = useNavigate();

    const isAuthenticated = authService.isAuthenticated()
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated]);

    const [posts, setPosts] = useState([]);
    const [posts_update, setPostssUpdate] = useState([]);

    useEffect(() => {
        fetchPosts().then((posts) => {
            if (posts) {
                setPosts(posts)
            }
        })
    }, [])

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold">My Posts</h2>
            <div className="grid gap-6">
                {posts.map(post => (
                    <RSSFeedItem
                        key={post.id}
                        item={{
                            title: post.title,
                            description: post.description,
                            link: post.url,
                            source: post.feed_id,
                            publish_date: post.published_at,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default MyPostsPage;
