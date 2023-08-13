// // Write your code here!
// const element = document.createElement("div");
// document.body.append(element);
// const ul = document.createElement("ul");

// for (let i = 0; i < 3; i++) {
//   const li = document.createElement("li");
//   li.textContent = (i + 1).toString();
//   ul.append(li);
// }

// element.append(ul);

// const main = document.getElementById("main");
// main.innerHTML =
//   "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";

// const element_ = document.getElementById("main");
// element_.style.height = "300px";
// element_.style.backgroundColor = "#27647B";

// element_.textContent = "You've changed what's on the screen!";

// element_.style.fontSize = "24px";
// element_.style.marginLeft = "30px";
// element_.style.lineHeight = 2

// element_.className = "pet-listing dog";
 
// element_.classList.remove("dog");
// element_.classList.add("cat", "sale");

// const ul_ = document.getElementsByTagName("ul")[0];
// const secondChild = ul_.querySelector("li:nth-child(2)");
// ul_.removeChild(secondChild);

const main = document.getElementById("main");
main.remove()

const newHeader = document.createElement("h1");

newHeader.id = "victory"

newHeader.textContent = "peris is the champion"

document.body.append(newHeader);
