// src/components/Footer.js

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-400 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <span>Developed by Mihir Panchal</span>
                <div className="flex space-x-4">
                    <a href="https://facebook.com" className="hover:text-white">
                        {/* <FacebookI className="h-5 w-5" /> */}
                    </a>
                    <a href="https://instagram.com" className="hover:text-white">
                        {/* <InstagramIcon className="h-5 w-5" /> */}
                    </a>
                    <a href="https://twitter.com" className="hover:text-white">
                        {/* <TwitterIcon className="h-5 w-5" /> */}
                    </a>
                    <a href="https://github.com" className="hover:text-white">
                        {/* <GitHubIcon className="h-5 w-5" /> */}
                    </a>
                    <a href="https://youtube.com" className="hover:text-white">
                        {/* <YouTubeIcon className="h-5 w-5" /> */}
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
