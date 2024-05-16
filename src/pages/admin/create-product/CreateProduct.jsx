import React, { useState } from "react";
import "./createproduct.scss";
import axios from "../../../api";
import { toast } from "react-toastify";

let initialState = {
  title: "Shoes",
  price: "20000",
  image:
    "https://rukminim2.flixcart.com/image/450/500/xif0q/shoe/7/z/r/8-white-leaf-8-urbanbox-white-black-original-imagvgf4cuzs2hrw.jpeg?q=90&crop=false",
};

const CreateProduct = () => {
  const [newProduct, setNewProduct] = useState(initialState);
  console.log(newProduct);

  const handleCreate = (e) => {
    e.preventDefault();

    axios
      .post("/products", newProduct)
      .then((res) => {
        setNewProduct(initialState);
        console.log(res);
        toast.success("Added product successfully");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="create">
      <h2>CreateProduct</h2>

      <form onSubmit={handleCreate} className="form" action="">
        <input
          value={newProduct.title}
          onChange={(e) =>
            setNewProduct((prev) => ({ ...prev, title: e.target.value }))
          }
          type="text"
          placeholder="enter Product name"
        />
        <input
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct((prev) => ({ ...prev, price: +e.target.value }))
          }
          type="text"
          placeholder="enter Product price"
        />
        <input
          value={newProduct.image}
          onChange={(e) =>
            setNewProduct((prev) => ({ ...prev, image: +e.target.value }))
          }
          type="text"
          placeholder="enter Product img url"
        />
        <button>Create</button>
      </form>
    </div>
  );
};

export default CreateProduct;
