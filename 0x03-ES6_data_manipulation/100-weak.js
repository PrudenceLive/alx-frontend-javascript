// 100-weak.js

// Define a WeakMap to track the number of queries for each endpoint
export const weakMap = new WeakMap();

// Define the queryAPI function
export function queryAPI(endpoint) {
  // Check if the endpoint is already tracked in the weakMap
  if (!weakMap.has(endpoint)) {
    // If not, initialize the count to 1
    weakMap.set(endpoint, 1);
  } else {
    // If yes, increment the count
    const count = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, count);
    // Check if the count is >= 5, if so, throw an error
    if (count >= 5) {
      throw new Error('Endpoint load is high');
    }
  }
}
