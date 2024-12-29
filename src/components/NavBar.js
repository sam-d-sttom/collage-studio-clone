import { transform } from "motion";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const NavBar = () => {

    const isNavOpen = useSelector((state) => state.nav.isNavOpen);

    // getting the view port width each time the user resizes the window.
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    const [isLessThan768, setIsLessThan768] = useState(false);
    
    useEffect(() => {

        if (viewportWidth < 768) {
            setIsLessThan768(true);
        } else {
            setIsLessThan768(false);
        }

        const handleResize = () => {
            setViewportWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [viewportWidth]);

    const navBarVariants = {
        closed: {
            top: '-100vh'
        },
        opened: {
            top: 0
        },
    };


    // Prevents scrolling of page when nav bar is opened.
    useEffect(() => {
        if (!isNavOpen) return;

        const preventScroll = (e) => {
            e.preventDefault();
            e.stopPropagation();
        };

        document.addEventListener('wheel', preventScroll, { passive: false });
        document.addEventListener('touchmove', preventScroll, { passive: false });

        return () => {
            document.removeEventListener('wheel', preventScroll);
            document.removeEventListener('touchmove', preventScroll);
        };
    },);

    const navTextVariantOne = {
        initial: {
            clipPath: 'inset(100% 0 0 0)',
            y: "-100%"
        },
        final: {
            clipPath: 'inset(0 0 0 0)',
            y: "0"
        }
    };

    const navTextVariantTwo = {
        initial: {
            clipPath: 'inset(0 0 0 0)',
            y: "0"
        },
        final: {
            clipPath: 'inset(100% 0 0 0)',
            y: "-100%"
        }
    };

    return (
        <motion.div className="text-navTextColor fixed top-[-100vh] w-full h-full bg-navBg z-[40]"
            variants={navBarVariants}
            initial={false}
            animate={isNavOpen ? 'opened' : 'closed'}
            transition={{
                type: 'tween',
                duration: 0.3
            }}

        >
            <div className="flex justify-around items-center w-full h-full">
                <nav>
                    <ul className="sssm:flex sssm:flex-col items-center text-navFontSizeOne">
                        <div className="flex sssm:flex-col md:flex-row items-center">
                            <motion.li
                                className="mx-2 leading-none"
                                variants={isNavOpen ? navTextVariantOne : navTextVariantTwo}
                                initial="initial"
                                animate="final"
                                transition={{
                                    duration: isNavOpen ? 0.3 : 0,
                                    ease: "easeOut",
                                    delay: isNavOpen ? 0.2 : 0
                                }}
                            >
                                All
                            </motion.li>

                            <motion.span
                                className="leading-none"
                                variants={isNavOpen ? navTextVariantOne : navTextVariantTwo}
                                initial="initial"
                                animate="final"
                                transition={{
                                    duration: isNavOpen ? 0.3 : 0,
                                    ease: "easeOut",
                                    delay: isNavOpen ? 0.35 : 0
                                }}
                            >
                                {!isLessThan768 && '/'}
                            </motion.span>

                            <motion.li
                                className="mx-2 leading-none"
                                variants={isNavOpen ? navTextVariantOne : navTextVariantTwo}
                                initial="initial"
                                animate="final"
                                transition={{
                                    duration: isNavOpen ? 0.3 : 0,
                                    ease: "easeOut",
                                    delay: isNavOpen ? 0.25 : 0
                                }}
                            >
                                Coasters
                            </motion.li>
                        </div>
                        <div className="flex sssm:flex-col md:flex-row items-center">
                            <motion.li
                                className="mx-2 leading-none"
                                variants={isNavOpen ? navTextVariantOne : navTextVariantTwo}
                                initial="initial"
                                animate="final"
                                transition={{
                                    duration: isNavOpen ? 0.3 : 0,
                                    ease: "easeOut",
                                    delay: isNavOpen ? 0.3 : 0
                                }}
                            >
                                Planters
                            </motion.li>

                            <motion.span
                                className="leading-none"
                                variants={isNavOpen ? navTextVariantOne : navTextVariantTwo}
                                initial="initial"
                                animate="final"
                                transition={{
                                    duration: isNavOpen ? 0.3 : 0,
                                    ease: "easeOut",
                                    delay: isNavOpen ? 0.35 : 0
                                }}
                            >
                                {!isLessThan768 && '/'}
                            </motion.span>

                            <motion.li
                                className="mx-2 leading-none"
                                variants={isNavOpen ? navTextVariantOne : navTextVariantTwo}
                                initial="initial"
                                animate="final"
                                transition={{
                                    duration: isNavOpen ? 0.3 : 0,
                                    ease: "easeOut",
                                    delay: isNavOpen ? 0.35 : 0
                                }}
                            >
                                Candles
                            </motion.li>

                            <motion.span
                                className="leading-none"
                                variants={isNavOpen ? navTextVariantOne : navTextVariantTwo}
                                initial="initial"
                                animate="final"
                                transition={{
                                    duration: isNavOpen ? 0.3 : 0,
                                    ease: "easeOut",
                                    delay: isNavOpen ? 0.35 : 0
                                }}
                            >
                                {!isLessThan768 && '/'}
                            </motion.span>

                            <motion.li
                                className="mx-2 leading-none"
                                variants={isNavOpen ? navTextVariantOne : navTextVariantTwo}
                                initial="initial"
                                animate="final"
                                transition={{
                                    duration: isNavOpen ? 0.3 : 0,
                                    ease: "easeOut",
                                    delay: isNavOpen ? 0.4 : 0
                                }}
                            >
                                Clocks
                            </motion.li>
                        </div>
                        <motion.li
                            className="mx-2 leading-navTextLineHeignt"
                            variants={isNavOpen ? navTextVariantOne : navTextVariantTwo}
                            initial="initial"
                            animate="final"
                            transition={{
                                duration: isNavOpen ? 0.3 : 0,
                                ease: "easeOut",
                                delay: isNavOpen ? 0.45 : 0
                            }}
                        >
                            Jewelry
                        </motion.li>
                    </ul>
                </nav>
            </div>

        </motion.div>
    )
}

export default NavBar;