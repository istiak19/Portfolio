import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skill = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch('./skill.json')
            .then(res => res.json())
            .then(data => setSkills([...data, ...data]));
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className="overflow-hidden">
            <section className="pb-8">
                <div className="px-4 text-center">
                    <h2 className="text-4xl font-bold text-blue-500 mb-4">Portfolio Showcase</h2>
                    <p className="text-lg text-gray-400 mb-12">
                        Explore my journey through technical expertise. Each section represents a milestone in my continuous learning path.
                    </p>
                    <div className="relative w-full overflow-hidden">
                        <div className="flex gap-5 animate-scroll">
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="rounded-lg shadow-lg p-3 bg-[#1C2237] hover:shadow-xl transition flex-shrink-0"
                                    data-aos="fade-left"
                                    data-aos-duration="1000"
                                    style={{ minWidth: "150px" }}
                                >
                                    <img
                                        src={skill.icon}
                                        alt={`${skill.title} icon`}
                                        className="w-16 h-16 mx-auto mb-4"
                                    />
                                    <h3 className="font-medium text-white">{skill.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Custom CSS for Continuous Scrolling */}
            <style>
                {`
                    @keyframes scrollRightToLeft {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }

                    .animate-scroll {
                        display: flex;
                        width: max-content; /* Ensures smooth loop */
                        animation: scrollRightToLeft 20s linear infinite;
                    }
                `}
            </style>
        </div>
    );
};

export default Skill;