import React, { Component } from "react";
// import { products } from "../../../../server/data";
import auth from "../services/authServices";
import http from "../services/httpServices";

class Products extends Component {
  state = {
    product: [],
    view: 0,
    imgData: {},
  };

  async fetchData() {
    let response = await http.get("/products");
    console.log(response);
    let { data } = response;
    this.setState({ product: data });
  }
  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) this.fetchData();
  }

  handleImage = (image) => {
    let s1 = { ...this.state };
    console.log(image);
     s1.imgData = s1.product.find((n) => n.img === image);
    console.log(s1.imgData);
    s1.view=1;
    this.setState(s1);
  };

  render() {
    const { view, product,imgData } = this.state;
    return view === 0 ? (
      <div className="container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <div className="row ">
              {product.map((n) => (
                <div className="col-6 ">
                  <img
                    src={n.img}
                    style={{
                      width: "100%",
                      marginTop: "10px",
                      height: "35vh",
                      border: "1px solid black",
                    }}
                    onClick={() => this.handleImage(n.img)}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-3">
            <h4>Choose Product</h4>
          </div>
        </div>
      </div>
    ):view===1 ? (
        <div className="container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <div className="row ">
              {product.map((n) => (
                <div className="col-6 ">
                  <img
                    src={n.img}
                    style={{
                      width: "100%",
                      marginTop: "10px",
                      height: "35vh",
                      border: "1px solid black",
                    }}
                    onClick={() => this.handleImage(n.img)}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-3">
            <h4>Choose Product</h4>
            <div >
            <img
                    src={imgData.img}
                    style={{
                      width: "100%",
                      marginTop: "10px",
                      height: "35vh",
                      border: "1px solid black",
                    }}
            
                    alt=""
                  />
            </div>
          </div>
        </div>
      </div>
    ) : (
      ""
    );
  }
}

export default Products
