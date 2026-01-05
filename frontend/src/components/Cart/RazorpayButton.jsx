const RazorpayButton = ({ amount, onSuccess, onError }) => {
  const handlePayment = () => {
    const options = {
      key: "rzp_test_xxxxxxxxxx", // TEST KEY ONLY
      amount: amount * 100, // paise
      currency: "INR",
      name: "Clothing Store",
      description: "Test Transaction (Sandbox)",
      handler: function (response) {
        console.log("Payment Success:", response);
        onSuccess(response); // 🔥 redirect happens here
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
  };

  return (
    <button
      onClick={handlePayment}
      className="w-full bg-black text-white py-3 rounded"
    >
      Pay ₹{amount}
    </button>
  );
};

export default RazorpayButton;
