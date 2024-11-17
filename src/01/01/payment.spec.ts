import { Payment } from './payment';

describe('Payment', () => {

	it('should process payment USD', () => {
		const payment = new Payment();
		const responseText = 'Credit card payment of 101 processed (fee: 2, discount: 1, exchange rate: 1)';

		const response = payment.process('credit_card', 100, 'USD');

		expect(payment.process('credit_card', 100, 'USD')).toEqual(
			'Credit card payment of 101 processed (fee: 2, discount: 1, exchange rate: 1)',
		);
		expect(payment.process('invoice', 200, 'EUR')).toEqual(
			'Invoice payment of 163.2 processed (fee: 1.7, discount: 8.5, exchange rate: 0.85)',
		);
		expect(payment.process('paypal', 300, 'GBP')).toEqual(
			'PayPal payment of 227.25 processed (fee: 6.75, discount: 4.5, exchange rate: 0.75)',
		);
		expect(payment.process('pix', 400, 'JPY')).toEqual(
			'Currency JPY not supported',
		);
	});

	it('should process payment Invoice', () => {
		const payment = new Payment();
		const responseText = 'Invoice payment of 163.2 processed (fee: 1.7, discount: 8.5, exchange rate: 0.85)';

		const response = payment.process('invoice', 200, 'EUR');

		expect(payment.process('paypal', 300, 'GBP')).toEqual(
			'PayPal payment of 227.25 processed (fee: 6.75, discount: 4.5, exchange rate: 0.75)',
		);
		expect(payment.process('pix', 400, 'JPY')).toEqual(
			'Currency JPY not supported',
		);
	});

	it('should process payment GBP', () => {
		const payment = new Payment();
		const responseText = 'PayPal payment of 227.25 processed (fee: 6.75, discount: 4.5, exchange rate: 0.75)';

		const response = payment.process('paypal', 300, 'GBP');

		expect(payment.process('pix', 400, 'JPY')).toEqual(
			'Currency JPY not supported',
		);
	});

	it('should process payment GBP', () => {
		const payment = new Payment();
		const responseText = 'PayPal payment of 227.25 processed (fee: 6.75, discount: 4.5, exchange rate: 0.75)';

		const response = payment.process('paypal', 300, 'GBP');

		expect(payment.process('pix', 400, 'JPY')).toEqual(
			'Currency JPY not supported',
		);
	});
})
