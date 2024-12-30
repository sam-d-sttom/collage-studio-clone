import { transform } from "motion";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Nav from "./Nav";

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
            <Nav />

            

        </motion.div>
    )
}

export default NavBar;