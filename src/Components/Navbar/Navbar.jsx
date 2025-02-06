import { Link, NavLink } from 'react-router-dom';
import logoPic from '../../assets/logo.png';

const Navbar = () => {
    const links = (
        <>
            <li><NavLink className={({ isActive }) => (isActive ? "!text-blue-600 font-semibold" : "text-black")} to='/'>Home</NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? "!text-blue-600 font-semibold" : "text-black")} to='/about'>About</NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? "!text-blue-600 font-semibold" : "text-black")} to='/edu'>Education</NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? "!text-blue-600 font-semibold" : "text-black")} to='/project'>Projects</NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? "!text-blue-600 font-semibold" : "text-black")} to='/contact'>Contact Me</NavLink></li>
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
        <div className="navbar sticky top-0 z-50 backdrop-blur-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
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
                    className="btn bg-blue-500 text-white"
                >
                    Resume
                </button>
            </div>
        </div>
    );
};

export default Navbar;