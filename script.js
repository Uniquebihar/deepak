function test(){
  //Retrieving data
  var fid = document.getElementById("fname").value;
  var lid = document.getElementById("lname").value;
  var ag = document.getElementById("age").value;
  var eml = document.getElementById("email").value;
  var add = document.getElementById("address").value;
  var stat = document.getElementById("statename").value;
  var pn = document.getElementById("pincode").value;
  var gen = document.getElementById("male").value;
  var gend= document.getElementById("female").value;
  var lang = document.getElementById("hindi").value;
  var la = document.getElementById("english").value;
  var ta = document.getElementById("tamil").value;
  var sub = document.getElementById("submit").value;

  //Storing data
  var fx =localStorage.setItem("fid", fid);
  var lx =localStorage.setItem("lid", lid); 
   var ax =localStorage.setItem("ag", ag);
   var ex=localStorage.setItem("eml", eml);
   var ad =localStorage.setItem("add", add);
   var sx =localStorage.setItem("stat", stat);
   var px =localStorage.setItem("pn", pn); 
    var gx =localStorage.setItem("gen", gen);
    var ge =localStorage.setItem("gend", gend);
    var lt =localStorage.setItem("lang", lang);
    var ls =localStorage.setItem("la", la);
    var tx =localStorage.setItem("ta", ta);
    var sb =localStorage.setItem("sub", sub);

    //Retriving stored data and using it for calculation

    var fx =localStorage.getItem("fid", fid);
    var lx =localStorage.getItem("lid", lid); 
     var ax =localStorage.getItem("ag", ag);
     var ex =localStorage.getItem("eml", eml);
     var ad =localStorage.getItem("add", add);
     var sx =localStorage.getItem("stat", stat);
     var px =localStorage.getItem("pn", pn); 
      var gx =localStorage.getItem("gen", gen);
      var ge =localStorage.getItem("gend", gend);
      var lt =localStorage.getItem("lang", lang);
      var ls =localStorage.getItem("la", la);
      var tx =localStorage.getItem("ta", ta);
      var sb =localStorage.getItem("sub", sub);

      alert (fid , lid , ag , eml , add , stat , pn, gen , gend, lang, la ,ta , sab );

}
