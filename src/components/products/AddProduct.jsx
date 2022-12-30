import React, { useState } from "react";
import shortid from "shortid";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { productState } from "../../recoil/productRecoil";

const AddProduct = () => {
  const navigateTo = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [picture, setPicture] = useState("");
  const [type, setType] = useState("");

  const setProducts = useSetRecoilState(productState);

  const onSubmit = (e) => {
    e.preventDefault();
    const new_product = {
      name,
      price,
      picture,
      type,
      id: shortid.generate(),
    };
    setProducts((oldProducts) => [new_product, ...oldProducts]);
    navigateTo("/");
  };

  return (
    <div className="container">
      <div className="section">
        <div className="card">
          <div className="card-header">
            <h1 className="card-header-title title is-2">Add product</h1>
          </div>
          <div className="card-content">
            <form onSubmit={onSubmit}>
              <div className="columns">
                <div className="column is-3">
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter Product Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="column is-3">
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter Product Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="column is-3">
                  <input
                    className="input"
                    type="text"
                    placeholder="Product Picture"
                    value={picture}
                    onChange={(e) => setPicture(e.target.value)}
                  />
                </div>
                <div className="column is-3">
                  <div className="select is-fullwidth">
                    <select
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                    >
                      <option>Select Product Type</option>
                      <option value="fruit">fruit</option>
                      <option value="vegetables">vegetables</option>
                      <option value="beverages">beverages</option>
                      <option value="meals">meals</option>
                      <option value="utensils">utensils</option>
                    </select>
                  </div>
                </div>
                <div className="column is-3"></div>
              </div>
              <button className="button is-primary">Add Product</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
