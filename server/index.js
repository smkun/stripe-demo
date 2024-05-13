require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Stripe server is ready!');
});

app.post('/payment', async (req, res) => {
    try {
      const { amount, id } = req.body;
      const payment = await stripe.paymentIntents.create({
        amount,
        currency: 'usd',
        description: 'Gamer Lux 5000',
        payment_method: id,
        confirm: true,
        return_url: 'http://localhost:3001/success', // Add a return URL
      });
      console.log('Payment', payment);
      res.json({
        message: 'Payment successful',
        success: true,
      });
    } catch (error) {
      console.log('Error', error);
      res.json({
        message: 'Payment failed',
        success: false,
      });
    }
  });;


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
