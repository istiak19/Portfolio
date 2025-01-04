const Educational = () => {
    const education = [
        {
            degree: 'Bachelor of Computer Science Engineering',
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
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">EDUCATION</h2>
                <div className="border-t border-gray-300">
                    {education.map((item, index) => (
                        <div
                            key={index}
                            className="py-4 border-b border-gray-200 flex justify-between items-start"
                        >
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {item.degree}
                                </h3>
                                {item.institution && (
                                    <p className="text-gray-600">{item.institution}</p>
                                )}
                                <p className="text-gray-600">{item.gpa}</p>
                            </div>
                            <div className="text-gray-600 font-medium">{item.timeline}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Educational;