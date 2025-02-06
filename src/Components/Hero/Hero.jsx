import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { CiSaveDown1 } from "react-icons/ci";
import myPic from '../../assets/Anik.jpg';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const resumeLink = 'https://drive.google.com/uc?export=download&id=1lEQfIPHSfUKngD-9H81wTvOKe6iExv2P';
    const resumeViewLink = 'https://drive.google.com/file/d/1lEQfIPHSfUKngD-9H81wTvOKe6iExv2P/view?usp=sharing';

    const handleResumeDownload = () => {
        window.open(resumeViewLink, '_blank');
        const link = document.createElement('a');
        link.href = resumeLink;
        link.setAttribute('download', 'Resume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex flex-col-reverse lg:flex-row lg:space-x-12 px-6 md:px-12">
                <div className="text-center lg:text-left flex-1" data-aos="fade-right">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-500 mb-4">
                        Hello I'm <br /><span className="text-[#9E57F6]">Istiak Ahamed</span>
                    </h1>
                    <p className="text-xl text-gray-500 mb-6">Junior Web Developer</p>
                    <p className="text-gray-500 mb-6">
                        Crafting Innovative, Functional, and User-Friendly Websites for Seamless Digital Solutions.
                    </p>
                    <div className='my-8'>
                        <button
                            onClick={handleResumeDownload}
                            className="btn btn-outline btn-success px-16 mb-2 md:mb-0 w-full md:w-auto"
                        >
                          <CiSaveDown1 />  Resume
                        </button>
                    </div>
                    <div className="md:flex md:justify-start justify-center space-x-4">
                        {/* GitHub Link */}
                        <a
                            href="https://github.com/istiak19"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline btn-accent mb-2 md:mb-0 w-full md:w-auto"
                            data-aos="zoom-in"
                            data-aos-delay="100"
                        >
                            <FaGithub className="mr-2" /> GitHub
                        </a>

                        {/* LinkedIn Link */}
                        <a
                            href="https://www.linkedin.com/in/istiak-ahamed-0619at/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline btn-primary mb-2 md:mb-0 w-full md:w-auto"
                            data-aos="zoom-in"
                            data-aos-delay="200"
                        >
                            <FaLinkedin className="mr-2" /> LinkedIn
                        </a>

                        {/* Twitter Link */}
                        <a
                            href="https://x.com/ISTIAKA13842838"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline btn-info mb-2 md:mb-0 w-full md:w-auto"
                            data-aos="zoom-in"
                            data-aos-delay="300"
                        >
                            <FaTwitter className="mr-2" /> Twitter
                        </a>

                        {/* Facebook Link */}
                        <a
                            href="https://www.facebook.com/istiak.ahamed.19/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline btn-secondary mb-2 md:mb-0 w-full md:w-auto"
                            data-aos="zoom-in"
                            data-aos-delay="400"
                        >
                            <FaFacebook className="mr-2" /> Facebook
                        </a>

                        {/* Email Link */}
                        <a
                            href="mailto:istiakanik79@gmail.com"
                            className="btn btn-outline btn-warning mb-2 md:mb-0 w-full md:w-auto"
                            data-aos="zoom-in"
                            data-aos-delay="500"
                        >
                            <FaEnvelope className="mr-2" /> Email
                        </a>

                        {/* WhatsApp Link */}
                        <a
                            href="https://wa.me/8801794270067"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline btn-success mb-2 md:mb-0 w-full md:w-auto"
                            data-aos="zoom-in"
                            data-aos-delay="600"
                        >
                            <FaWhatsapp className="mr-2" /> WhatsApp
                        </a>
                    </div>
                </div>

                <div className="flex justify-center lg:justify-end flex-1" data-aos="fade-left">
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