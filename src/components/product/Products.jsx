import React from "react";
import "./products.scss";
import axios from "../../api";

const Products = ({ data, isAdmin }) => {
  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete")) {
      axios
        .delete(`/products/${id}`)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  };

  let products = data?.map((product) => (
    <div key={product.id} className="products__card">
      <div className="products__card__img">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="products__card__info">
        <h3 className="products__card__title">{product.title}</h3>
        <p className="products__card__text">{product.category}</p>
        <p className="products__card__text">${product.price}</p>
        {isAdmin ? (
          <div className="products__card__btns">
            <button>Edit</button>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  ));
  return (
    <section className="products">
      <div className="container">
        <h1>Products</h1>
        <div className="products__cards">{products}</div>
      </div>
    </section>
  );
};

export default Products;
