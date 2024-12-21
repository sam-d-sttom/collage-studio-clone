

const ProductCard = (props) => {

    const product = props.product;
    const collection = props.collection;
    const color = props.color;
    const price = props.price;
    const image = props.image;

    return (
        <div className="flex flex-col  w-full">
            <div className="sssm:h-[200px] sm:h-[250px] md:h-[300px]">
                <img src={image} style={{objectFit: "cover"}} alt="" className="w-full h-full"/>
            </div>
            <div>
                <div className="flex justify-between w-full bg-transparent ">
                    <span className="font-logoFontWeight sssm:text-secondaryFontSizeSssm lg:text-secondaryFontSize sssm:hidden md:inline">PRODUCT</span>
                    <span className="font-logoFontWeight sssm:text-primaryFontSizeSssm sm:text-primaryFontSizeSm lg:text-primaryFontSize md:w-[65%] flex items-center">{product}</span>
                </div>
                <div className="flex justify-between w-full ">
                    <span className="font-logoFontWeight sssm:text-secondaryFontSizeSssm lg:text-secondaryFontSize sssm:hidden md:inline">COLLECTION</span>
                    <span className="font-logoFontWeight sssm:text-primaryFontSizeSssm sm:text-primaryFontSizeSm lg:text-primaryFontSize md:w-[65%] ">{collection}</span>
                </div>
                <div className="flex justify-between w-full ">
                    <span className="font-logoFontWeight sssm:text-secondaryFontSizeSssm lg:text-secondaryFontSize sssm:hidden md:inline">COLOR</span>
                    <span className="font-logoFontWeight sssm:text-primaryFontSizeSssm sm:text-primaryFontSizeSm lg:text-primaryFontSize md:w-[65%] ">{color}</span>
                </div>
                <div className="flex justify-between w-full ">
                    <span className="font-logoFontWeight sssm:text-secondaryFontSizeSssm lg:text-secondaryFontSize sssm:hidden md:inline">PRICE</span>
                    <span className="font-logoFontWeight sssm:text-primaryFontSizeSssm sm:text-primaryFontSizeSm lg:text-primaryFontSize md:w-[65%] ">${price}</span>
                </div>
            </div>
        </div>
    )
};

export default ProductCard;