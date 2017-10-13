// EDIT MESSAGES BELOW

var terms = ["Message1", "Message2", "Message3", "Message 4!", "Message5"]; 



// DO NOT EDIT THIS (UNLESS YOU KNOW WHAT ARE YOU DOING)
function rotateTerm() {
  var ct = $("#rotate").data("term") || 0;
  $("#rotate").data("term", ct == terms.length -1 ? 0 : ct + 1).text(terms[ct])
              .fadeIn().delay(2000).fadeOut(200, rotateTerm);
}
$(rotateTerm); //start it on document.ready
