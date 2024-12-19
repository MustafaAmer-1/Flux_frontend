import { useEffect, useState } from 'react';

import FeedCard from "../components/FeedCard";
import { authService } from '../services/auth';
import { apiService } from '../services/api';

const fetchFeeds = async (isAuthenticated) => {
    try {
        const feeds = await apiService.fetch(isAuthenticated ? "/feed_not_follow" : "/feeds", { method: 'GET' })
        return feeds
    } catch (error) {
        console.error(error);
    }
    return null
}

const AllFeedsPage = () => {
    const isAuthenticated = authService.isAuthenticated()

    const [feeds, setFeeds] = useState([]);

    useEffect(() => {
        fetchFeeds(isAuthenticated).then((feeds) => {
            setFeeds(feeds)
        })
    }, [])

    const handleToggleFollow = (feedId) => {
        // Handle follow/unfollow logic here
    };

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold">All Available Feeds</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {feeds.map(feed => (
                    <FeedCard
                        key={feed.id}
                        feed={feed}
                        onToggleFollow={handleToggleFollow}
                    />
                ))}
            </div>
        </div>
    );
};

export default AllFeedsPage;
