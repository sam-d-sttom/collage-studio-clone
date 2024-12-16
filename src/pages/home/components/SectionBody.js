import ProductCard from "./ProductCard";

const SectionBody = (props) => {

    const productArray = props.productArray;
    const slicedProductArray = productArray.slice(0, 4);

    return (
        <div className="flex gap-x-[3vw] sssm:w-[350vw] sm:w-[300vw] md:w-[150vw] lg:w-full">
            {
                slicedProductArray.map((product, index) => {
                    return (
                        <ProductCard
                            product={product.name}
                            collection={product.collection}
                            color={product.color}
                            price={product.price}
                            image={product.image_url}
                        />
                    )
                })
            }
        </div>
    )
};

export default SectionBody;