import { FaUser, FaChartBar, FaShieldAlt } from 'react-icons/fa';

const FeaturesSection = () => (
    <div className="features animate-slidein opacity-0 [--slidein-delay:500ms] py-20 px-4  text-center text-white">
        <h2 className="text-4xl font-bold mb-10">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-item">
                <FaUser className="text-5xl text-blue-400 mb-4" />
                <h3 className="text-2xl font-semibold mb-2">User Management</h3>
                <p>Manage user profiles with ease and efficiency.</p>
            </div>
            <div className="feature-item">
                <FaChartBar className="text-5xl text-blue-400 mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Detailed Analytics</h3>
                <p>Gain insights with comprehensive data analytics.</p>
            </div>
            <div className="feature-item">
                <FaShieldAlt className="text-5xl text-blue-400 mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Security</h3>
                <p>Your data is safe with our top-notch security measures.</p>
            </div>
        </div>
    </div>
);

export default FeaturesSection;
