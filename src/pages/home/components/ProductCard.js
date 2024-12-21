import { Link } from "react-router-dom";


const ProductCard = (props) => {
    const product = props.product;
    const category = props.category;
    const collection = props.collection;
    const color = props.color;
    const price = props.price;
    const image = props.image;

    return (
        <div className="flex flex-col sssm:h-[30vh] md:h-[70vh] min-h-[400px] w-[24%]">
            <Link to={`/products/${category.toLowerCase()}/${collection.toLowerCase()}/${product.toLowerCase()}`}>
                <div className="h-[300px] ">
                    <img src={image} style={{ objectFit: "cover" }} alt="" className="w-full h-full" />
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
            </Link>
        </div>
    )
};

export default ProductCard;