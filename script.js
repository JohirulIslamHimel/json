const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    //   give promise of response
    .then((response) => response.json()) // promise for JSON data
    .then((data) => console.log(data));
};
