var user = {
  name: "John",
  surname : "Mike",
};
user.name = "Peter";
delete user.name;
console.log(user.name); // Uncaught SyntaxError: Unexpected identifier

var fruit = {
apple: 20,
pear: 20,
peach: 10
};
// write your code here...
var total = fruit.apple + fruit.pear + fruit.peach;
console.log(total);
