import ProductCard from "@/components/ui/core/ProductCard";
import { IProduct } from "@/types";
import FilterSidebar from "./filterSidebar";

const AllProducts = ({ products }: { products: IProduct[] }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 my-12">
      {/* Sidebar with adjusted width */}
      <div className="w-full md:w-[280px] lg:w-[320px] flex-shrink-0">
        <FilterSidebar />
      </div>
      {/* Product Grid */}
      <div className="flex-1">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products?.map((product: IProduct, idx: number) => (
              <ProductCard key={idx} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AllProducts;
