import ProductCard from "./components/ProductCard";
import image from "../../assets/images/COLLAGE-Horloge-Clock-Brut-Noir-Black-1920x1280.jpg";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import useScrollToTop from "../../helper/useScrollToTop";
import { motion } from "motion/react";

const Products = (props) => {

    //Ensures page is scrolled to the top on initial load
    useScrollToTop();

    const REACT_APP_API_BASE_URL = props.REACT_APP_API_BASE_URL;
    const [products, setProducts] = useState([]);

    //Check if atrribute and type is passed in the url and then used to build a dynamic url
    const { attribute, type } = useParams();
    let heading = type;
    let appendUrl;

    // const urlParams = new URLSearchParams(window.location.search);
    // const page = urlParams.get('page');

    //Get the current page of paginated products
    const [searchParams, setSearchParams] = useSearchParams({ 'page': 1 });
    const [paginationDetails, setPaginationDetails] = useState({ "last_page": 1, "total": 0 })
    let page = searchParams.get('page');

    if (isNaN(page) || page < 1) {
        page = 1;
    }

    if (!attribute || !type) {
        appendUrl = "/products?";
        heading = "ALL";
    } else {
        appendUrl = `/products?${attribute}=${type}`;
    }

    //api call to get all products or products based on category or collection
    useEffect(() => {
        try {
            axios.get(`${REACT_APP_API_BASE_URL}${appendUrl}&page=${page}`).then(response => {

                setProducts(response.data.data.data);
                setPaginationDetails({ ...paginationDetails, "last_page": response.data.data.last_page, "total": response.data.data.total });

            })
        }catch (error){
            
        }

        // .catch((error) => {

        // })
    }, [page])


    // functions to change page num.
    function incrementPageNum() {

        if (page == paginationDetails.last_page) {
            //do nothing
        } else {
            setSearchParams({ 'page': parseInt(page) + 1 })
            window.scrollTo(0, 0);
        }
    }

    function decrementPageNum() {
        if (page == 1) {
            //do nothing lol
        } else {
            setSearchParams({ 'page': parseInt(page) - 1 })
            window.scrollTo(0, 0);
        }

        //PS: i know we both know i could write it like this, if(page != 1) but WTH LOL. the speed difference isnt much lets make js do some little work here.
    }


    return (
        <section className="sssm:px-[4vw] md:px-[6vw] py-6 mb-16 pt-10">

            <header className="flex justify-between items-center mb-10 sssm:text-productSectionHeadingFontSizeSssm md:text-productSectionHeadingFontSize font-productSectionHeadingFontWeight">
                <h3>{heading.toUpperCase()}</h3>
                <span>{paginationDetails.total}</span>
            </header>

            {/* Pagination controls */}
            <div className="flex justify-end mb-10">
                <div>
                    <p>Showing page {page} of {paginationDetails.last_page} pages</p>
                    <div className="flex w-full justify-end">
                        <motion.button onClick={decrementPageNum} className="sectionHeadAnchor border-2 px-3 py-1 mr-2 relative overflow-hidden flex justify-around items-center"
                            initial={{
                                color: "black",
                                borderColor: "",
                            }}

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
                                Prev
                            </span>
                        </motion.button>

                        <motion.button onClick={incrementPageNum} className="sectionHeadAnchor border-2 px-3 py-1 mr-2 relative overflow-hidden flex justify-around items-center"
                            initial={{
                                color: "black",
                                borderColor: "",
                            }}

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
                                Next
                            </span>
                        </motion.button>

                    </div>
                </div>
            </div>

            <div className="grid sssm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10">


                {
                    products.map((product, key) => {
                        return (<ProductCard key={key}
                            product={product.name}
                            collection={product.collection}
                            color={product.color}
                            price={product.price}
                            image={product.image_url}
                        />)
                    })
                }

            </div>

            {/* Pagination controls */}
            <div className="flex justify-end mb-10 mt-10">
                <div>
                    <p>Showing page {page} of {paginationDetails.last_page} pages</p>
                    <div className="flex w-full justify-end">
                        <motion.button onClick={decrementPageNum} className="sectionHeadAnchor border-2 px-3 py-1 mr-2 relative overflow-hidden flex justify-around items-center"
                            initial={{
                                color: "black",
                                borderColor: "",
                            }}

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
                                Prev
                            </span>
                        </motion.button>

                        <motion.button onClick={incrementPageNum} className="sectionHeadAnchor border-2 px-3 py-1 mr-2 relative overflow-hidden flex justify-around items-center"
                            initial={{
                                color: "black",
                                borderColor: "",
                            }}

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
                                Next
                            </span>
                        </motion.button>

                    </div>
                </div>
            </div>
        </section>
    )
};


export default Products;