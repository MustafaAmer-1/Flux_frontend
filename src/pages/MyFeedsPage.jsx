import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import FeedCard from "../components/FeedCard";
import { authService } from '../services/auth';
import { apiService } from '../services/api';

const fetchFeeds = async () => {
    try {
        const feeds = await apiService.fetch("/feed_follow", { method: 'GET' })
        console.log(feeds);
        return feeds
    } catch (error) {
        console.error(error);
    }
    return null
}

const unFollowFeed = async (feedId) => {
    try {
        await apiService.fetch(`/feed_follow/${feedId}`, { method: 'DELETE' })
        return true
    } catch (error) {
        console.error(error);
    }
    return false
}


const MyFeedsPage = () => {
    const navigate = useNavigate();

    const isAuthenticated = authService.isAuthenticated()
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated]);

    const [feeds, setFeeds] = useState([]);
    const [feeds_update, setFeedsUpdate] = useState([]);

    useEffect(() => {
        fetchFeeds().then((feeds) => {
            setFeeds(feeds)
        })
    }, [feeds_update])

    const handleToggleFollow = async (feedId) => {
        unFollowFeed(feedId).then((resp) => {
            if (resp) {
                setFeedsUpdate(!feeds_update)
            }
        })
    };

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold">My Followed Feeds</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {feeds.map(feed => (
                    <FeedCard
                        key={feed.id}
                        feed={feed}
                        isFollowing={true}
                        onToggleFollow={handleToggleFollow}
                    />
                ))}
            </div>
        </div>
    );
};

export default MyFeedsPage;
