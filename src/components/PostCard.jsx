const PostCard = ({ post }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                <span>{post.feedTitle}</span>
                <span>•</span>
                <span>{post.publishDate}</span>
            </div>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
            >
                Read more →
            </a>
        </div>
    );
};
