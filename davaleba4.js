// function replaceStr(string, valueToReplace, valueToReplaceWith) {
//   return string.split(valueToReplace).join(valueToReplaceWith);
// }

// console.log(
//   replaceStr(
//     "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     "dummy",
//     "good"
//   )
// );
// function upperWords(string) {
//   let arr = string.split(" ");
//   let result = arr.map((word) => {
//     return word.toUpperCase();
//   });
//   return result.join(" ");
// }
// console.log(
//   upperWords(
//     "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
//   )
// );
function findOldest(users) {
  users.sort((a, b) => {b.age - a.age});
  return users;
}

const arr = [
  { name: "Lasha", age: 30 },
  { name: "Saba", age: 20 },
];
console.log(findOldest(arr));
