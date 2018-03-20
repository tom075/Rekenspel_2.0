const wrapper = document.getElementById('wrapper');
const myAssignment = document.getElementById('myAssignment');
const myAnswer = document.getElementById('myAnswer');


let mySum;

// arrays //
var yourAnwser = ['\xa0jouw antwoord\xa0', ];
var theSum = ['\xa0de som\xa0', ];
var correctAnwser = ['\xa0het juiste antwoord\xa0', ];


function restart() {
  location.reload();
}

function start() {
  document.getElementById("wrapper").style.display = "block";
  document.getElementById("button").style.display = "none";

  makeSum()
}

function makeSum() {
  var a = Math.floor(Math.random() * 9 + 1);
  var b = Math.floor(Math.random() * 9 + 1);
  mySum = a + " * " + b;
  myAssignment.innerHTML = mySum;
  myAnswer.focus();
}

function keyPressed(evt) {
  if (evt.keyCode == 13) {
    // push in arrays//
    yourAnwser.push(myAnswer.value);
    theSum.push(myAssignment.innerHTML);
    correctAnwser.push(eval(mySum));



    if (yourAnwser.length <= 10) {
      window.setTimeout(waiting, 10);
    } else {
      // display aanpassen //
      document.getElementById("wrapper").style.display = "none";
      document.getElementById("result").style.display = "grid";
      document.getElementById("restart").style.display = "inline";
      document.getElementById("myTable").style.display = "inline";



      var table = document.getElementById("myTable");

      for (i = 0; i < 11; i++) {

        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.innerHTML = theSum[i];
        cell2.innerHTML = yourAnwser[i];
        cell3.innerHTML = correctAnwser[i];

        if (eval(mySum) == myAnswer.value) {
          document.getElementById("myTable").style.backgroundColor = "limegreen";




        }
         else {



        //  document.getElementById("myTable").style.backgroundColor = "red";
        }

      }


      // focus weghalen //
      myAnswer.blur();

    }
  }
}


function waiting() {
  myAnswer.value = "";
  makeSum()
}

makeSum();
myAnswer.addEventListener("keydown", keyPressed, false)
