import { motion } from "motion/react";

class PropsTecnologias {
    frameworks?: string[]
    lenguajes?: string[]
}
export default function Tecnologias(props: PropsTecnologias) {
    const appear={
        hidden:{
            x:-100,
            opacity:0
        },
        visible:{
            x:0,
            opacity:1,
            transition:{
                type: "spring",
                staggerChildren:0.5,
                delayChildren:0.5
            }
        }
    }
    return (
        <div className="bg-black" style={{ height: "100vh" }}>
            
            <div className="container h-100">
            <motion.h1 className="proximanovablack_aad6772e-module__21-Dpq__className text-warning display-2 pt-5 text-center" variants={appear} initial={"hidden"} whileInView={"visible"}>TECNOLOGÍAS</motion.h1>    
                <hr className="text-white"></hr>
                <motion.div className="row h-75 align-content-center align-items-center justify-content-around " variants={appear} initial={"hidden"} whileInView={"visible"}>
                    <motion.div className="col-auto" variants={appear}>
                        <div className="p-3">
                            <h2 className="text-white montserratblack_a2c7f6b5-module__vidL4G__className">Lenguajes</h2>
                            <hr className="text-white"></hr>
                            <ul className="proximanova_1ffacc90-module__hrzBwa__className fw-bold text-white">
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
                            <h2 className="montserratblack_a2c7f6b5-module__vidL4G__className">FrameWorks</h2>
                            <hr className="text-white"></hr>
                            <ul className="proximanova_1ffacc90-module__hrzBwa__className fw-bold">
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