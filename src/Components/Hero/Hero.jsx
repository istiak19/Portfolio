import { FaEnvelope } from 'react-icons/fa';
import myPic from '../../assets/Anik.jpg';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex flex-col-reverse lg:flex-row lg:space-x-12 px-6 md:px-12">
                <div className="text-center lg:text-left flex-1">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-500 mb-4"> Hello I'm <br /><span className="text-[#9E57F6]">Istiak Ahamed</span></h1>
                    <p className="text-xl text-gray-500 mb-6">Junior Web Developer</p>
                    <div className="md:flex md:justify-start justify-center space-x-4">
                        {/* GitHub Link */}
                        <a
                            href="https://github.com/istiak19"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline btn-accent mb-2 md:mb-0 w-full md:w-auto"
                        >
                            <FaGithub className="mr-2" /> GitHub
                        </a>

                        {/* LinkedIn Link */}
                        <a
                            href="https://www.linkedin.com/in/istiak-ahamed-0619at/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline btn-primary mb-2 md:mb-0 w-full md:w-auto"
                        >
                            <FaLinkedin className="mr-2" /> LinkedIn
                        </a>

                        {/* Twitter Link */}
                        <a
                            href="https://x.com/ISTIAKA13842838"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline btn-info mb-2 md:mb-0 w-full md:w-auto"
                        >
                            <FaTwitter className="mr-2" /> Twitter
                        </a>

                        {/* Facebook Link */}
                        <a
                            href="https://www.facebook.com/istiak.ahamed.19/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline btn-secondary mb-2 md:mb-0 w-full md:w-auto"
                        >
                            <FaFacebook className="mr-2" /> Facebook
                        </a>

                        {/* Email Link */}
                        <a
                            href="mailto:istiakanik79@gmail.com"
                            className="btn btn-outline btn-warning mb-2 md:mb-0 w-full md:w-auto"
                        >
                            <FaEnvelope className="mr-2" /> Email
                        </a>

                        {/* WhatsApp Link */}
                        <a
                            href="https://wa.me/8801794270067"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline btn-success mb-2 md:mb-0 w-full md:w-auto"
                        >
                            <FaWhatsapp className="mr-2" /> WhatsApp
                        </a>
                    </div>
                </div>

                <div className="flex justify-center lg:justify-end flex-1">
                    <img
                        src={myPic}
                        alt="Istiak Ahamed"
                        className="max-w-xs rounded-lg shadow-xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;