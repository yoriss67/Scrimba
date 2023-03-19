// const boxes = document.querySelectorAll('.box');

// boxes.forEach((box) => {
//   let bg = box.style.backgroundColor;

//   if (bg === 'black') {
//     // let p = document.createElement('p');
//     // p.innerText = 'JS DOM';
//     // box.appendChild(p);

//     bg === "white"
//   }
// });

const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
  box.addEventListener('click', () => {
    if (box.style.backgroundColor === 'white') {
      box.style.backgroundColor = 'black';
    } else {
      box.style.backgroundColor = 'white';
    }
  });
});
