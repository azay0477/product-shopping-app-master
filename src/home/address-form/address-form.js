import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { FcNext, FcPrevious } from 'react-icons/fc';
import { Form } from "react-bootstrap";
import States from "../../shared/indian-states";
import { Operations as ProductOperations } from "../../redux/duck/index";

class AddressForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            address1: "",
            address2: "",
            country: "",
            state: "",
            city: ""
        }
    }

    componentDidMount(){
        let address = this.props.address;
        this.setState({ 
            address1: address?.address1, 
            address2: address?.address2,  
            country: address?.country,
            state: address?.state,
            city: address?.city
        })
    }

    storeAddress = () => {
        let address = {
            address1: this.state.address1,
            address2: this.state.address2,
            country: this.state.country,
            state: this.state.state,
            city: this.state.city
        }
        ProductOperations.setAddress(address);
    }

    goBack = () => {
        this.storeAddress();
        this.props.history.goBack()
    }

    goToCartPage = () => {
        this.storeAddress();
        this.props.history.push("/product/cartpage")
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
                    <span className="col-6"></span>
                    <Button
                        className="col-2 ml-5 border-round"
                        variant="outline-primary"
                        onClick={this.goToCartPage}
                    >
                        Next
                    <FcNext />
                    </Button>
                </div>
            </footer>
        )
    }

    addForm = () => {
        return (
            <Form>
                <Form.Group controlId="addressLine1">
                    <Form.Label>Address Line 1</Form.Label>
                    <Form.Control type="text"
                        placeholder="Near Durga Mata Mandir"
                        onChange={event => this.setState({ address1: event.target.value })}
                        value={this.state.address1}
                    />
                </Form.Group>
                <Form.Group controlId="addressLine2">
                    <Form.Label>Address Line 2</Form.Label>
                    <Form.Control type="text"
                        placeholder="Apartment, studio, or floor"
                        onChange={event => this.setState({ address2: event.target.value })}
                        value={this.state.address2}
                    />
                </Form.Group>
                <Form.Group controlId="country">
                    <Form.Label>Country</Form.Label>
                    <Form.Control as="select"
                        onChange={event => this.setState({ country: event.target.value })}
                        value={this.state.country}
                    >
                        <option>Choose...</option>
                        <option>India</option>
                        <option>Nepal</option>
                        <option>Bhutan</option>
                        <option>Pakistan</option>
                        <option>Sri Lanka</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="state">
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select"
                        onChange={event => this.setState({ state: event.target.value })}
                        value={this.state.state}
                    >
                        <option>Choose...</option>
                        {(this.state.country === "India" || this.state.country === "India") && States.map((state) => {
                            return (<option key={state}>{state}</option>)
                        })}
                    </Form.Control>
                    <Form.Text className="text-muted">
                        States are only available for India.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text"
                        placeholder="Nagpur"
                        onChange={event => this.setState({ city: event.target.value })}
                        value={this.state.city}
                    />
                </Form.Group>
            </Form>
        )
    }

    render() {
        if (this.props.products?.length > 0) {
            return (
                <React.Fragment>
                    <div className="container mt-2 mb-5">
                        <h1 className="text-center mb-3">Address Form</h1>
                        <div className="justify-content-center mb-5">
                            {this.addForm()}
                        </div>
                        <this.footer />
                    </div>
                </React.Fragment>
            );
        } else return ''
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        address: state.deliveryAddress
    }
}

export default connect(mapStateToProps)(AddressForm);