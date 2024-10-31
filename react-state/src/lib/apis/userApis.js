export const getAllUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();

    if (!response.ok) {
      return { error: "Something went wrong" };
    }

    return data;
  } catch (error) {
    return { error: "Something went wrong" };
  }
};
