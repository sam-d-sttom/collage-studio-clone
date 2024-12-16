

const ProductCard = (props) => {

    const product = props.product;
    const collection = props.collection;
    const color = props.color;
    const price = props.price;
    const image = props.image;

    return (
        <div className="flex flex-col sssm:h-[30vh] md:h-[70vh] min-h-[400px] w-full">
            <div className="h-[80%] ">
                <img src={image} style={{objectFit: "cover"}} alt="" className="w-full h-full"/>
            </div>
            <div>
                <div className="flex justify-between w-full bg-transparent ">
                    <span className="font-logoFontWeight sssm:text-secondaryFontSizeSssm lg:text-secondaryFontSize">PRODUCT</span>
                    <span className="font-logoFontWeight sssm:text-primaryFontSizeSssm lg:text-primaryFontSize w-[65%] flex items-center">{product}</span>
                </div>
                <div className="flex justify-between w-full ">
                    <span className="font-logoFontWeight sssm:text-secondaryFontSizeSssm lg:text-secondaryFontSize">COLLECTION</span>
                    <span className="font-logoFontWeight sssm:text-primaryFontSizeSssm lg:text-primaryFontSize w-[65%] ">{collection}</span>
                </div>
                <div className="flex justify-between w-full ">
                    <span className="font-logoFontWeight sssm:text-secondaryFontSizeSssm lg:text-secondaryFontSize">COLOR</span>
                    <span className="font-logoFontWeight sssm:text-primaryFontSizeSssm lg:text-primaryFontSize w-[65%] ">{color}</span>
                </div>
                <div className="flex justify-between w-full ">
                    <span className="font-logoFontWeight sssm:text-secondaryFontSizeSssm lg:text-secondaryFontSize">PRICE</span>
                    <span className="font-logoFontWeight sssm:text-primaryFontSizeSssm lg:text-primaryFontSize w-[65%] ">${price}</span>
                </div>
            </div>
        </div>
    )
};

export default ProductCard;