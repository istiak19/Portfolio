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
        <div className="card bg-base-100 shadow-xl my-20">
            <figure>
                <img
                    src={project?.image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="text-2xl font-bold">{project?.name}</h2>
                <p><span className="text-xl font-medium">Description: </span>{project?.description}</p>
                <p><span className="text-xl font-medium">Technologies: </span>{project?.technologies}</p>
                <p><span className="text-xl font-medium">Challenges: </span>{project?.challenges||'N/A'}</p>
                <div className="space-y-2 *:text-orange-400">
                    <a
                        href={project?.clientLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block hover:underline"
                    >
                        Client Code
                    </a>
                    <a
                        href={project?.serverLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block hover:underline"
                    >
                        Server Code
                    </a>
                    <a
                        href={project?.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block hover:underline"
                    >
                        Live Project
                    </a>
                </div>
            </div>
        </div>
    );
};

export default View;