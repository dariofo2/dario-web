"use client"
import { animate, motion, transform, useScroll, useSpring, useTransform } from "motion/react"
import { useRef, useState } from "react"
import ProjectElement from "./projectElement";
import Project from "../classes/project";

class PropProjects {
    projects?: Project[] = []
}
export default function Projects(props: PropProjects) {
    const scrollRef = useRef(null);
    const [itemsLength, useItemsLength] = useState(props.projects?.length);
    const { scrollYProgress } = useScroll({ target: scrollRef });
    const widthScroll = useTransform(scrollYProgress, [0, 1], ["0vw", `-${itemsLength as number - 1}00vw`]);
    
    const projects = props.projects?.map((x: Project) => {
        return (
            <ProjectElement project={x}></ProjectElement>
        )
    })
    return (
        <div>
            <div id="container" ref={scrollRef} className="" style={{ height: "300vh" }} >
                <div className="position-sticky top-0 overflow-hidden bg-black">
                    <h1 className="montserratblack_a2c7f6b5-module__vidL4G__className text-bg-warning display-3 text-center position-absolute w-100 z-3 mt-5">PROYECTOS</h1>
                    <motion.div
                        className="position-absolute bg-success z-3 w-75 m-auto start-0 end-0"
                        style={{ bottom: 20, height: 5, scaleX: useSpring(scrollYProgress) }}
                    />
                    <motion.div className="d-flex"
                        style={{ x: widthScroll }}
                    >
                        {projects}
                    </motion.div>
                </div>


            </div>
        </div>
    )
}