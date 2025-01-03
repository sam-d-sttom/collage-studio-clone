import image from "../../assets/images/pot-inspira-grand-rose.jpg";
import { motion } from "motion/react";
import SectionBody from "../home/components/SectionBody";
import products from "../../data/plantersProductCardData.js"
import { useParams } from "react-router-dom";
import useScrollToTop from "../../helper/useScrollToTop.js";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProductsInCart, updateQuantityOfAProductInCart } from "../../redux/features/cart/cart.js";
import SkeletonLoader from "../../components/SkeletonLoader.js";

const SingleProductPage = (props) => {

    const [isLoading, setIsLoading] = useState(true);

    //Ensures page is scrolled to the top on initial load
    useScrollToTop();

    const dispatch = useDispatch();

    const REACT_APP_API_BASE_URL = props.REACT_APP_API_BASE_URL;


    //Check if category, collection and product is passed in the url and then used to build a dynamic url
    const { category, collection, product } = useParams();

    const appendUrl = `/singleProduct?category=${category}&collection=${collection}&product=${product}`;

    const [productDetails, setProductDetails] = useState({});
    const [youCouldAlsoLike, setYouCouldAlsoLike] = useState([]);

    const productsIncart = useSelector((state) => state.cart.productsInCart);

    function addToCart() {
        const productId = productDetails.id;
        const productCollection = productDetails.collection.split(' ').join('-');
        const productColor = productDetails.color.split(' ').join('-');
        const sku = `${productId}-${productCollection}-${productColor}`;


        const productDataInCart = {
            'product': productDetails.name,
            'sku': sku,
            'price': productDetails.price,
            'image_url': productDetails.image_url,
            'quantity': 1,
            'cost': productDetails.price * 1
        }

        const matchedProduct = productsIncart.find(product => product.sku === sku);

        if (matchedProduct === undefined) {
            dispatch(updateProductsInCart(productDataInCart));

        } else {

            dispatch(updateQuantityOfAProductInCart({ 'sku': sku, 'operation': 'increment' }))
        }



    }


    useEffect(() => {

        // Scroll to top of the page 
        window.scrollTo(0, 0);

        axios.get(`${REACT_APP_API_BASE_URL}${appendUrl}`).then(response => {
            const productDetailsObj = response.data.data;
            const youCouldAlsoLikeArray = response.data.youCouldAlsoLike;


            setProductDetails(productDetailsObj);
            setYouCouldAlsoLike(youCouldAlsoLikeArray);

            setIsLoading(false);
        }).catch(error => {

        })
    }, [category, collection, product])

    return (
        <section className="sssm:px-[4vw] md:px-[6vw] py-6 mb-16 pt-20 font-singleProductFontWeight">

            <div className="flex sssm:flex-col lg:flex-row lg:justify-between lg:h-[90vh] mb-20">

                <div className="lg:w-2/5 sssm:mb-10 lg:h-full lg:flex lg:flex-col lg:justify-between">

                    {
                        isLoading ?
                            <div className="w-[60%] leading-secondaryLineHeight mb-4">
                                <div className="flex justify-between w-full mb-1">
                                    <SkeletonLoader width="w-[35%]" height="h-2" borderRadius="rounded-none" />
                                    <SkeletonLoader width="w-[45%]" height="h-2" borderRadius="rounded-none" />
                                </div>
                                <div className="flex justify-between w-full mb-1">
                                    <SkeletonLoader width="w-[35%]" height="h-2" borderRadius="rounded-none" />
                                    <SkeletonLoader width="w-[45%]" height="h-2" borderRadius="rounded-none" />
                                </div>
                                <div className="flex justify-between w-full mb-1">
                                    <SkeletonLoader width="w-[35%]" height="h-2" borderRadius="rounded-none" />
                                    <SkeletonLoader width="w-[45%]" height="h-2" borderRadius="rounded-none" />
                                </div>
                            </div>
                            :

                            <div className="w-full leading-secondaryLineHeight mb-4">
                                <div className="flex justify-between w-full ">
                                    <span className="font-logoFontWeight sssm:text-secondaryFontSizeSssm lg:text-secondaryFontSize">CATEGORY</span>
                                    <span className="font-logoFontWeight sssm:text-primaryFontSizeSssm lg:text-primaryFontSize w-[65%] ">{productDetails.category}</span>
                                </div>
                                <div className="flex justify-between leading-logoFontWeight w-full">
                                    <span className="font-logoFontWeight sssm:text-secondaryFontSizeSssm lg:text-secondaryFontSize">COLLECTION</span>
                                    <span className="font-logoFontWeight sssm:text-primaryFontSizeSssm lg:text-primaryFontSize w-[65%]">{productDetails.collection}</span>
                                </div>
                                <div className="flex justify-between w-full">
                                    <span className="font-logoFontWeight sssm:text-secondaryFontSizeSssm lg:text-secondaryFontSize">COLOR</span>
                                    <span className="font-logoFontWeight sssm:text-primaryFontSizeSssm lg:text-primaryFontSize w-[65%]">{productDetails.color}</span>
                                </div>
                            </div>
                    }


                    <div className="h-[65vh] lg:hidden">
                        {
                            isLoading ?
                                <SkeletonLoader width="w-full" height="h-full" borderRadius="rounded-none" />
                                :
                                <img src={productDetails.image_url} style={{ objectFit: "cover" }} alt="" className="w-full h-full" />
                        }
                    </div>

                    <div className="flex sssm:flex-col md:flex-row md:justify-between md:items-end lg:flex-col lg:items-start lg:pr-20 lg:h-3/4">

                        {
                            isLoading ?



                                <div className="sssm:text-productFontSize sssm:mt-6 lg:mt-0 sssm:mb-20 md:mb-0 w-[200px]">
                                    <p><SkeletonLoader height="h-10" borderRadius="rounded-none" /></p>

                                    <span className="flex justify-between items-center">$ <SkeletonLoader width="w-[75%]" height="h-10" borderRadius="rounded-none" /></span>

                                </div>
                                :
                                <div className="sssm:text-productFontSize sssm:mt-6 lg:mt-0 sssm:mb-20 md:mb-0">
                                    <p>{productDetails.name}</p>
                                    <span>$ {productDetails.price}</span>
                                </div>
                        }


                        <div className="sssm:w-full md:w-2/4 lg:w-full">
                            <motion.button className="sectionHeadAnchor border-2 px-3 py-1 mr-2 relative overflow-hidden flex justify-around items-cente w-full"
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

                                onClick={addToCart}
                            >
                                <span className=" z-10 bg-transparent font-productHeadingAnchorFontWeight">
                                    ADD TO BAG
                                </span>
                            </motion.button>
                        </div>
                    </div>
                </div>

                {
                    isLoading ?

                        <div className="lg:w-3/5 lg:h-full overflow-scroll">

                            <div className="mb-10 flex sssm:flex-col md:flex-row md:justify-between md:flex-row-reverse w-full">

                                {/* Product properties */}
                                <div className="sssm:mb-10 md:mb-0 md:w-[30%]">
                                    <ul className=" text-productPropertiesFontSize h-28  flex flex-col justify-between">
                                        <SkeletonLoader width="w-[75%]" height="h-4" borderRadius="rounded-none" />
                                        <SkeletonLoader width="w-[75%]" height="h-4" borderRadius="rounded-none" />
                                        <SkeletonLoader width="w-[75%]" height="h-4" borderRadius="rounded-none" />
                                        <SkeletonLoader width="w-[75%]" height="h-4" borderRadius="rounded-none" />
                                        <li></li>
                                    </ul>
                                </div>

                                {/* Product description */}
                                <div className=" md:w-4/6">
                                    <p className="break-words text-productDescriptionFontSize columns-2">
                                        <SkeletonLoader borderRadius="rounded-none" />
                                        <SkeletonLoader borderRadius="rounded-none" />
                                    </p>
                                </div>
                            </div>


                            <div className="h-[50vh] lg:h-3/4 mb-20">
                                <SkeletonLoader height="h-full" borderRadius="rounded-none" />
                            </div>
                        </div>
                        :
                        <div className="lg:w-3/5 lg:h-full overflow-scroll">

                            <div className="mb-10 flex sssm:flex-col md:flex-row md:justify-between md:flex-row-reverse w-full">

                                {/* Product properties */}
                                <div className="sssm:mb-10 md:mb-0 md:w-[30%]">
                                    <ul className="divide-y text-productPropertiesFontSize">
                                        <li className="sssm:p-2 md:pt-0">vsjdvlsdnvksvnsknvskdnv</li>
                                        <li className="p-2">vsjdvlsdnvksvnsknvskdnv</li>
                                        <li className="p-2">vsjdvlsdnvksvnsknvskdnv</li>
                                        <li className="p-2">vsjdvlsdnvksvnsknvskdnv</li>
                                        <li></li>
                                    </ul>
                                </div>

                                {/* Product description */}
                                <div className=" md:w-4/6">
                                    <p className="break-words text-productDescriptionFontSize columns-2">
                                        {productDetails.description}
                                    </p>
                                </div>
                            </div>


                            <div className="h-[50vh] lg:h-3/4 mb-20">
                                <img src={productDetails.image_url} style={{ objectFit: "cover" }} alt="" className="w-full h-full" />
                            </div>
                        </div>

                }


            </div>

            <div className="mb-10">
                <h3 className="sssm:text-productSectionHeadingFontSizeSssm md:text-productSectionHeadingFontSize font-productSectionHeadingFontWeight leading-heading3">YOU COULD<br />ALSO LIKE</h3>
            </div>
            <div className="overflow-x-scroll overflow-y-hidden">
                <SectionBody productArray={youCouldAlsoLike} isLoading={isLoading} />
            </div>
        </section>
    );
};


export default SingleProductPage;