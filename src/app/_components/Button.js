"use client";
import { useTime, useTransform, motion } from "framer-motion";

const Button = ({ children}) => {
  const time = useTime();
  const rotate = useTransform(time, [0, 2000], [0, 360], {
    clamp: false,
  });
  const rotatingBg = useTransform(rotate, (r) => `conic-gradient(from ${r}deg, #A259FF,#FFFFFF,#facc15,#A259FF)`);

  return (
    <div className="relative inline-block group ">
      <button className="relative px-7 py-1.5 rounded-full cursor-pointer text-sm sm:text-base bg-primary z-10">
        {children}
      </button>

      <motion.div
        className="absolute -inset-[2px] rounded-full"
        style={{
          background: rotatingBg,
        }}
      />
    </div>
  );
};

export default Button;
