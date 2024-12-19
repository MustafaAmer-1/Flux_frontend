import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/auth';

import {
    RssIcon,
    LogIn,
    UserPlus,
    BookMarked,
    PlusCircle,
    Globe,
    LogOut
} from 'lucide-react';

const Navbar = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(authService.isAuthenticated());

    return (
        <nav className="bg-white shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-4">
                        <RssIcon className="h-6 w-6 text-blue-600" />
                        <span className="font-bold text-xl">Flux</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        {isLoggedIn ? (
                            <>
                                <button
                                    onClick={() => navigate('/feeds')}
                                    className="flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-100"
                                >
                                    <Globe className="h-4 w-4" />
                                    <span>Browse Feeds</span>
                                </button>
                                <button
                                    onClick={() => navigate('/my-posts')}
                                    className="flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-100"
                                >
                                    <BookMarked className="h-4 w-4" />
                                    <span>My Posts</span>
                                </button>

                                <button
                                    onClick={() => navigate('/my-feeds')}
                                    className="flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-100"
                                >
                                    <BookMarked className="h-4 w-4" />
                                    <span>My Feeds</span>
                                </button>

                                <button
                                    onClick={() => navigate('/add-feed')}
                                    className="flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-100"
                                >
                                    <PlusCircle className="h-4 w-4" />
                                    <span>Add Feed</span>
                                </button>
                                <button
                                    onClick={() => {
                                        authService.logout()
                                        setIsLoggedIn(false)
                                        navigate('/login')
                                    }}
                                    className="flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-100"
                                >
                                    <LogOut className="h-4 w-4" />
                                    <span>Log out</span>
                                </button>
                            </>
                        ) : (
                            <>
                                <button
                                    onClick={() => navigate('/feeds')}
                                    className="flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-100"
                                >
                                    <Globe className="h-4 w-4" />
                                    <span>Browse Feeds</span>
                                </button>
                                <button
                                    onClick={() => navigate('/login')}
                                    className="flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-100"
                                >
                                    <LogIn className="h-4 w-4" />
                                    <span>Login</span>
                                </button>
                                <button
                                    onClick={() => navigate('/register')}
                                    className="flex items-center space-x-2 px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
                                >
                                    <UserPlus className="h-4 w-4" />
                                    <span>Register</span>
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
