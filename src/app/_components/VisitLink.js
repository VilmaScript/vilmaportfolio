"use client";
import { useTime, useTransform, motion, } from "framer-motion";


const VisitLink = () => {
    const time = useTime()
    const rotate = useTransform(time, [0, 2000], [0, 360], {
        clamp: false,
    });
    const rotatingBg = useTransform(rotate, (r) => `conic-gradient(from ${r}deg, #A259FF,#FFFFFF,#facc15,#A259FF)`);

    return (
        <div className="relative inline-block group  ">
            <a href="https://glitzinteriors.vercel.app/" target="_blank" rel="noopener noreferrer"  className="relative px-7 py-1.5 rounded-full cursor-pointer text-sm sm:text-base bg-primary z-10">Visit Project</a>

            <motion.div className="absolute -inset-[6px] rounded-full "
                style={{
                    background: rotatingBg
 

                }}
            />
        </div>

    );
};

export default VisitLink;