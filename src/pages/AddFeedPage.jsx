import React, { useState } from 'react';
import {
    AlertCircle
} from 'lucide-react';
import { apiService } from '../services/api';
import { useNavigate } from 'react-router-dom';

const createFeed = async (feedName, feedUrl) => {
    try {
        const feed = await apiService.fetch("/feeds", {
            method: 'PUT',
            body: JSON.stringify({
                name: feedName,
                url: feedUrl
            })
        })
        return feed
    } catch (error) {
        console.error(error);
    }
    return null
}

const AddFeedPage = () => {
    const [feedName, setFeedName] = useState('');
    const [feedUrl, setFeedUrl] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const feed = await createFeed(feedName, feedUrl)
        if (feed) {
            navigate("/my-posts")
        } else {
            setError("Error Creating Feed! Please try again!")

        }
    };

    return (
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Add New Feed</h2>
            {error && (
                <div className="flex items-center space-x-2 text-red-600 mb-4">
                    <AlertCircle className="h-5 w-5" />
                    <span>{error}</span>
                </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Feed Name</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-md"
                        value={feedName}
                        onChange={(e) => setFeedName(e.target.value)}
                        placeholder="Example's Blog"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Feed URL</label>
                    <input
                        type="url"
                        className="w-full px-3 py-2 border rounded-md"
                        value={feedUrl}
                        onChange={(e) => setFeedUrl(e.target.value)}
                        placeholder="https://example.com/feed.xml"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                    Add Feed
                </button>
            </form>
        </div>
    );
};

export default AddFeedPage;
