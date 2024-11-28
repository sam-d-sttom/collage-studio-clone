import { GiHamburgerMenu } from "react-icons/gi";
import { GrShop } from "react-icons/gr";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const Header = () => {

    const headerScrollContainer = useRef(null);

    const { scrollYProgress } = useScroll({
        target: headerScrollContainer,
        offset: ['start start', 'end start']
    });

    const scale = useTransform(scrollYProgress, [0, 1], [4, 1]);
    const translateY = useTransform(scrollYProgress, [0, 1], [60, 0])

    return (
        <header className="bg-transparent">
            <div ref={headerScrollContainer} className="h-40 w-full bg-backgroundOne"></div>

            {/* header inner div */}
            <div className="flex justify-between items-center fixed top-0 w-full pt-6 px-4 z-50 bg-transparent">
                <GiHamburgerMenu fontSize={30}/>
                <motion.div className="flex flex-col items-center leading-logoLineHeight font-logoFontWeight text-logoFontSize bg-transparent" style={{scale, translateY}}>
                    <span className="bg-transparent">COLLAGE</span>
                    <span className="bg-transparent">STUDIO</span>
                </motion.div>
                <GrShop fontSize={30}/>
            </div>
        </header>
    )
};


export default Header;