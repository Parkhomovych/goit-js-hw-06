const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const myUl2 = document.querySelector("#ingredients");
const resalt = ingredients.map((elem) => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = elem;
  return li;
});
myUl2.append(...resalt);

// <=================================================================>

// const myUl1 = document.querySelector("#ingredients");
// const totalLi = [];
// ingredients.forEach((elem) => {
//   const li = document.createElement("li");
//   li.classList.add("item");
//   li.textContent = elem;
//   totalLi.push(li);
// });
// myUl1.append(...totalLi);

// <=================================================================>

// const myUl = document.querySelector("#ingredients");
// const arr = [];
// for (let i = 0; i < ingredients.length; i += 1) {
//   const li = document.createElement("li");
//   li.classList.add("item");
//   li.textContent = ingredients[i];
//   arr.push(li);
// }
// myUl.append(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5]);
// myUl.append(...arr);

// <=================================================================>
