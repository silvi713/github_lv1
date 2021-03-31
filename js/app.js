function DodajPodatke()
{

var table=document.getElementById("tablicaPodataka");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  
cell1.innerHTML = document.getElementById("lPredmet").value;
cell2.innerHTML = document.getElementById("lsemestar").value;
cell3.innerHTML = document.getElementById("lEctsbodovi").value;

}
