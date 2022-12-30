import React from "react";

const Sidebar = () => {
  return (
    <div className="columns is-multiline">
      <div className="column is-12">
        <h2 className="subtitle">100 products</h2>
        <div className="field has-addons">
          <div className="control">
            <button>
              <i className="fas fa-th-large"></i>
            </button>
          </div>
          <div className="control">
            <button>
              <i className="fas fa-grip-horizontal"></i>
            </button>
          </div>
        </div>
        <h3 className="subtitle is-6 mb-2">Search Products</h3>
        <input
          className="input"
          type="text"
          placeholder="Search your product..."
        />
      </div>
      <div className="column is-12">
        <h3 className="subtitle is-6 mb-2">Filter</h3>
        <div className="select is-fullwidth">
          <select>
            <option value="">Show all</option>
            <option value="fruit">Fruit</option>
            <option value="vegetables">Vegatables</option>
            <option value="meals">Meals</option>
            <option value="beverages">Beverages</option>
            <option value="utensils">Utensils</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
