var modal = document.getElementById("myModal");
var btn = document.getElementById("btn1");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("btn2");
var span2 = document.getElementsByClassName("close")[1];
btn2.onclick = function() {
  modal2.style.display = "block";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

/*delete modal*/
function del() {
    // Fetch the modal
    var modal = document.getElementById("del");
    // Display the modal to the user
    modal.style.display = "block";
  
    // Hides the modal if user clicks else where on the display
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
  
    }
  }


