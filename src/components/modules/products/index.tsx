"use client";

import ProductCard from "@/components/ui/core/ProductCard";
import { IProduct } from "@/types";
import FilterSidebar from "./filterSidebar";

const AllProducts = ({ products }: { products: IProduct[] }) => {
  return (
    <div className="flex gap-4 my-12">
      <div>
        <FilterSidebar />
      </div>
      <div>
        <div>
          <div className="container mx-auto">
            <div className="grid grid-cols-1  lg:grid-cols-4 gap-8">
              {products?.map((product: IProduct, idx: number) => (
                <ProductCard key={idx} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
