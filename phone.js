$(document).ready(function() { // do this when the document is loaded
	$("#Dialer").show(); // show the element with ID "element"
	$("#Contact").hide(); // hide the element with ID "otherElement"
  $("#addContact").hide();
});

$("#btnDialer").click(function() { // when "button_id" is clicked
	$("#Dialer").show(); // show element
  $("#Contact").hide();
  $("#addContact").hide();
});

$("#btnContact").click(function() { // when "button_id" is clicked
	$("#Contact").show(); // show element
  $("#Dialer").hide();
  $("#addContact").hide();

});

$("#btnAddContact").click(function() { // when "button_id" is clicked
	$("#addContact").show(); // show element
  $("#Contact").hide();
  $("#Dialer").hide();
});
