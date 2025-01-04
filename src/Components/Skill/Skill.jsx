import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Skill = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch('./skill.json')
            .then(res => res.json())
            .then(data => setSkills(data));

        // Initialize AOS
        AOS.init({
            duration: 1000,  // Animation duration (ms)
            once: true,      // Animation occurs once
        });
    }, []);

    return (
        <div>
            <section className="pb-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-blue-600 mb-4">Skills</h2>
                    <p className="text-lg text-gray-600 mb-12">
                        These are my working Skills.
                    </p>
                    <div className="overflow-hidden">
                        <div className="flex gap-5 animate-scroll">
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg shadow-lg py-4 px-2 border border-orange-400 hover:shadow-xl transition"
                                    data-aos="fade-left"  // Add animation type (right-to-left)
                                    data-aos-duration="1000"  // Animation duration
                                >
                                    <img
                                        src={skill.icon}
                                        alt={`${skill.title} icon`}
                                        className="w-16 h-16 mx-auto mb-4"
                                    />
                                    <h3 className="text-xl font-bold text-gray-800">{skill.title}</h3>
                                    <p className="text-gray-600 text-xs mt-2">{skill.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Add custom CSS for continuous animation */}
            <style>
                {`
                    @keyframes scrollRightToLeft {
                        0% {
                            transform: translateX(100%);
                        }
                        100% {
                            transform: translateX(-100%);
                        }
                    }

                    .animate-scroll {
                        animation: scrollRightToLeft 30s linear infinite;
                    }
                `}
            </style>
        </div>
    );
};

export default Skill;