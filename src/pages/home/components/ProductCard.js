

const ProductCard = (props) => {

    const product = props.product;
    const collection = props.collection;
    const color = props.color;
    const price = props.price;
    const image = props.image;

    return (
        <div className="flex flex-col h-[70vh] w-[24%]">
            <div className="h-[80%] ">
                <img src={image} style={{objectFit: "cover"}} alt="" className="w-full h-full"/>
            </div>
            <div>
                <div className="flex justify-between w-full bg-transparent ">
                    <span className="font-logoFontWeight text-secondaryFontSize">PRODUCT</span>
                    <span className="font-logoFontWeight text-primaryFontSize w-[65%] ">{product}</span>
                </div>
                <div className="flex justify-between w-full ">
                    <span className="font-logoFontWeight text-secondaryFontSize">COLLECTION</span>
                    <span className="font-logoFontWeight text-primaryFontSize w-[65%] ">{collection}</span>
                </div>
                <div className="flex justify-between w-full ">
                    <span className="font-logoFontWeight text-secondaryFontSize">COLOR</span>
                    <span className="font-logoFontWeight text-primaryFontSize w-[65%] ">{color}</span>
                </div>
                <div className="flex justify-between w-full ">
                    <span className="font-logoFontWeight text-secondaryFontSize">PRICE</span>
                    <span className="font-logoFontWeight text-primaryFontSize w-[65%] ">${price}</span>
                </div>
            </div>
        </div>
    )
};

export default ProductCard;