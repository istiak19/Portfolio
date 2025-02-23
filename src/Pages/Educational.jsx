import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";

const Educational = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-in-out" });
    }, []);

    const education = [
        {
            degree: 'Bachelor of Computer Science & Engineering',
            institution: 'Daffodil International University',
            timeline: '2020-2024',
            gpa: 'CGPA: 3.56',
        },
        {
            degree: 'BAF Shaheen College, Jashore',
            institution: '',
            timeline: '2017-2019',
        },
        {
            degree: 'Pragpur High School, Kushtia',
            institution: '',
            timeline: '2015-2017',
        },
    ];

    return (
        <section className="py-8 px-4">
            <Helmet>
                <title>Education | ISTIAK AHAMED</title>
            </Helmet>
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-center text-white">EDUCATION</h2>
                <div className="border-t border-gray-300">
                    {education.map((item, index) => (
                        <div
                            key={index}
                            data-aos="fade-up" // AOS animation added
                            className="py-4 border-b border-gray-200 flex justify-between items-start"
                        >
                            <div>
                                <h3 className="text-xl text-white">{item.degree}</h3>
                                {item.institution && (
                                    <p className="text-gray-400">{item.institution}</p>
                                )}
                                <p className="text-gray-400">{item.gpa}</p>
                            </div>
                            <div className="text-gray-400 font-medium">{item.timeline}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Educational;