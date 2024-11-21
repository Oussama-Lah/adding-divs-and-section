// const elements = document.querySelector("[name=elements]");
// const text = document.querySelector("[name=texts]");
// const btn = document.querySelector("[name=create]");
// const rslt = document.querySelector("[class=results]");
// const select = document.querySelector("select");

// btn.addEventListener("click", function () {
//   rslt.innerHTML = ""; // i need this so i can store the result;
//   if (elements.value !== "" && text.value !== "") {
//     for (let i = 0; i < elements.value; i++) {
//       // look below i can make this part shorter;
//       if (select.value === "Div") {
//         const paragraph = document.createElement("div");
//         paragraph.textContent = `${text.value}`;
//         paragraph.setAttribute("class", "box");
//         paragraph.setAttribute("title", "Element");
//         paragraph.setAttribute("id", `id-${i + 1}`);
//         rslt.appendChild(paragraph);
//       } else {
//         const paragraph = document.createElement("section");
//         paragraph.textContent = `${text.value}`;
//         paragraph.setAttribute("class", "box");
//         paragraph.setAttribute("title", "Element");
//         paragraph.setAttribute("id", `id-${i + 1}`);
//         rslt.appendChild(paragraph);
//       }
//       //the shorter version of the inner if statment;
//       // const paragraph = document.createElement(select.value);
//       // paragraph.textContent = `${text.value}`;
//       // paragraph.setAttribute("class", "box");
//       // paragraph.setAttribute("title", "Element");
//       // paragraph.setAttribute("id", `id-${i + 1}`);
//       // rslt.appendChild(paragraph);
//     }
//   }
// });

// document.forms[0].onsubmit = (e) => e.preventDefault();

// here my logic is flawed:
//1-I did not count the option of both the element and text field if they were empy what would happen
//2- and waht if only one of them is empty ;

//  this is the answer i found in github:--------------------------------

// try to understand it : and compare it with yours;

// const numInput = document.querySelector('[name="elements"]');
// const textInput = document.querySelector('[type="text"]');
// const select = document.getElementsByTagName("select")[0];
// const submitInput = document.querySelector('input[type="submit"]');
// const holderDiv = document.querySelector("div.results");

// document.forms[0].onsubmit = function (e) {
//   holderDiv.innerHTML = "";
//   if (textInput.value == "") {
//     textInput.value = select.value;
//   }
//   // i have added some new ideas. thanks to our teacher Osama Elzero.
//   if (numInput.value == "" || numInput.value > 100) {
//     const newElement = document.createElement("p");
//     newElement.className = "warning";
//     newElement.innerHTML =
//       "can u please type a valid number (<span>greater than 0 and less than 100</span>)";
//     newElement.style.color = "#FC5404";
//     newElement.style.margin = "auto";
//     holderDiv.appendChild(newElement);
//   } else {
//     for (let i = 1; i <= numInput.value; i++) {
//       const newElement = document.createElement(select.value);
//       newElement.className = "box";
//       newElement.title = "Element";
//       newElement.id = `id-${i}`;
//       newElement.innerHTML = textInput.value;

//       holderDiv.appendChild(newElement);
//     }
//   }
//   e.preventDefault();
// };
