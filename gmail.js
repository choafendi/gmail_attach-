window.onload = function() {
  var sendButton = document.getElementById("send");

  sendButton.addEventlistener("click", function() {
    var emaiBbody = document.getElementById("textbox").value;
    if (emaiBbody.include("attach")){
      console.console.log("ATTACH is in the building!");
    }
    console.log("user entered...", emaiBbody);
  });
};
