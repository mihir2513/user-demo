import { Button } from "@headlessui/react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
    const navigate = useNavigate();

    return (
        <div className="hero animate-slidein opacity-0 [--slidein-delay:300ms] text-white py-20 px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Welcome to Our App</h1>
            <p className="text-xl mb-6">
                Your one-stop solution for managing your profile and user data effortlessly.
            </p>
            <Button
                onClick={() => navigate("/login")}
                className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold animate-bounce"
            >
                Get Started
            </Button>
        </div>
    );
};

export default HeroSection;
