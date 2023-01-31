import React from "react";
import { connect } from 'react-redux';
import "./product-card.css";
import { FaRupeeSign } from 'react-icons/fa';
import { Operations as ProductOperations } from "../../redux/duck/index";

class ProductCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedProducts: []
    }
    // this.selectedProducts = [];
  }

  componentDidMount() {
  }

  getCart = () => {
    ProductOperations.setSelectedProducts(this.props.product);
  }

  productSelected = () => {
    let selected = false;
    let result = this.props.selectedProducts?.map(product => {
      if (this.props.product?.id === product?.id) {
        selected = true;
      }
    }
    );
    return selected;
  }

  render() {
    let product = this.props.product;
    return (
      <div style={{ "cursor": "pointer", "borderColor": `${this.productSelected() ? "green" : ""}` }}
        className="card bg-outline mb-4 justify-content-center text-center" onClick={this.getCart}>
        <div className="pt-3">
          <img src={require(`../../shared/img/${product.image}.jpg`)} style={{ height: "60px", width: "40px" }} alt="..." />
        </div>
        <div className="card-body pb-0 pl-0 pr-0">
          <h5 className="card-title text-body text-primary mb-0">{product?.name} <small className="text-secondary">({product?.weight})</small></h5>
          <p className="card-text mb-0">{product?.brand}</p>
          <p className="card-text mb-2 text-success"><FaRupeeSign /> {product?.price}</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    selectedProducts: state.selectedProducts
  }
}

export default connect(mapStateToProps)(ProductCard);