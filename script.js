const button = document.querySelector("button");
const output = document.querySelector(".output");


console.log(button[0]);
button.addEventListener("click", function() {
    console.log("click");
    output.innerHTML = "output";
})