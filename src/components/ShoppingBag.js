import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateIsCartOpen, updateQuantityOfAProductInCart } from "../redux/features/cart/cart";
import { motion } from "motion/react";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

const ShoppingBag = () => {

    const productsInCart = useSelector((state) => state.cart.productsInCart);
    const subTotal = useSelector((state) => state.cart.subTotal);

    const asideRef = useRef(null);

    const dispatch = useDispatch();
    const isCartOpen = useSelector((state) => state.cart.isCartOpen);

    function toggleIsCartOpen() {
        dispatch(updateIsCartOpen());
    }

    useEffect(() => {
        const aside = asideRef.current;

        const preventParentScroll = (e) => {
            const isScrollable = aside.scrollHeight > aside.clientHeight;
            const isAtTop = aside.scrollTop === 0;
            const isAtBottom = aside.scrollHeight - aside.scrollTop === aside.clientHeight;

            if (!isScrollable ||
                (isAtTop && e.deltaY < 0) ||
                (isAtBottom && e.deltaY > 0)) {
                return;
            }

            e.stopPropagation();
        };

        const handleTouch = (e) => {
            e.stopPropagation();
        };

        aside.addEventListener('wheel', preventParentScroll);
        aside.addEventListener('touchstart', handleTouch);
        aside.addEventListener('touchmove', handleTouch);

        return () => {
            aside.removeEventListener('wheel', preventParentScroll);
            aside.removeEventListener('touchstart', handleTouch);
            aside.removeEventListener('touchmove', handleTouch);
        };
    }, []);


    function decrementNumOfAProductInCart(sku) {
        return () => {
            dispatch(updateQuantityOfAProductInCart({ sku: sku, operation: 'decrement' }));
        }
    }

    function incrementNumOfAProductInCart(sku) {
        return () => {
            dispatch(updateQuantityOfAProductInCart({ sku: sku, operation: 'increment' }));
        }
    }

    function removeAProductFromCart(sku) {
        return () => {
            dispatch(updateQuantityOfAProductInCart({ sku: sku, operation: 'remove' }));
        }
    }


    const shoppingBagVariants = {
        closed: {
            right: '-100vw'
        },
        opened: {
            right: 0
        },
    };
    const shoppingBagBgOverlayVariants = {
        closed: {
            bottom: '-100vh'
        },
        opened: {
            bottom: 0
        },
    };


    return (
        <motion.aside className={` z-[90] fixed`}
            
        >
            <motion.div className="z-[90] fixed md:w-full h-screen bg-bgTransparent hover:cursor-pointer " onClick={toggleIsCartOpen}
                variants={shoppingBagBgOverlayVariants}
                initial={false}
                animate={isCartOpen ? 'opened' : 'closed'}
                transition={{
                    type: 'tween',
                    duration: 0.3
                }}
            >
            </motion.div>
            <motion.div ref={asideRef} className="z-[91] fixed p-4 h-screen sssm:w-full md:w-2/4 overflow-y-scroll overscroll-auto bg-backgroundTwo top-0"
                variants={shoppingBagVariants}
                initial={false}
                animate={isCartOpen ? 'opened' : 'closed'}
                transition={{
                    type: 'tween',
                    duration: 0.3
                }}
            >
                <div className="">
                    <div className="h-[37vh] py-4 flex items-end">
                        <h4 className="text-shoppingBagHeadingFontSize font-shoppingBagHeadingFontWeight">SHOPPING BAG</h4>
                    </div>

                    {/* Products in cart */}
                    <div className="mb-10">
                        <ul className="divide-y divide-divideColor border-y border-divideColor">
                            {
                                productsInCart.map((product, index) => {
                                    return (
                                        <li>
                                            <div className="h-[130px] flex py-4 ">
                                                <div className="h-full w-[70px] mr-6">
                                                    <img src={product.image_url} style={{ objectFit: 'cover' }} alt="product" className="w-full h-full" />
                                                </div>
                                                <div className="flex flex-col justify-between grow pr-24">
                                                    <div>
                                                        <div>
                                                            <div className="flex justify-between w-full bg-transparent ">
                                                                <span className="font-logoFontWeight sssm:text-secondaryFontSizeSssm lg:text-secondaryFontSize sssm:hidden md:inline">PRODUCT</span>
                                                                <span className="font-logoFontWeight sssm:text-primaryFontSizeSssm sm:text-primaryFontSizeSm lg:text-primaryFontSize md:w-[75%] flex items-center">{product.product}</span>
                                                            </div>
                                                            <div className="flex justify-between w-full ">
                                                                <span className="font-logoFontWeight sssm:text-secondaryFontSizeSssm lg:text-secondaryFontSize sssm:hidden md:inline">SKU</span>
                                                                <span className="font-logoFontWeight sssm:text-primaryFontSizeSssm sm:text-primaryFontSizeSm lg:text-primaryFontSize md:w-[75%] ">{product.sku}</span>
                                                            </div>
                                                            <div className="flex justify-between w-full ">
                                                                <span className="font-logoFontWeight sssm:text-secondaryFontSizeSssm lg:text-secondaryFontSize sssm:hidden md:inline">PRICE</span>
                                                                <span className="font-logoFontWeight sssm:text-primaryFontSizeSssm sm:text-primaryFontSizeSm lg:text-primaryFontSize md:w-[75%] ">$ {product.price}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex w-full justify-between font-logoFontWeight sssm:text-primaryFontSizeSssm sm:text-primaryFontSizeSm lg:text-primaryFontSize">
                                                        <div className="flex items-center">
                                                            <button
                                                                onClick={decrementNumOfAProductInCart(product.sku)}
                                                                className="mr-1 "
                                                            >
                                                                <CiCircleMinus />
                                                            </button>
                                                            <span className="mr-1">
                                                                {product.quantity}
                                                            </span>
                                                            <button
                                                                onClick={incrementNumOfAProductInCart(product.sku)}
                                                                className=""
                                                            >
                                                                <CiCirclePlus />
                                                            </button>
                                                        </div>
                                                        <span>$ {product.price * product.quantity}</span>
                                                        <button onClick={removeAProductFromCart(product.sku)}>
                                                            <IoCloseOutline />
                                                        </button >
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className="w-full flex ">
                        <div className="w-2/4 mr-4">
                            <p className="font-logoFontWeight sssm:text-secondaryFontSizeSssm lg:text-secondaryFontSize mb-4">GOT A PROMOCODE?</p>

                            <div className="mb-4">
                                <form className="flex">
                                    <div className="border-y-2 border-l-2 sssm:w-28 md:w-32 p-2">
                                        <input className="bg-transparent focus:outline-none placeholder-black" type="text" placeholder="XXXXXXXX" />
                                    </div>
                                    <motion.button className="sectionHeadAnchor cursor-pointer relative overflow-hidden flex justify-around items-center sssm:w-28 md:w-20 h-12 border-2"
                                        whileHover={{
                                            color: "white",
                                            borderColor: "black",
                                            transition: { ease: "easeInOut" },
                                        }}
                                    >
                                        <span className=" z-10 bg-transparent font-logoFontWeight sssm:text-secondaryFontSizeSssm lg:text-secondaryFontSize">
                                            CHECK
                                        </span>
                                    </motion.button>
                                </form>
                            </div>

                            <p className="font-logoFontWeight sssm:text-primaryFontSizeSssm sm:text-primaryFontSizeSm lg:text-primaryFontSize mb-4">Taxes and shipping will be calculated at checkout. Shipping cost is based on weight and size to give the best price available.</p>

                            <motion.button className="sectionHeadAnchor cursor-pointer relative overflow-hidden flex justify-around items-center sssm:w-full md:w-full h-12 border-2"
                                whileHover={{
                                    color: "white",
                                    borderColor: "black",
                                    transition: { ease: "easeInOut" },
                                }}
                            >
                                <span className=" z-10 bg-transparent font-logoFontWeight sssm:text-secondaryFontSizeSssm lg:text-secondaryFontSize">
                                    CONTINUE SHOPPING
                                </span>
                            </motion.button>
                        </div>

                        <div className="grow">
                            <ul className="divide-y divide-divideColor mb-2">
                                <li className="py-2">
                                    <div className="flex justify-between w-full items-center">
                                        <span className="font-logoFontWeight sssm:text-secondaryFontSizeSssm lg:text-secondaryFontSize sssm:hidden md:inline">SUBTOTAL</span>
                                        <span className="font-logoFontWeight  md:w-[65%] text-totalCostFontSize">$ {subTotal}</span>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex justify-between w-full items-center ">
                                        <span className="font-logoFontWeight sssm:text-secondaryFontSizeSssm lg:text-secondaryFontSize sssm:hidden md:inline">HANDLING</span>
                                        <span className="font-logoFontWeight text-totalCostFontSize md:w-[65%] ">$ 5</span>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex justify-between w-full items-center ">
                                        <span className="font-logoFontWeight sssm:text-secondaryFontSizeSssm lg:text-secondaryFontSize sssm:hidden md:inline">TOTAL</span>
                                        <span className="font-logoFontWeight text-totalCostFontSize md:w-[65%] ">$ {subTotal === 0 ? subTotal : subTotal + 5}</span>
                                    </div>
                                </li>
                            </ul>

                            <button className=" cursor-pointer relative overflow-hidden flex justify-around items-center sssm:w-full md:w-full h-10 bg-btnBg text-textWhite border-2 rounded-md mb-2">
                                <span className=" z-10 bg-transparent font-logoFontWeight sssm:text-secondaryFontSizeSssm lg:text-secondaryFontSize">
                                    PAYPAL CHECKOUT
                                </span>
                            </button>
                            <button className=" cursor-pointer relative overflow-hidden flex justify-around items-center sssm:w-full md:w-full h-10 bg-btnBg text-textWhite border-2 rounded-md">
                                <span className=" z-10 bg-transparent font-logoFontWeight sssm:text-secondaryFontSizeSssm lg:text-secondaryFontSize">
                                    DEBIT OR CREDIT CARD
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.aside>
    )
};

export default ShoppingBag;