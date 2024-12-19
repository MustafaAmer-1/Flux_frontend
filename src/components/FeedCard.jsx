import { authService } from "../services/auth";

const FeedCard = ({ feed, isAuthenticated, onToggleFollow }) => {
    isAuthenticated = authService.isAuthenticated()

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start p-2">
                <div>
                    <h3 className="text-xl font-semibold mb-10">{feed.name}</h3>
                    <a
                        href={feed.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline mb-10"
                    >
                        {feed.url}
                    </a>
                </div>
                {isAuthenticated ? <button
                    onClick={() => onToggleFollow(feed.id)}
                    className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white"
                > Follow
                </button> : ""}
            </div>
        </div>
    );
};

export default FeedCard;
