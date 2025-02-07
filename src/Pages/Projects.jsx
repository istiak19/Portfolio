import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/project.json')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, []);

    const navigate = useNavigate();

    const handleViewMore = (projectId) => {
        navigate(`/view/${projectId}`);
    };

    // Function to limit the description to a specific number of characters
    const truncateDescription = (description, limit = 100) => {
        if (description.length > limit) {
            return description.substring(0, limit) + "...";
        }
        return description;
    };

    return (
        <div className="py-12">
            <Helmet>
                <title>Projects | ISTIAK AHAMED</title>
            </Helmet>
            <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">
                My Best Projects
            </h2>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="rounded-lg bg-[#1E2636] border border-white shadow-lg overflow-hidden"
                    >
                        <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6 flex flex-col">
                            <h3 className="text-xl font-semibold text-white mb-4">
                                {project.name}
                            </h3>
                            <p className="text-gray-400">
                                {truncateDescription(project.description, 60)}
                            </p>
                            <div className="mt-6 flex justify-between">
                                <a
                                    href={project?.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline btn-info mb-2 md:mb-0 w-full md:w-auto"
                                >
                                    Live Demo <BsBoxArrowUpRight />
                                </a>
                                <button
                                    onClick={() => handleViewMore(project.id)}
                                   className="btn btn-outline btn-info mb-2 md:mb-0 w-full md:w-auto"
                                >
                                    View Details <FaLongArrowAltRight />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
