import pic from '../assets/Anik.jpg'
const About = () => {
    return (
        <div>
            <div className="text-center mb-6 mt-5">
                <h1 className="text-4xl font-bold text-blue-600">About Me</h1>
                <p className="text-lg text-gray-600 mt-4">
                    A brief introduction about myself and my journey.
                </p>
            </div>
            <div className="lg:flex gap-7 items-center">
                <div className="mb-8">
                    <div className="w-48 h-48 mx-auto rounded-full overflow-hidden">
                        <img
                            src={pic}
                            alt="Your Avatar"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800 mt-6 text-center">
                        Istiak Ahamed
                    </h3>
                    <p className="text-gray-600 mt-2 text-center">Junior Web Developer</p>
                </div>
                <div>
                    <p className="text-gray-700">
                        I am currently seeking opportunities in the field of Computer Science. I have a passion for problem-solving and coding, and I’m always eager to learn new technologies. I'm a quick learner, hardworking, and committed to mastering web development. My expertise lies in web technologies, and I am keen to contribute my skills to impactful projects.
                    </p>
                    <p className="text-gray-700 mt-5">
                        In my free time, I enjoy traveling and exploring new foods, which adds to my creativity and appreciation for diverse cultures.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;