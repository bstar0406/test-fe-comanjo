import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51M03FwFaYTd0qdyANKi8zgm9oIG8cRXtrrycxK5QYuaFNWg9UbUDUge2P2RhW3VrpXWHeLOQysqeRUnusgrKOgLR00nHQfPmlP');
const id = 'price_1M55bIFaYTd0qdyAx80yVSFt'
const secret = 'sk_test_51M03FwFaYTd0qdyAN3hDlZx4tbQuOmPyOj6BND8LVGsvzhes1NiFakqw652PdbBU9Q6Fv65SCijvJmd73bX2lRn700ZnSG7prO'
const Stripe =()=> {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{${id}_secret_${secret}}}',
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;