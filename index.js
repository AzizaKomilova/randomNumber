function choose() {
    let max = document.getElementById("max").value;
    let min = document.getElementById("min").value;
    let randomNumber = Math.floor(Math.random() * max) + 1; // 0-1
    if (randomNumber > min) {
      document.getElementById("random").innerHTML = randomNumber;
    } else {
      choose();
    }
  }
  
  