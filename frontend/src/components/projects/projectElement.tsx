import { motion } from "motion/react";
import Project from "../classes/project"

class ProjectElementProps {
    project?:Project;
}

export default function ProjectElement(props: ProjectElementProps) {
    const appear = {
        hidden: {
            opacity:0,
            x:-200
        },
        visible: {
            opacity:1,
            x:0, 
            transition: {
                type:"spring",
                delayChildren:0.5,
                staggerChildren:0.5
            }
        }
    }
    return (
        <div className="d-flex align-items-center justify-content-center bg-black text-success" style={{minWidth:"100vw", height: "100vh" }}>
            <motion.div className="w-50 text-center" variants={appear} initial={"hidden"} whileInView={"visible"} viewport={{ once: true }}>
                <h1 className="montserratBlack text-warning">{props.project?.name}</h1>
                <p className="montserrat text-white">{props.project?.description}</p>
            </motion.div>
        </div>
    )

}