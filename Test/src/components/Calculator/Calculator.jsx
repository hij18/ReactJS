import './Calculator.css';

import React, { Component } from 'react';
import Product from 'components/Product';
import Basket from 'components/Basket';

export default class Calculator extends Component {
    static defaultProps = {
       
    } 

    constructor (props) {
        super(props);
        this.state = {
            allProduct: [
                {
                    productName: 'toto',
                    productPrice: '100',
                },
                {
                    productName: 'tutu',
                    productPrice: '200',
                },
                {
                    productName: 'tata',
                    productPrice: '400',
                },
            ],
            isNew: false,
        }
    }

    handleProduct = (newProduct) => {
        this.setState((prevState) => ({
            allProduct: prevState.allProduct.concat([newProduct]),
        }));
        this.setState({
            isNew: true,
        });
    }

    render() {
        const { allProduct } = this.state;
        return (
            <div className="Calculator">
                <Product getNewProduct={this.handleProduct}/>
                <Basket listOfProducts={this.state.allProduct} reRender={this.state.isNew}/>
            </div>
        )
    }
}
