import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useEffect, useState } from "react";
import scrollableSectionCardData from "../../../data/scrollableSectionCardData";

const HomeProductsSlider = () => {

    const homeProductsSliderContainer = useRef(null);

    const { scrollYProgress } = useScroll({
        target: homeProductsSliderContainer,
        offset: ['start start', 'end end']
    });

    // getting the view port width each time the user resizes the window.
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setViewportWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [viewportWidth]);


    // calculation to get the output range of the scrollable sectioin
    const numberOfCards = scrollableSectionCardData.length;
    const numberOfGapsBetweenCards = numberOfCards - 1;
    const horizontalPaddingPositions = 2;   //padding left and padding right

    const scrollableSectionRange = -(((viewportWidth * 0.83) * numberOfCards) + ((viewportWidth * 0.05) * numberOfGapsBetweenCards) + ((viewportWidth * 0.05) * horizontalPaddingPositions)) + viewportWidth;

    const x = useTransform(scrollYProgress, [0, 1], [0, scrollableSectionRange]);

    return (
        <div>
            <div ref={homeProductsSliderContainer} className="h-[300vh]">
                <div className="flex flex-col sticky h-screen top-0 ">
                    <div className="h-[56px]"></div>

                    {/* scrollable section */}
                    <section className="flex justify-between grow px-[6vw] py-16 overflow-x-hidden">
                        <motion.div style={{ x }} className="flex gap-[5vw]">
                            {
                                scrollableSectionCardData.map((card, index) => {

                                    return (
                                        <div key={index} className=" h-full w-[83vw] flex">
                                            <div className="w-[65%] h-full">
                                                <img src={card.image} style={{objectFit: "cover"}} className="w-full h-full"/>
                                            </div>
                                            <div className="h-full flex flex-col justify-between grow p-4">
                                                <div className="w-full leading-secondaryLineHeight">
                                                    <div className="flex justify-between w-full ">
                                                        <span className="font-logoFontWeight text-secondaryFontSize">CATEGORY</span>
                                                        <span className="font-logoFontWeight text-primaryFontSize w-[65%] ">{card.category}</span>
                                                    </div>
                                                    <div className="flex justify-between leading-logoFontWeight w-full">
                                                        <span className="font-logoFontWeight text-secondaryFontSize">COLLECTION</span>
                                                        <span className="font-logoFontWeight text-primaryFontSize w-[65%]">{card.collection}</span>
                                                    </div>
                                                    <div className="flex justify-between w-full">
                                                        <span className="font-logoFontWeight text-secondaryFontSize">COLOR</span>
                                                        <span className="font-logoFontWeight text-primaryFontSize w-[65%]">{card.color}</span>
                                                    </div>
                                                </div>
                                                <div className="w-56">
                                                    <span className="text-scrollableSectionProductCardNameFontSize">{card.name}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </motion.div>
                    </section>

                </div>
            </div>
        </div>
    )
};


export default HomeProductsSlider;