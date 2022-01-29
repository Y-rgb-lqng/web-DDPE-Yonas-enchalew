function changeDOM(){
    document.getElementById("header").innerText="javascript DOM";
    document.querySelector("p").style.color="blue";
    document.querySelector("h2").style.background="red";
    document.querySelector("zero").type="square";
    document.querySelector("ul").type="square";
//document.querySelector("h2").style.color="black";

}
function removeDOM(){
   const removeEL= document.getElementById("header")//.document.removeChild(one);
    const Rparent= document.getElementById("page");
    Rparent.removeChild(removeEL);  

    const removeEL2= document.getElementById("mandatory")//.document.removeChild(one);
    const Rparent2= document.getElementsByClassName("zero");
    for(i=0;i<removeEL2.length;){
        Rparent2.removeChild(removeEL2[i]); 

    }
}
function addDOM(){
   // const removeEL2= document.getElementById("mandatory")//.document.removeChild(one);
    const Rparent2= document.getElementsByClassName("mandatory");
    for(i=0;i<removeEL2.length;i++){
removeEL2[i].style.color="pink";
    }-
}