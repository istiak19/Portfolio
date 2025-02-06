import pic from '../assets/Anik.jpg';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,  // Duration for animations
            once: true,      // Animation happens once when the element enters the view
        });
    }, []);

    return (
        <div>
            <div className="text-center mb-6 mt-5" data-aos="fade-up">
                <h1 className="text-4xl font-bold text-blue-600">About Me</h1>
                <p className="text-lg text-gray-400 mt-4">
                    A brief introduction about myself and my journey.
                </p>
            </div>
            <div className="lg:flex gap-7 items-center" data-aos="fade-up">
                <div className="mb-8" data-aos="zoom-in" data-aos-delay="200">
                    <div className="w-48 h-48 mx-auto rounded-full overflow-hidden">
                        <img
                            src={pic}
                            alt="Your Avatar"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mt-6 text-center">
                        Istiak Ahamed
                    </h3>
                    <p className="text-gray-400 mt-2 text-center">Junior Web Developer</p>
                </div>
                <div data-aos="fade-left" data-aos-delay="400">
                    <p className="text-white">
                        I have a passion for problem-solving and coding, and I’m always eager to learn new technologies.
                        I'm a quick learner, hardworking, and committed to mastering web development. My expertise lies
                        in web technologies, and I'm keen to contribute my skills to impactful projects.
                    </p>
                    <p className="text-white mt-5">
                        In my free time, I enjoy traveling and exploring new foods, which adds to my creativity and appreciation for diverse cultures.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;