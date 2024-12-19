const FeedCard = ({ feed, isFollowing, onToggleFollow }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-xl font-semibold mb-2">{feed.title}</h3>
                    <p className="text-gray-600 mb-4">{feed.description}</p>
                    <span className="text-sm text-gray-500">{feed.postCount} posts</span>
                </div>
                <button
                    onClick={() => onToggleFollow(feed.id)}
                    className={`px-4 py-2 rounded-md ${isFollowing
                        ? 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                        }`}
                >
                    {isFollowing ? 'Unfollow' : 'Follow'}
                </button>
            </div>
        </div>
    );
};

export default FeedCard;
