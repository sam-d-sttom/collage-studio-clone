import { GiHamburgerMenu } from "react-icons/gi";
import { GrShop } from "react-icons/gr";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateIsCartOpen } from "../redux/features/cart/cart";
import { updateIsNavOpen, updateIsNavOpenIfCartOpen } from "../redux/features/nav/nav";
import { IoCloseOutline } from "react-icons/io5";

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


    const dispatch = useDispatch()
    //Toggle cart open or not
    const numberOfProductsInCart = useSelector((state) => state.cart.numberOfProductsInCart);
    function toggleIsCartOpen() {
        dispatch(updateIsCartOpen());
        dispatch(updateIsNavOpenIfCartOpen());
    }

    //Toggle nav open or not
    const isNavOpen = useSelector((state) => state.nav.isNavOpen);
    function toggleIsNavOpen() {
        dispatch(updateIsNavOpen());
    }



    useEffect(() => {

        if (viewportWidth < 768) {
            setScaleFrom(2);
        } else {
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


    const navVariants = {
        closed: {
            scale: scale,   
        },
        opened: {
            scale: (scale.current) / 2 < 1 ? 1 : (scale.current) / 2,

        },
    }


    return (
        <header className={`bg-transparent ${isNavOpen ? 'text-navTextColor' : 'inputTextColor'}`}>
            <div ref={headerScrollContainer} className="h-40 w-full bg-backgroundOne"></div>

            <button className="fixed top-8 left-4 z-[60] cursor-pointer" onClick={toggleIsNavOpen}>
                {
                    isNavOpen ? <IoCloseOutline fontSize={30} /> : <GiHamburgerMenu fontSize={30} />
                }
            </button>
            {/* header inner div */}
            <div className="flex justify-around items-center fixed top-0 w-full pt-6 px-4 z-[50] bg-transparent">
                {/* md:leading-logoLineHeight sm:leading-logoLineHeightSm md:text-logoFontSize sm:text-logoFontSizeSm  */}
                <Link to="/">
                    <motion.div className="flex flex-col items-center lg:leading-logoLineHeight md:leading-logoLineHeightMd sm:leading-logoLineHeightSm ssm:leading-logoLineHeightSsm sssm:leading-logoLineHeightSssm lg:text-logoFontSize md:text-logoFontSizeMd sm:text-logoFontSizeSm ssm:text-logoFontSizeSsm sssm:text-logoFontSizeSssm font-logoFontWeight bg-transparent" style={{ scale, translateY }}

                        variants={navVariants}
                        initial={false}
                        animate={isNavOpen ? 'opened' : 'closed'}
                        transition={{
                            duration: .3,
                            type: "spring",
                            bounce: 0,  
                            ease: "ease",
            
                        }}

                    >
                        <span className="bg-transparent">COLLAGE</span>
                        <span className="bg-transparent">STUDIO</span>
                    </motion.div>
                </Link>
            </div>
            <button className=" fixed top-8 right-4 hover:cursor-pointer z-[100]" onClick={toggleIsCartOpen}>
                <span className="text-cartCountFontSize absolute top-2/4 left-2/4 -translate-y-1/4 -translate-x-2/4">
                    {numberOfProductsInCart}
                </span>
                <GrShop fontSize={30} />
            </button>
        </header>
    )
};


export default Header;