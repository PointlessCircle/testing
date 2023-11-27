document.getElementById("test").innerHTML = window.location.pathname;

function cB(test, row){
  var button = document.createElement('button');
  button.innerHTML = test;
  button.onclick = testing(test);
  document.getElementById(row).appendChild(button);
};

function testing(t2) {
    console.log(t2);
}

cB(1,row1);
cB(2,row1);
cB(3,row2);