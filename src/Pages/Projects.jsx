import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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

    return (
        <div className="py-12">
            <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">
                My Best Projects
            </h2>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-white rounded-lg shadow-lg overflow-hidden"
                    >
                        <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                {project.name}
                            </h3>
                            <div className="mt-6">
                                <button
                                    onClick={() => handleViewMore(project.id)}
                                    className="btn text-white font-semibold bg-orange-400 w-full"
                                >
                                    View Details
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
