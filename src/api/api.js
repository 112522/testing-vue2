export async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
}
