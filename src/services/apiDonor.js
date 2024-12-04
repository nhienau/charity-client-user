export async function getDonorNamesByPhoneNumber(phoneNumber) {
  const params = { phoneNumber };
  const queryString = "?" + new URLSearchParams(params).toString();
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/donorName/get${queryString}`,
  );
  const data = await res.json();
  return data;
}
