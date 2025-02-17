import ManageCategories from "@/components/modules/shop/category";
import { getAllCategories } from "@/services/category";

const ProductCategory = async () => {
  const { data } = await getAllCategories();
  return (
    <div>
      <ManageCategories categories={data} />
    </div>
  );
};

export default ProductCategory;
