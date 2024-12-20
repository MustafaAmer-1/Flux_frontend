
import { Calendar, Globe } from 'lucide-react';
import ReactHtmlParser from 'react-html-parser'

const RSSFeedItem = ({ item }) => {
    return (
        <li className="list-none border border-gray-300 rounded-lg shadow-md mb-4">
            <div className="bg-white rounded-lg overflow-hidden">
                <div className="bg-gray-100 p-4">
                    <h5 className="text-lg font-semibold">{item.title}</h5>
                </div>
                <div className="p-4">
                    <p className="text-gray-700">
                        <div>
                            {ReactHtmlParser(item.description)}
                        </div>
                    </p>
                    <div className="flex justify-end mt-4">
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-gray-800 text-white text-sm px-4 py-2 rounded hover:bg-gray-700 transition"
                        >
                            Read more
                        </a>
                    </div>
                </div>
                <div className="bg-gray-100 px-4 py-2 flex justify-between text-sm text-gray-600">
                    <div className="flex">
                        <Globe className="h-4 w-4 mr-1" />
                        <span>From: {item.source}</span>
                    </div>
                    <div className='flex'>
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>Date: {new Date(item.publish_date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                        })}</span>
                    </div>
                </div>
            </div>
        </li>
    );
};


const RSSItem = {
    title: "",
    link: "",
    publish_date: "",
    source: "",
    source_url: "",
    description: "",
};

export default RSSFeedItem
