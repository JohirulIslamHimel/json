// JSON.stringify() method:
const user = {
  name: "John",
  age: 25,
};
const jsonUser = JSON.stringify(user);
// console.log(jsonUser);
// JSON.parse() method:
const dataFromServer = `{
  "name": "Doe",
  "age": 29
}`;
const objUser = JSON.parse(dataFromServer);
console.log(objUser);
