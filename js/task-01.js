// const list1 = document.querySelector('#categories');
// const items1 = list1.querySelectorAll('li.item');

// console.log(`Number of categories: ${items1.length}`);

// items1.forEach((item1) => {
//   const title1 = item1.querySelector('h2').textContent;
//   const elem1 = item1.querySelectorAll('li').length;
  
//   console.log(`Category: ${title1}`);
//   console.log(`Elements: ${elem1}`);
// });

// <=================================================================>


const list = document.querySelector('#categories');
const items = [...list.children]; 

console.log(`Number of categories: ${items.length}`);

items.forEach((elem) => {
const [elemTitle, elemUl] = elem.children;
const titleText = elemTitle.textContent;
const totalLi = elemUl.childElementCount;

console.log(`Category: ${titleText}`);
console.log(`Elements: ${totalLi}`);
})
