import React from 'react';
import { connect } from 'react-redux';
import ProductCard from "./product-card";
import { Button } from 'react-bootstrap';
import { FcNext } from 'react-icons/fc';

class ProductList extends React.Component {

    componentDidMount() {
        // Operations.setAllProducts(ProductJson.products);
    }

    renderProducts = () => {
        let products = this.props.products?.map(product => {
            return (
                <div className="col-4" key={product?.id}>
                    <ProductCard product={product} />
                </div>
            );
        })
        return products
    }

    goToAddressForm = () => {
        this.props.history.push("/product/addressForm");
    }

    render() {
        if (this.props.products?.length > 0) {
            return (
                <React.Fragment>
                    <div className="container mt-2 mb-5">
                        <h1 className="text-center mb-3">Product List</h1>
                        <div className="row justify-content-center">
                            <this.renderProducts />
                        </div>
                        <div className="row justify-content-right">
                            <span className="col-9"></span>
                            <Button
                                className=" col-2 ml-5 border-round"
                                variant="outline-primary"
                                onClick={this.goToAddressForm}
                            >
                                Next
                                <FcNext />
                            </Button>
                        </div>
                    </div>
                </React.Fragment>
            );
        } else return ''
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(ProductList);