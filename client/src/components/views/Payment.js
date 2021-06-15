import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Elements } from "react-stripe-elements";
import Order from "./Order";

class Payment extends React.Component {    
	processPayment(paymentRes) {
		switch (paymentRes.result) {
			case "Pending":
			case "Failed":
				window.location.href = "/status/failed";
				break;
			default:
				window.location.href = "/status/success";
				break;
		}
	}
	render() {
        return (
			<div id="paymentPage">
				<Elements>
					<h1>Payment Notice</h1>
					<p>Please make the payment, after that you can enjoy all your delicious meals</p>
					<Order />
					<form action="">
						<fieldset>
							<legend>Payment Methods:</legend>
							<input type="radio" name="banking" value="bank account"> Banking
							<input type="radio" name="E-wallet" value="E-pay" checked> E-wallet
						</fieldset>
						<br>
						<button onClick={this.processPayment}> Confirm and Pay </button>
					</form>
				</Elements>
			</div>
		);
    }
}

export default Payment