import { Link, NavLink } from 'react-router-dom';
import logoPic from '../../assets/logo.png';
import { CiSaveDown1 } from 'react-icons/ci';

const Navbar = () => {
    const links = (
        <>
            <li><NavLink className={({ isActive }) => (isActive ? "!text-blue-600 font-semibold" : "text-white")} to='/'>Home</NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? "!text-blue-600 font-semibold" : "text-white")} to='/about'>About</NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? "!text-blue-600 font-semibold" : "text-white")} to='/edu'>Education</NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? "!text-blue-600 font-semibold" : "text-white")} to='/project'>Projects</NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? "!text-blue-600 font-semibold" : "text-white")} to='/contact'>Contact Me</NavLink></li>
        </>
    );

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
        <div className="px-8 navbar sticky top-0 z-50 backdrop-blur-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-outline btn-accent mb-2 md:mb-0 w-full md:w-auto lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 bg-[#292637] shadow">
                        {links}
                    </ul>
                </div>
                <Link to='/' className="">
                    <img className='w-16' src={logoPic} alt="Logo" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <button
                    onClick={handleResumeDownload}
                    className="btn btn-outline btn-accent mb-2 md:mb-0 w-full md:w-auto"
                >
                    <CiSaveDown1 /> Resume
                </button>
            </div>
        </div>
    );
};

export default Navbar;