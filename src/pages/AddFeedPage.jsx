import React, { useState } from 'react';
import {
    AlertCircle
} from 'lucide-react';

const AddFeedPage = () => {
    const [feedUrl, setFeedUrl] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle feed addition logic here
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
