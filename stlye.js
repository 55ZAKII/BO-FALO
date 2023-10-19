// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var division = document.createElement("div");
  var span = document.createElement("SPAN");
  var txt = document.createElement("\u00D7");
  var editSpan = document.createElement("SPAN");
  editSpan.innerHTML = "&#9998";
  division.appendChild(span);
  division.appendChild(editSpan);
  editSpan.className = 'edit';
  editSpan.onclick = function () {
    edirList(this);
  };
  span.className = 'close';
  span.appendChild(txt);
  myNodelist[i].appendChild(division);
}

// Click on a close button to hide the current list item
