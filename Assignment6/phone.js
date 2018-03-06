$(document).ready(function() { // do this when the document is loaded
	$("#Dialer").show(); // show the element with ID "element"
	$("#Contact").hide(); // hide the element with ID "otherElement"
  $("#addContact").hide();
	$("#Gesture").hide();
		$("#btnnewtab1").hide();

});

$("#btnDialer").click(function() { // when "button_id" is clicked
	$("#Dialer").show(); // show element
  $("#Contact").hide();
  $("#addContact").hide();
	$("#Gesture").hide();
		$("#btnnewtab1").hide();

});

$("#btnContact").click(function() { // when "button_id" is clicked
	$("#Contact").show(); // show element
  $("#Dialer").hide();
  $("#addContact").hide();
	$("#Gesture").hide();
		$("#btnnewtab1").hide();


});

$("#btnAddContact").click(function() { // when "button_id" is clicked
	$("#addContact").show(); // show element
  $("#Contact").hide();
  $("#Dialer").hide();
	$("#Gesture").hide();
	$("#btnnewtab1").hide();

});


$("#btnnewtab").click(function() { // when "button_id" is clicked
	$("#addContact").hide(); // show element
  $("#Contact").hide();
  $("#Dialer").hide();
	$("#Gesture").hide();
	$("#btnnewtab1").show();

});

$("#btn1").click(function(){
			 $("#name").val($("#name").val()+"1");
	 });
	 $("#btn2").click(function(){
	 			 $("#name").val($("#name").val()+"2");
	 	 });

$("#btn3").click(function(){
			 $("#name").val($("#name").val()+"3");
	 });
$("#btn4").click(function(){
	 			 $("#name").val($("#name").val()+"4");
	 	 });
$("#btn5").click(function(){
		 			 $("#name").val($("#name").val()+"5");
		 	 });
$("#btn6").click(function(){
			 			 $("#name").val($("#name").val()+"6");
			 	 });
$("#btn7").click(function(){
				 			 $("#name").val($("#name").val()+"7");
				 	 });

 $("#btn8").click(function(){
					 		 $("#name").val($("#name").val()+"8");
					 				 	 });
	 $("#btn9").click(function(){
						$("#name").val($("#name").val()+"9");

					});

	$("#btn0").click(function(){
				 					$("#name").val($("#name").val()+"0");

				 				});

$("#btnn").click(function(){
												$("#name").val("#");

											});
$("#btnCC").click(function(){
				$("#name").reset();

});


$("#btnGesture").click(function() {
	$("#Dialer").hide();
	$("#addContact").hide();
	$("#Contact").hide();
	$("#Gesture").show();

})

var mouseX=0;
var mouseY=0;

$("#Gesture_area").mousedown(function(e){

	$("#Gesture_output").val("Mouse Down");
	mouseX=e.pageX;
	mouseY=e.pageY;

});

$("#Gesture_area").mouseup(function(e){

			var upX=0;
			var upY=0;
			upX = e.pageX;
			upY = e.pageY;
			if(upX<mouseX){
				$("#Gesture_output").val("Swipe left");
			}
			else if (upX>mouseX) {
				$("#Gesture_output").val("Swipe right");
			}
			else if (upX==mouseX) {
				$("#Gesture_output").val("Mouse up");
			}

});
