import AllProducts from "@/components/modules/products";
import ProductBanner from "@/components/modules/products/banner";
import CategoryCard from "@/components/ui/core/CategoryCard";
import NMContainer from "@/components/ui/core/NMContainer";
import { getAllCategories } from "@/services/category";
import { getAllProducts } from "@/services/product";
import { ICategory } from "@/types";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const AllProductsPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const query = await searchParams;
  const { data: categories } = await getAllCategories();
  const { data: products } = await getAllProducts(undefined, undefined, query);

  return (
    <>
      <NMContainer>
        <ProductBanner title="All Products" path="Home-Products" />
        <h2 className="text-xl font-bold my-5">Featured Collection</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 my-5">
          {categories?.slice(0, 6).map((category: ICategory, idx: number) => (
            <CategoryCard key={idx} category={category} />
          ))}
        </div>
        <div>
          <AllProducts products={products} />
        </div>
      </NMContainer>
    </>
  );
};

export default AllProductsPage;
