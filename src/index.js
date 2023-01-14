import "./styles.css";
let string = "";
let buttons = document.getElementsByClassName("common");
console.log(buttons);
let arr = Array.from(buttons);
console.log(arr);
arr.forEach(function (item) {
  console.log(item);
  item.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "Ac") {
      string = "";
      document.querySelector("input").value = string;
    } else {
      console.log(e.target.innerHTML);
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});
