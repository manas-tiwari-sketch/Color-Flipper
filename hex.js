const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const click = document.getElementById("btn"); 
click.addEventListener('click', () => {
    var len = "#";
    for(let i=0; i<6; i++){
      len += hex[Math.floor(Math.random()*hex.length)];
    }
    document.querySelector(".color").innerHTML = len;
    document.body.style.backgroundColor = len;

  });
