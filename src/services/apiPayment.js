export async function getZaloPayPaymentUrl(paymentInfo) {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/payment/zalopay/getPaymentUrl`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentInfo),
      },
    );
    const data = await res.json();
    return data;
  } catch (e) {
    return null;
  }
}
