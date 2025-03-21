import Project from "../classes/project"

class ProjectElementProps {
    project?:Project;
}

export default function ProjectElement(props: ProjectElementProps) {
    return (
        <div className="d-flex align-items-center justify-content-center bg-black text-success" style={{minWidth:"100vw", height: "100vh" }}>
            <div className="w-50 text-center">
                <h1>{props.project?.name}</h1>
                <p>{props.project?.description}</p>
            </div>
        </div>
    )

}