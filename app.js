const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const click = document.getElementById("btn"); 
click.addEventListener('click', () => {
    var len = Math.floor(Math.random() * colors.length); 
    document.querySelector(".color").innerHTML = colors[len]; 
    document.body.style.backgroundColor = colors[len];
});
