import ProductCard from "./ProductCard";

const SectionBody = (props) => {

    const productArray = props.productArray;

    return (
        <div className="flex justify-between">
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