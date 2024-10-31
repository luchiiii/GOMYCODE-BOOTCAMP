//Task 2

const awaitCall = async () => {
  try {
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        const data = { message: "Simulated API data" };
        resolve(data);
      }, 2000); // Simulate a 2-second delay
    });

    console.log(response);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

//Task 4
async function concurrentRequests() {
  try {
    const [response1, response2] = await Promise.all([
      new Promise((resolve) =>
        setTimeout(() => resolve("Data from API 1"), 2000)
      ),
      new Promise((resolve) =>
        setTimeout(() => resolve("Data from API 2"), 1500)
      ),
    ]);

    console.log("Combined results:", response1, response2);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Task 1

const iterateWithAsyncAwait = async () => {
  for (let value of values) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(value);
  }
};
