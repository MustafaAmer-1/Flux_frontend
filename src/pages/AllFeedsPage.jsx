import { useState } from 'react';

import FeedCard from "../components/FeedCard";

const AllFeedsPage = () => {
    const [feeds, setFeeds] = useState([
        // Sample data
        {
            id: 1,
            title: 'Tech News Blog',
            description: 'Latest updates in technology',
            postCount: 150
        }
    ]);

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
                        isFollowing={false}
                        onToggleFollow={handleToggleFollow}
                    />
                ))}
            </div>
        </div>
    );
};

export default AllFeedsPage;
