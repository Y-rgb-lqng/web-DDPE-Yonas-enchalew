
function changeDom(){
    document.getElementById("header").innerText="JavaScript DOM";
    document.querySelector("h2").style.color="blue";
    document.querySelector("h2").style.background="bisque";
   // document.querySelector("ul").type="circle";
    //document.getElementById("zero").type="circle";
    
}

function addDom(){
    var addNode = document.createElement("li");
    var addText = document.createTextNode("take certification exam");
    addNode.appendChild(addText);

    var parent1=document.getElementById("zero");
parent1.appendChild(addNode);
/////
var Adnode=document.createElement("p");
var Adtext = document.createTextNode("take certification exam");
Adnode.appendChild(Text);

var parent1=document.getElementById("remove");
parent1.insertBefore(Adnode);
}

function removeDom(){
    var removeel=document.getElementById("header"); 
    var rparent=document.getElementById("page");
    rparent.removeChild(removeel);

    var removeelto=document.getElementById("zero"); 
   
    for (var i = 0; i < removeelto.length; i++) {  
        removeelto[i].style.color="blue";
    }
    

}