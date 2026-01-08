import axios from "axios";

const RazorpayButton = ({ amount, onSuccess, onError }) => {
  const handlePayment = async () => {
    try {
      const { data: order } = await axios.post(
        "http://localhost:9000/api/payment/create-order",
        { amount }
      );

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        name: "Clothing Store",
        description: "Test Transaction",
        order_id: order.id,

        handler: function (response) {
          console.log("Payment success:", response);
          onSuccess(response);
        },

        modal: {
          ondismiss: function () {
            onError("Payment cancelled");
          },
        },

        theme: {
          color: "#000000",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      onError(err);
    }
  };

  return (
    <button
      type="button"
      onClick={handlePayment}
      className="w-full bg-black text-white py-3 rounded"
    >
      Pay ₹{amount}
    </button>
  );
};

export default RazorpayButton;