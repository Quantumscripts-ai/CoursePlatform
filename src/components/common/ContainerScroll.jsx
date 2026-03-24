import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const ContainerScroll = ({
    titleComponent,
    children
}) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
    });
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => {
            window.removeEventListener("resize", checkMobile);
        };
    }, []);

    const scaleDimensions = () => {
        return isMobile ? [0.8, 0.95] : [1.02, 1];
    };

    const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
    const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <div
            className="min-h-[40rem] md:min-h-[80rem] flex items-center justify-center relative w-full pt-8 pb-40 md:pt-12 md:pb-60"
            ref={containerRef}>
            <div
                className="w-full relative"
                style={{
                    perspective: "1000px",
                }}>
                <HeaderHeader translate={translate} titleComponent={titleComponent} />
                <CardCard rotate={rotate} translate={translate} scale={scale}>
                    {children}
                </CardCard>
            </div>
        </div>
    );
};

export const HeaderHeader = ({
    translate,
    titleComponent
}) => {
    return (
        <motion.div
            style={{
                translateY: translate,
            }}
            className="div max-w-7xl mx-auto text-center px-4">
            {titleComponent}
        </motion.div>
    );
};

export const CardCard = ({
    rotate,
    scale,
    children
}) => {
    return (
        <motion.div
            style={{
                rotateX: rotate,
                scale,
                boxShadow:
                    "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
            }}
            className="max-w-[1024px] mx-auto h-[22rem] sm:h-[30rem] md:h-[40rem] w-full border-4 border-white/10 bg-[#222222] rounded-[24px] md:rounded-[30px] shadow-2xl overflow-hidden px-2 md:px-0">
            <div
                className=" h-full w-full overflow-hidden rounded-2xl bg-dark">
                {children}
            </div>
        </motion.div>
    );
};

export default ContainerScroll;
