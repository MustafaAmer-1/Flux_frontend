import { authService } from "../services/auth";

const FeedCard = ({ feed, isAuthenticated, onToggleFollow, isFollowing }) => {
    isAuthenticated = authService.isAuthenticated()

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div>
                <div className="flex justify-between items-start p-2">
                    <h3 className="text-xl font-semibold mb-10">{feed.name}</h3>
                    {isAuthenticated ?
                        <button
                            onClick={() => onToggleFollow(feed.id)}
                            className={`px-4 py-2 rounded-md ${isFollowing
                                ? 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                                : 'bg-blue-600 hover:bg-blue-700 text-white'
                                }`}>
                            {isFollowing ? 'Unfollow' : 'Follow'}
                        </button>
                        : ""}
                </div>
                <a
                    href={feed.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline mb-10"
                >
                    {feed.url.length <= 52 ? feed.url : feed.url.substring(0, 52) + '...'}
                </a>
            </div>
        </div>
    );
};

export default FeedCard;
