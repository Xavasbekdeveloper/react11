import Products from "../../../components/product/Products";
import useFetch from "../../../hooks/useFetch";

const ManageProducts = () => {
  let { data, loading, error } = useFetch("/products");
  return (
    <div>
      <Products isAdmin={true} data={data} />
    </div>
  );
};

export default ManageProducts;
