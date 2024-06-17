const TestimonialsSection = () => (
    <div className="testimonials animate-slidein opacity-0 [--slidein-delay:700ms] py-20 px-4  text-center text-white">
        <h2 className="text-4xl font-bold mb-10">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="testimonial-item">
                <p className="italic mb-4">
                    &quot;This app has changed the way I manage my data. It&apos;s incredibly user-friendly
                    and efficient!&quot;
                </p>
                <h4 className="font-semibold">- John Doe</h4>
            </div>
            <div className="testimonial-item">
                <p className="italic mb-4">
                    &quot;I love the detailed analytics feature. It helps me understand my users better.&quot;
                </p>
                <h4 className="font-semibold">- Jane Smith</h4>
            </div>
            <div className="testimonial-item">
                <p className="italic mb-4">
                    &quot;The security features give me peace of mind knowing my data is safe.&quot;
                </p>
                <h4 className="font-semibold">- Alice Johnson</h4>
            </div>
        </div>
    </div>
);

export default TestimonialsSection;
