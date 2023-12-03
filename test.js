document.getElementById("test").innerHTML = window.location.pathname;

function cB(test, row){
  var button = document.createElement('button');
  button.innerHTML = test;
  button.onclick = function() {testing(test)};
  document.getElementById(row).appendChild(button);
};

function testing(t2) {
    alert(t2);
}

cB('1','r1');
cB('2','r1');
cB('3','r2');