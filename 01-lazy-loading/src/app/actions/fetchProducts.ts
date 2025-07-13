export const fetchProducts = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    // Simulate a delay
    await new Promise(resolve => setTimeout(resolve, 3000)); 

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data; // Adjust according to the API response structure
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return [];
  }
};