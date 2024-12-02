import ProductCard from "./ProductCard";

const SectionBody = (props) => {

    const productArray = props.productArray;

    return (
        <div className="flex justify-between sssm:w-[350vw] sm:w-[300vw] md:w-[150vw] lg:w-full">
            {
                productArray.map((product, index) => {
                    return (
                        <ProductCard
                            product={product.product}
                            collection={product.collection}
                            color={product.color}
                            price={product.price}
                            image={product.image}
                        />
                    )
                })
            }
        </div>
    )
};

export default SectionBody;