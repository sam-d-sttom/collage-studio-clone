import { motion } from "motion/react";
import { Link } from "react-router-dom";

const SectionHead = (props) => {
    const heading = props.heading;
    const quantity = props.quantity;
    const link = props.link;

    return (
        <header className="flex justify-between items-center mb-10">
            <h3 className="sssm:text-productSectionHeadingFontSizeSssm md:text-productSectionHeadingFontSize font-productSectionHeadingFontWeight">{heading}</h3>
            <Link to={link}>
                <motion.div className="sectionHeadAnchor cursor-pointer relative overflow-hidden flex justify-around items-center sssm:w-24 md:w-44 sssm:h-8 md:h-12 border-2"
                    whileHover={{
                        color: "white",
                        borderColor: "black",
                        transition: { ease: "easeInOut" },
                    }}

                    whileTap={{
                        color: "white",
                        borderColor: "black",
                        transition: { ease: "easeInOut" },
                    }}
                >
                    <span className=" z-10 bg-transparent font-productHeadingAnchorFontWeight">
                        ALL ({quantity})
                    </span>
                </motion.div>
            </Link>
        </header>
    )
};


export default SectionHead;