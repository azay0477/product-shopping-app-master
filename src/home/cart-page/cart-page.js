import React from 'react';
import { connect } from 'react-redux';
import { Button, Card } from 'react-bootstrap';
import { FcPrevious } from 'react-icons/fc';
import { FaRupeeSign } from 'react-icons/fa';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { Operations as ProductOperations } from "../../redux/duck/index";
import ProductModal from "../../shared/product-modal";

class CartPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            city: "",
            showmodal: false
        }
    }

    goBack = () => {
        this.props.history.goBack()
    }

    footer = () => {
        return (
            <footer>
                <div className="row justify-content-right">
                    <Button
                        className=" col-2 ml-5 border-round"
                        onClick={this.goBack}
                        variant="outline-primary"
                    >
                        <FcPrevious />
                    Back
                </Button>
                    <span className="col-9"></span>
                </div>
            </footer>
        )
    }

    decreaseCartCount = (product) => {
        if (product.quantity === 1) {
            return;
        }
        ProductOperations.setDecreaseQuantity(product);
    }

    increaseCartCount = (product) => {
        ProductOperations.setIncreaseQuantity(product);
    }

    productsInCart = () => {
        let items = this.props.products?.map((product) => {
            return (
                <tr key={product.id}>
                    <td className="align-middle">{product.name}
                    </td>
                    <td className="align-middle">{product.brand}</td>
                    <td className="align-middle">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-7 text-center align-middle">
                                <div className="input-group input-group-sm">
                                    <div className="input-group-prepend">
                                        <button className="btn btn-primary btn-sm text-white"
                                            type="button" id="button-addon1"
                                            onClick={() => this.decreaseCartCount(product)}>
                                            <AiFillMinusCircle />
                                        </button>
                                    </div>
                                    <input type="text" readOnly
                                        value={product.quantity} className="form-control text-center"
                                        aria-label="Example text with button addon"
                                        aria-describedby="button-addon1" />
                                    <div className="input-group-append" id="button-addon4">
                                        <button className="btn btn-primary btn-sm text-white"
                                            type="button"
                                            id="button-addon2"
                                            onClick={() => this.increaseCartCount(product)}>
                                            < AiFillPlusCircle />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td className="font-weight-bold align-middle"><FaRupeeSign /> {product.price}</td>
                    <td className="font-weight-bold align-middle"><FaRupeeSign /> {product.price * product.quantity}</td>
                </tr>
            );
        })
        return items
    }

    deliveryAddress = () => {
        let address = this.props.address;
        return (
            <Card
                bg={"light"}
                text={'black'}
                style={{ width: '18rem' }}
                className="mb-2"
            >
                <Card.Header>Delivery Address</Card.Header>
                <Card.Body>
                    <Card.Text>
                        {address?.address1}<br />
                        {address?.address2}<br />
                        {address?.city}, {address?.state}<br />
                        {address?.country}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }

    render() {
        return (
            <React.Fragment>
                    <ProductModal show={this.state.showmodal} onHide={() =>this.setState({showmodal: false})}/>
                <div className="container mt-2 mb-5">
                    <h1 className="text-center mb-3">Cart Page</h1>
                    <div className="justify-content-center">
                        <div className="container">
                            <table className="table table-bordered bg-white text-center mt-3 mb-0">
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Brand</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Unit Price</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.products?.length ?
                                        <this.productsInCart />
                                        :
                                        <h4 className="p-3">Your cart is empty.</h4>
                                    }
                                </tbody>
                            </table>
                            <div className="column align-items-center justify-content-between bg-white p-4 border-bottom border-top border-secondary">
                                <div className="row align-items-center justify-content-between">
                                    <h5 className="mb-1 text-muted"><strong>TOTAL</strong></h5>
                                    <h5 className="mb-1 text-success"><strong><FaRupeeSign /> {this.props.totalAmount}</strong></h5>
                                </div>
                                <div className="row aligns-items-center justify-content-around border-top border-secondary mt-2 pt-4">
                                    {this.deliveryAddress()}
                                    <div className="mr-0">
                                    <button className="btn btn-success"
                                        onClick={() => this.setState({showmodal: true})}
                                    >
                                        PLACE ORDER
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5 mt-3">
                        <this.footer />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.selectedProducts,
        address: state.deliveryAddress,
        totalAmount: state.totalAmount ? state.totalAmount : 0
    }
}

export default connect(mapStateToProps)(CartPage);