import { motion } from "motion/react";

class PropsTecnologias {
    frameworks?: string[]
    lenguajes?: string[]
}
export default function Tecnologias(props: PropsTecnologias) {
    const appear = {
        hidden: {
            x: -100,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                staggerChildren: 0.5,
                delayChildren: 0.5
            }
        }
    }
    return (
        <div id="tecnologias" className="bg-black" style={{ height: "93vh" }}>
            <div className="container h-100">
                <motion.h1 className="proximaNovaBlack text-warning display-2 pt-5 text-center" variants={appear} initial={"hidden"} whileInView={"visible"}>TECNOLOGÍAS</motion.h1>
                <hr className="text-white"></hr>
                <motion.div className="row h-75 align-content-center align-items-center justify-content-around " variants={appear} initial={"hidden"} whileInView={"visible"}>
                    <motion.div className="col-auto" variants={appear}>
                        <div className="p-3">
                            <h2 className="text-white montserratBlack">Lenguajes</h2>
                            <hr className="text-white"></hr>
                            <ul className="montserrat fw-bold text-white">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>SQL</li>
                                <li>Java</li>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>NodeJs</li>
                                <li>Python</li>
                                <li>PHP</li>
                                <li>Solidity</li>
                            </ul>
                        </div>
                    </motion.div>
                    <motion.div className="col-auto" variants={appear}>
                        <div className="p-3 text-white">
                            <h2 className="montserratBlack">FrameWorks</h2>
                            <hr className="text-white"></hr>
                            <ul className="montserrat fw-bold text-white">
                                <li>React</li>
                                <li>React Native</li>
                                <li>Next.Js</li>
                                <li>Nest.Js</li>
                                <li>Express.js</li>
                                <li>Django</li>
                                <li>Angular.js</li>
                                <li>Spring</li>
                            </ul>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}