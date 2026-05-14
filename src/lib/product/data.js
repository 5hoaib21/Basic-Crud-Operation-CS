export const getAllProducts = async () => {
  const res = await fetch('http://localhost:8008/products')
  const data = await res.json()
  return data;
}


export const getProductById = async (id) => {
  const res = await fetch(`http://localhost:8008/products/${id}`)
  const data = await res.json();

  return data;
}