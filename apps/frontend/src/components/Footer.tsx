import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-100 py-4 border-t border-gray-200">
            <div className="flex flex-col items-center justify-center space-y-2">
                <a
                    href="https://github.com/ErSantis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-800 text-base no-underline hover:underline"
                >
                   
                    <span>
                        Made by <span className="font-bold text-blue-600">ErSantis</span>
                    </span>
                </a>
                <p className="text-sm text-gray-500">
                    © {new Date().getFullYear()} All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
