import React from "react";

const EditProduct = () => {
  return (
    <div className="container">
      <div className="section">
        <div className="card">
          <div className="card-header">
            <p className="card-header-title title is-2">Edit product</p>
          </div>
          <div className="card-content">
            <form>
              <div className="columns">
                <div className="column is-3">
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter Product Name"
                  />
                </div>
                <div className="column is-3">
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter Product Price"
                  />
                </div>
                <div className="column is-3">
                  <input
                    className="input"
                    type="text"
                    placeholder="Product Picture"
                  />
                </div>
                <div className="column is-3">
                  <div className="select is-fullwidth">
                    <select>
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
              <button className="button is-primary">Update Product</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
