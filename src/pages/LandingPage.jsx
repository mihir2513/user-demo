import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getIsAuthenticated } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import SignupSection from "../components/SignupSection";

const LandingPage = () => {
    const isAuthenticated = useSelector(getIsAuthenticated);
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/dashboard");
        }
    }, [isAuthenticated, navigate]);
    return (
        <div className="landing-page">
            <HeroSection />
            <FeaturesSection />
            <TestimonialsSection />
            {/* <DemoSection /> */}
            <SignupSection />
            {/* <FAQSection /> */}
            {/* <Footer /> */}
        </div>
    );
};

export default LandingPage;
