import ProductCard from "./ProductCard";
import SkeletonLoader from "../../../components/SkeletonLoader";

const SectionBody = (props) => {

    const productArray = props.productArray;
    const slicedProductArray = productArray.slice(0, 4);
    const isLoading = props.isLoading;
    const skeletonLoaderArray = ['loader1', 'loader2', 'loader3', 'loader4'];

    return (
        <div className="flex gap-x-[3vw] sssm:w-[350vw] sm:w-[300vw] md:w-[150vw] lg:w-full">
            {
                isLoading ?
                    skeletonLoaderArray.map((loader, index) => {
                        return (
                            (<SkeletonLoader width="w-[24%]" height="sssm:h-[30vh] md:h-[70vh] min-h-[400px]" />)
                        )
                    })
                    :
                    slicedProductArray.map((product, index) => {
                        return (
                            <ProductCard
                                key={index}
                                product={product.name}
                                category={product.category}
                                collection={product.collection}
                                color={product.color}
                                price={product.price}
                                image={product.image_url}
                                img={product.image}
                            />
                        )
                    })
            }
        </div>
    )
};

export default SectionBody;