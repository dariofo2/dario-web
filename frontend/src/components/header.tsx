import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"

export default function Header() {
    const refContainer= useRef(null);
    const scrollYProgressEntire = useScroll().scrollYProgress;
    const {scrollYProgress} = useScroll({target:refContainer})
    const scrollTransform = useTransform(scrollYProgress,[0,1],[1,1.25]);
    const scrollTransformH1 = useTransform(scrollYProgress,[0,0.3],[0,1]);
    const scrollTransformImg = useTransform(scrollYProgress,[0.3,1],[400,0]);
    const scrollTransformImgRotate= useTransform(scrollYProgressEntire,[0,1],[0,4]);
    //const scrollLeftImage= useTransform(scrollYProgress,[0,1],[-230,-900]);
    //const scrollRightImage= useTransform(scrollYProgress,[0,1],[-240,400]);
    return (
        <div className="" ref={refContainer} style={{ height: "200vh"}}>
            <div className="position-sticky top-0 overflow-hidden" style={{ height: "100vh", background:"linear-gradient(to bottom,white,black)"}}>
                <div className="position-relative" style={{height:"100vh"}}>
                    {/*  
                    <motion.img src="/abstractleftLowRes.png" className="position-absolute top-0 bottom-0 m-auto d-inline-block" style={{width:"150vw",height:"50vh", x:scrollLeftImage ,y:-50}}></motion.img>
                    <motion.img src="/abstractrightLowRes.png" className="position-absolute top-0 bottom-0 m-auto d-inline-block" style={{width:"150vw",height:"50vh", x:scrollRightImage, y:-50}}></motion.img>
                    */}
                    <div className="position-absolute start-0 end-0 m-auto top-0 bottom-0 align-content-center text-center">
                    <motion.h1 className="text-dark display-1 fw-bolder" style={{scale:scrollTransformH1}}>Welcome to Dario Web</motion.h1>
                    <motion.img src="/abstractLowRes.png" className="w-25" style={{y:scrollTransformImg, scale:scrollTransformImgRotate}}></motion.img>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}