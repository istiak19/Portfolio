import pic from '../assets/Anik.jpg';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet-async';

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,  // Duration for animations
            once: true,      // Animation happens once when the element enters the view
        });
    }, []);

    return (
        <div>
            <Helmet>
                <title>About | ISTIAK AHAMED</title>
            </Helmet>
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
                        Hi! I’m Istiak Ahamed, a junior web developer passionate about creating modern and responsive web applications. My journey into programming began during my Computer Science studies, when I became curious about how websites work. This curiosity quickly turned into a deep fascination with coding and problem-solving, leading me to explore various web technologies.Over time, I have gained expertise in JavaScript, React, Next.js, and the MERN stack, allowing me to build full-stack applications that are both functional and user-friendly..
                    </p>
                    <p className="text-white mt-5">
                        My journey into programming started during my Computer Science studies, when I became curious about how websites work. This curiosity soon turned into a deep fascination with coding.
                    </p>
                    <p className="text-white mt-5">
                        I enjoy working on projects that solve real-world problems and improve people's lives through technology. Whether it's developing web applications, interactive user interfaces, or full-stack solutions, I find joy in creating seamless, responsive, and user-friendly experiences.
                    </p>
                    <p className="text-white mt-5">
                        In my free time, I enjoy traveling and exploring new foods, which adds to my creativity and appreciation for diverse cultures.
                    </p>
                    <p className="text-white mt-5 mb-10">
                        I’m on a mission to make an impact in the tech world by building innovative digital solutions. If you’re looking for a passionate developer who loves to learn, collaborate, and create, let’s connect!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;