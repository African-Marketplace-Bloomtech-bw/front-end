import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import axiosWithAuth from "../utils/axiosWithAuth";

const AddProduct = (props) => {
  const { submit, values, change } = props;
  const { push } = useHistory();

  const onChange = (evt) => {
    const { name, value } = evt.target;
    change(name, value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <div className="product-container">
      <form onSubmit={onSubmit}>
        <header className="loginHeader">
          Add a product to the marketplace
        </header>
        <div className="row">
          <label className="productlabel">Item Name</label>
          <input
            value={values.name}
            onChange={onChange}
            name="name"
            type="text"
            placeholder="Please enter you item name."
          />
        </div>
        <div className="row">
          <label className="productlabel">Item Description</label>
          <input
            value={values.description}
            onChange={onChange}
            name="description"
            type="text"
            placeholder="Please describe your item you wish to sell."
          />
        </div>
        <div className="row">
          <label className="productlabel">Price</label>
          <input
            value={values.price}
            onChange={onChange}
            name="price"
            type="text"
            placeholder="Please enter your price."
          />
        </div>
        <div className="row">
          <button id="loginBtn" type="submit">
            Add your item
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;