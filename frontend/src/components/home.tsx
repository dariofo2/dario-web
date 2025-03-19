"use client"
import { motion, useScroll, useTransform } from "motion/react"
import { useRef, useState } from "react"

export default function HHome() {
    const scrollRef=useRef(null);
    const [itemsLength,useItemsLength]=useState();
    const {scrollYProgress} =useScroll({target:scrollRef});
    const widthScroll=useTransform(scrollYProgress,[0,1],[0,- scrollRef.current?.offsetWidth]);
    return (
        <div>
            <motion.div id="container" ref={scrollRef} className="d-flex column-gap-3" style={{ height: "300vh", x:widthScroll}} >
                    <div className="bg-primary position-sticky top-0" style={{ minWidth: 400, height: 400 }}></div>
                    <div className="bg-primary position-sticky top-0" style={{ minWidth: 400, height: 400 }}></div>
                    <div className="bg-primary position-sticky top-0" style={{ minWidth: 400, height: 400 }}></div>
                    <div className="bg-primary position-sticky top-0" style={{ minWidth: 400, height: 400 }}></div>
                    <div className="bg-primary position-sticky top-0" style={{ minWidth: 400, height: 400 }}></div>
                    <div className="bg-primary position-sticky top-0" style={{ minWidth: 400, height: 400 }}></div>
                    <div className="bg-primary position-sticky top-0" style={{ minWidth: 400, height: 400 }}></div>
                    
            </motion.div>
        </div>
    )
}