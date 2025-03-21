import { motion, useScroll, useSpring, useTransform } from "motion/react"
import { useRef } from "react"

export default function Header() {
    const refContainer = useRef(null);
    const scrollYProgressEntire = useScroll().scrollYProgress;
    const { scrollYProgress } = useScroll({ target: refContainer })
    const scrollTransform = useTransform(scrollYProgressEntire, [0, 1], [0, -500]);
    const scrollTransformH1 = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const scrollTransformImg = useTransform(scrollYProgress, [0.3, 1], [400, 0]);
    const scrollTransformImgRotate = useTransform(scrollYProgressEntire, [0, 1], [0, 6]);
    //const scrollLeftImage= useTransform(scrollYProgress,[0,1],[-230,-900]);
    //const scrollRightImage= useTransform(scrollYProgress,[0,1],[-240,400]);
    return (
        <div className="" ref={refContainer} style={{ height: "200vh" }}>
            <div className="position-sticky top-0 overflow-hidden" style={{ height: "100vh", background: "linear-gradient(to bottom,white,black)" }}>
                <div className="position-relative" style={{ height: "100vh" }}>
                    {/*  
                    <motion.img src="/abstractleftLowRes.png" className="position-absolute top-0 bottom-0 m-auto d-inline-block" style={{width:"150vw",height:"50vh", x:scrollLeftImage ,y:-50}}></motion.img>
                    <motion.img src="/abstractrightLowRes.png" className="position-absolute top-0 bottom-0 m-auto d-inline-block" style={{width:"150vw",height:"50vh", x:scrollRightImage, y:-50}}></motion.img>
                    */}
                    <motion.div className="position-absolute start-0 end-0 m-auto top-0 bottom-0 align-content-center text-center" style={{ y: scrollTransform }}>
                        <motion.svg height="100%" xmlns="http://www.w3.org/2000/svg" className="w-75 z-3 start-0 end-0 m-auto position-absolute">
                            <motion.rect width="95%" height="100%" x="10" y="10" rx="20" ry="20" pathLength={0}
                                style={{ fill: "none", stroke: "black", strokeWidth: 5, opacity: 1, pathLength: useSpring(scrollYProgress,{damping:30}) }} />
                        </motion.svg>
                        <motion.h1 className="proximanovablack_aad6772e-module__21-Dpq__className text-black display-1 mt-3 w-75 m-auto z-3" style={{ scale: useSpring(scrollTransformH1)}}>WELCOME TO DARIO WEB</motion.h1>

                        <motion.img src="/abstractLowRes.png" className="w-25 mt-5 pt-5" style={{ y: useSpring(scrollTransformImg), scale: useSpring(scrollTransformImgRotate) }}></motion.img>
                    </motion.div>

                </div>
            </div>
        </div>
    )
}