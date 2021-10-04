import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;  // stripe processes in cents and not dollars
    const publishableKey = 'pk_test_51JgVdMSBtDQlPRD3dHRsK8PnpkAaRBperYD4742N6TvNLA9Q5bointYNZalKiJ6rQJoFqCa43Tz0Zh6Gy3PtAi7m00iltFkvkE';

    const onToken = (token) => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Crown Clothing Pvt. Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}  // this price is what the user sees
            amount={priceForStripe}  // this is the price Stripe sees (cents)
            panelLabel='Pay Now'
            token={onToken}  // on success callback triggered on submission
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;
