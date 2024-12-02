import { motion } from "motion/react";

const SectionHead = (props) => {
    const heading = props.heading;
    const quantity = props.quantity;
    
    return (
        <header className="flex justify-between items-center mb-10">
            <h3 className="sssm:text-productSectionHeadingFontSizeSssm md:text-productSectionHeadingFontSize font-productSectionHeadingFontWeight">{heading}</h3>
            <motion.a className="sectionHeadAnchor cursor-pointer relative overflow-hidden flex justify-around items-center sssm:w-24 md:w-44 sssm:h-8 md:h-12 border-2"
                whileHover={{
                    color: "white",
                    borderColor: "black",
                    transition: {ease: "easeInOut"},
                }}

                whileTap={{
                    color: "white",
                    borderColor: "black",
                    transition: {ease: "easeInOut"},
                }}
            >
                <span className=" z-10 bg-transparent font-productHeadingAnchorFontWeight">
                    ALL ({quantity})  
                </span>
            </motion.a>
        </header>
    )
};


export default SectionHead;