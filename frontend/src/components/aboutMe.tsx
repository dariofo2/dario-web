import { motion, useScroll, useSpring, useTransform } from "motion/react";

export default function AboutMe () {
    const {scrollYProgress}=useScroll();
    const scrollYH1=useTransform(scrollYProgress,[0,1],[50,-200]);
    const scrollYP=useTransform(scrollYProgress,[0,1],[200,-500]);
    
    return (
        <div className="montserratblack_a2c7f6b5-module__vidL4G__className bg-black text-white text-center align-content-center" style={{height:"100vh"}}>
            <motion.h1 className="text-warning my-5 display-3" style={{y:useSpring(scrollYH1)}}>SOBRE MÍ</motion.h1>
            <motion.p className="m-0 mt-5 h3" style={{y: useSpring(scrollYP, {stiffness:100})}}>Soy Técnico Superior en Desarrollo de Interfaces Web Full-Stack</motion.p>
        </div>
    )
}