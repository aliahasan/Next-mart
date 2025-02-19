import ProductBanner from "@/components/modules/products/banner";
import ProductDetails from "@/components/modules/products/productDetails";
import NMContainer from "@/components/ui/core/NMContainer";
import { getSingleProduct } from "@/services/product";

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  const { data } = await getSingleProduct(productId);
  return (
    <div>
      <NMContainer>
        <ProductBanner
          title="Product Details"
          path="Home-Products-ProductDetails"
        ></ProductBanner>
        <ProductDetails product={data} />
      </NMContainer>
    </div>
  );
};

export default ProductDetailsPage;
