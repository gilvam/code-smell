export class Payment {
	process(type: string, amount: number, currency: string): string {
		let fee: number;
		let discount: number;
		let finalAmount: number;
		let exchangeRate: number;
		let notification: string;

		if (currency === 'USD') {
			exchangeRate = 1.0;
		} else if (currency === 'EUR') {
			exchangeRate = 0.85;
		} else if (currency === 'GBP') {
			exchangeRate = 0.75;
		} else {
			return `Currency ${currency} not supported`;
		}

		amount *= exchangeRate;

		if (type === 'credit_card') {
			fee = amount * 0.02;
			discount = amount * 0.01;
			finalAmount = amount + fee - discount;
			notification = `Credit card payment of ${finalAmount} processed (fee: ${fee}, discount: ${discount}, exchange rate: ${exchangeRate})`;
		} else if (type === 'invoice') {
			fee = amount * 0.01;
			discount = amount * 0.05;
			finalAmount = amount + fee - discount;
			notification = `Invoice payment of ${finalAmount} processed (fee: ${fee}, discount: ${discount}, exchange rate: ${exchangeRate})`;
		} else if (type === 'paypal') {
			fee = amount * 0.03;
			discount = amount * 0.02;
			finalAmount = amount + fee - discount;
			notification = `PayPal payment of ${finalAmount} processed (fee: ${fee}, discount: ${discount}, exchange rate: ${exchangeRate})`;
		} else {
			return `Payment type ${type} not supported`;
		}

		return notification;
	}
}
