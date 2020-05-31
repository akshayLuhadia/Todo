import React from "react";
import { connect } from "react-redux";

const style = {
  width: "50%",
  textAlign: "left",
};

const TodoList = ({ products }) => (
  <div>
    <h1>Product List</h1>
    <table style={style}>
      <thead>
        <tr>
          <th>#</th>
          <th>Task Name</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {/* {products && products.length
          ? products.map((product, index) => {
              return <Product key={index} product={product} />;
            })
          : "No products!"} */}
      </tbody>
    </table>
  </div>
);

const mapStateToProps = (state) => {
  console.log(state);
};

export default connect(mapStateToProps)(TodoList);
