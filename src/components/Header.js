import { GiHamburgerMenu } from "react-icons/gi";
import { GrShop } from "react-icons/gr";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";

const Header = () => {

    const headerScrollContainer = useRef(null);

    const { scrollYProgress } = useScroll({
        target: headerScrollContainer,
        offset: ['start start', 'end start']
    });

    // getting the view port width each time the user resizes the window.
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    // const initialScaleFrom = viewportWidth < 768 ? 2 : 4;
    const [scaleFrom, setScaleFrom] = useState(0);
    

    useEffect(() => {

        if(viewportWidth < 768){
            setScaleFrom(2);
        }else{
            setScaleFrom(4);
        }

        const handleResize = () => {
            setViewportWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [viewportWidth]);
    

    const scale = useTransform(scrollYProgress, [0, 1], [scaleFrom, 1]);
    const translateY = useTransform(scrollYProgress, [0, 1], [60, 0])

    return (
        <header className="bg-transparent">
            <div ref={headerScrollContainer} className="h-40 w-full bg-backgroundOne"></div>

            {/* header inner div */}
            <div className="flex justify-between items-center fixed top-0 w-full pt-6 px-4 z-50 bg-transparent">
                <GiHamburgerMenu fontSize={30}/>
                {/* md:leading-logoLineHeight sm:leading-logoLineHeightSm md:text-logoFontSize sm:text-logoFontSizeSm  */}
                <motion.div className="flex flex-col items-center lg:leading-logoLineHeight md:leading-logoLineHeightMd sm:leading-logoLineHeightSm ssm:leading-logoLineHeightSsm sssm:leading-logoLineHeightSssm lg:text-logoFontSize md:text-logoFontSizeMd sm:text-logoFontSizeSm ssm:text-logoFontSizeSsm sssm:text-logoFontSizeSssm font-logoFontWeight bg-transparent" style={{scale, translateY}}>
                    <span className="bg-transparent">COLLAGE</span>
                    <span className="bg-transparent">STUDIO</span>
                </motion.div>
                <GrShop fontSize={30}/>
            </div>
        </header>
    )
};


export default Header;