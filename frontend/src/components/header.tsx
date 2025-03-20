import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"

export default function Header() {
    const refContainer= useRef(null);
    const {scrollYProgress} = useScroll({target:refContainer})
    const scrollTransform = useTransform(scrollYProgress,[0,1],[1,1.25]);

    return (
        <div className="" ref={refContainer} style={{ height: "200vh" }}>
            <div className="position-sticky top-0 overflow-hidden" style={{ height: "100vh" }}>
                <div className="">
                   
                    <motion.img src="./abstract.png" className="img-fluid" style={{scale:scrollTransform}}></motion.img>
                    <h1 className="text-black display-1 text-center">Welcome to Dario Web</h1>
                </div>
            </div>
        </div>
    )
}