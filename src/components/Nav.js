import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { closeNav } from "../redux/features/nav/nav";

const Nav = (props) => {

    const isUsedInNavBar = props.isUsedInNavBar;

    const isNavOpen = useSelector((state) => state.nav.isNavOpen);
    const dispatch = useDispatch();

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
        <div className="flex justify-around items-center w-full h-full">
            <nav>
                <ul className="sssm:flex sssm:flex-col items-center text-navFontSizeOne">
                    <div className="flex sssm:flex-col md:flex-row items-center">
                        <motion.li
                            className="mx-2 cursor-pointer leading-none"
                            variants={isUsedInNavBar ? (isNavOpen ? navTextVariantOne : navTextVariantTwo) : navTextVariantOne}
                            initial="initial"
                            animate="final"
                            transition={{
                                duration: isNavOpen ? 0.3 : 0,
                                ease: "easeOut",
                                delay: isNavOpen ? 0.2 : 0
                            }}
                            onClick={()=>dispatch(closeNav())}
                        >
                            <Link to="/products?page=1">
                                All
                            </Link>
                        </motion.li>

                        <motion.span
                            className="leading-none"
                            variants={isUsedInNavBar ? (isNavOpen ? navTextVariantOne : navTextVariantTwo) : navTextVariantOne}
                            initial="initial"
                            animate="final"
                            transition={{
                                duration: isNavOpen ? 0.3 : 0,
                                ease: "easeOut",
                                delay: isNavOpen ? 0.35 : 0
                            }}
                            onClick={()=>dispatch(closeNav())}
                        >
                            {!isLessThan768 && '/'}
                        </motion.span>

                        <motion.li
                            className="mx-2 cursor-pointer leading-none"
                            variants={isUsedInNavBar ? (isNavOpen ? navTextVariantOne : navTextVariantTwo) : navTextVariantOne}
                            initial="initial"
                            animate="final"
                            transition={{
                                duration: isNavOpen ? 0.3 : 0,
                                ease: "easeOut",
                                delay: isNavOpen ? 0.25 : 0
                            }}
                            onClick={()=>dispatch(closeNav())}
                        >
                            <Link to="/products/category/coasters?page=1">
                                Coasters
                            </Link>
                        </motion.li>
                    </div>
                    <div className="flex sssm:flex-col md:flex-row items-center">
                        <motion.li
                            className="mx-2 cursor-pointer leading-none"
                            variants={isUsedInNavBar ? (isNavOpen ? navTextVariantOne : navTextVariantTwo) : navTextVariantOne}
                            initial="initial"
                            animate="final"
                            transition={{
                                duration: isNavOpen ? 0.3 : 0,
                                ease: "easeOut",
                                delay: isNavOpen ? 0.3 : 0
                            }}
                            onClick={()=>dispatch(closeNav())}
                        >
                            <Link to="/products/category/planters?page=1">
                                Planters
                            </Link>
                        </motion.li>

                        <motion.span
                            className="leading-none"
                            variants={isUsedInNavBar ? (isNavOpen ? navTextVariantOne : navTextVariantTwo) : navTextVariantOne}
                            initial="initial"
                            animate="final"
                            transition={{
                                duration: isNavOpen ? 0.3 : 0,
                                ease: "easeOut",
                                delay: isNavOpen ? 0.35 : 0
                            }}
                            onClick={()=>dispatch(closeNav())}
                        >
                            {!isLessThan768 && '/'}
                        </motion.span>

                        <motion.li
                            className="mx-2 cursor-pointer leading-none"
                            variants={isUsedInNavBar ? (isNavOpen ? navTextVariantOne : navTextVariantTwo) : navTextVariantOne}
                            initial="initial"
                            animate="final"
                            transition={{
                                duration: isNavOpen ? 0.3 : 0,
                                ease: "easeOut",
                                delay: isNavOpen ? 0.35 : 0
                            }}
                            onClick={()=>dispatch(closeNav())}
                        >
                            <Link to="/products/category/candles?page=1">
                                Candles
                            </Link>
                        </motion.li>

                        <motion.span
                            className="leading-none"
                            variants={isUsedInNavBar ? (isNavOpen ? navTextVariantOne : navTextVariantTwo) : navTextVariantOne}
                            initial="initial"
                            animate="final"
                            transition={{
                                duration: isNavOpen ? 0.3 : 0,
                                ease: "easeOut",
                                delay: isNavOpen ? 0.35 : 0
                            }}
                            onClick={()=>dispatch(closeNav())}
                        >
                            {!isLessThan768 && '/'}
                        </motion.span>

                        <motion.li
                            className="mx-2 cursor-pointer leading-none"
                            variants={isUsedInNavBar ? (isNavOpen ? navTextVariantOne : navTextVariantTwo) : navTextVariantOne}
                            initial="initial"
                            animate="final"
                            transition={{
                                duration: isNavOpen ? 0.3 : 0,
                                ease: "easeOut",
                                delay: isNavOpen ? 0.4 : 0
                            }}
                            onClick={()=>dispatch(closeNav())}
                        >
                            <Link to="/products/category/clocks?page=1">
                                Clocks
                            </Link>
                        </motion.li>
                    </div>
                    <motion.li
                        className="mx-2 cursor-pointer leading-navTextLineHeignt"
                        variants={isUsedInNavBar ? (isNavOpen ? navTextVariantOne : navTextVariantTwo) : navTextVariantOne}
                        initial="initial"
                        animate="final"
                        transition={{
                            duration: isNavOpen ? 0.3 : 0,
                            ease: "easeOut",
                            delay: isNavOpen ? 0.45 : 0
                        }}
                        onClick={()=>dispatch(closeNav())}
                    >
                        <Link to="/products/category/jewelry?page=1">
                            Jewelry
                        </Link>
                    </motion.li>
                </ul>
            </nav>
        </div>
    )
};


export default Nav;