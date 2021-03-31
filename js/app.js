function DodajPodatke()
{

var table=document.getElementById("tablicaPodataka");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4= row.insertCell(3);
  var cell5= row.insertCell(4);
  
cell1.innerHTML = document.getElementById("lPredmet").value;
cell2.innerHTML = document.getElementById("lsemestar").value;
cell3.innerHTML = document.getElementById("lEctsbodovi").value;
cell4.innerHTML = '<button onclick="ObrisiRed(this)" class="fas fa-minus"></button> ';
cell5.innerHTML = '<input type="checkbox" id="myCheck" onclick="selectedRow()">';

}


function ObrisiRed(rows)
{
var _row = rows.parentElement.parentElement;
  document.getElementById('tablicaPodataka').deleteRow(_row.rowIndex);
}


function selectedRow()
{
  var table = document.getElementById('tablicaPodataka');

  table.addEventListener("click", function(ev){
    if (ev.target.tagName == "INPUT") {
      if (ev.target.checked) {
        ev.target.parentNode.parentNode.classList.add("selected");
      }else {
        ev.target.parentNode.parentNode.classList.remove("selected");
      }
    }
  });
}
