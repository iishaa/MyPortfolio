import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={` absolute insert-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row 
      items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-3 h-3 rounded-full bg-[#915eff]"/>
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span
          className="text-[#915eff]">Isha</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I specialize in crafting end-to-end <br className="sm:block hidden"/>web solutions 
          that seamlessly integrate front-end and back-end functionalities.
          </p>
        </div>
      </div>
      <ComputersCanvas/>
      <div className="relative xs:bottom-8 bottom-1 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[28px] h-[46px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y:[0, 22, 0]
              }}
              transition={{
                duration: 1.5, 
                repeat: Infinity,
                repeatType:'loop'
              }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero