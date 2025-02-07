import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const View = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/project.json')
            .then(res => res.json())
            .then(data => {
                const selectedProject = data.find(proj => proj.id === parseInt(id));
                setProject(selectedProject);
            });
    }, [id]);

    return (
        <div className="card *:text-white shadow-xl my-20">
            <figure>
                <img
                    src={project?.image}
                    alt={project?.name} />
            </figure>
            <div className="card-body">
                <h2 className="text-2xl font-bold">{project?.name}</h2>
                <p><span className="text-xl font-medium">Description: </span>{project?.description}</p>
                <p><span className="text-xl font-medium">Technologies: </span>{project?.technologies}</p>
                <p><span className="text-xl font-medium">Challenges: </span>{project?.challenges || 'N/A'}</p>
                <p><span className="text-xl font-medium">Improvements: </span>{project?.improvements || 'N/A'}</p>

                <div className="mt-4">
                    <h3 className="text-xl font-semibold">Features:</h3>
                    <ul className="list-disc pl-6">
                        {
                            project?.features?.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))
                        }
                    </ul>
                </div>

                <div className="space-y-2 *:text-blue-500 mt-6">
                    <a
                        href={project?.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block hover:underline"
                    >
                        Live Project
                    </a>
                    <a
                        href={project?.clientLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block hover:underline"
                    >
                       GitHub Repository Client
                    </a>
                </div>
            </div>
        </div>
    );
};

export default View;