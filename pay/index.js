
const express = require('express');
const Razorpay = require('razorpay');

const razorpayInstance = new Razorpay({

	key_id: "rzp_test_u7FHqkyoCXDKt9",

	key_secret: "tBVuDF7yIKrWkHKK7jrSMUJA"
});

const app = express();
const PORT = process.env.PORT || '5501';

app.post('/createOrder', (req, res)=>{


	const {amount,currency,receipt, notes} = req.body;	

	razorpayInstance.orders.create({amount, currency, receipt, notes},
		(err, order)=>{
		
		if(!err)
			res.json(order)
		else
			res.send(err);
		}
	)
});
//Inside app.js
app.post('/verifyOrder', (req, res)=>{

	const {order_id, payment_id} = req.body;	
	const razorpay_signature = req.headers['x-razorpay-signature'];

	const key_secret = "tBVuDF7yIKrWkHKK7jrSMUJA";	

	let hmac = crypto.createHmac('sha256', key_secret);

	hmac.update(order_id + "|" + payment_id);
	
	const generated_signature = hmac.digest('hex');
	
	
	if(razorpay_signature===generated_signature){
		res.json({success:true, message:"Payment has been verified"})
	}
	else
	res.json({success:false, message:"Payment verification failed"})
});


app.listen(PORT, ()=>{
	console.log("Server is Listening on Port ", PORT);
});
