var today = moment();

var dayWeek = today.format("dddd, MMM Do");
$("#currentDay").text(dayWeek);



//////i understand nothingggggg. imma go cry

// var currentHour = Date.now().getHours();


// $('.colorcode').each(function() {

//     var val = parseInt($(this).prop('id'));
//     if(val > currentHour && val < currentHour+6){
//         $(this).css('background-color','Blue');
//     }else if(val < currentHour && val > currentHour-6){
//         $(this).css('background-color','Red');
//     }else if(val === currentHour){
//         $(this).css('background-color','Green');
//     }else{
//         $(this).css('background-color','White');
//     }
// });

//it SUPPOSED to make the blocks change color with time but doesnt work. idk
const colorcode = document.getElementsByClassName("color");
let currentHour = parseInt(moment().format('H'));

Array.from(colorcode).forEach(colorcode => {
  let
    colorcodeIdString = colorcode.id,
    colorcodeHour;
  if (colorcodeIdString) {
    colorcodeHour = parseInt(colorcodeIdString);
  }
  if (colorcodeHour) {
    if (currentHour === colorcodeHour) {
      setColor(green);
    } else if ((currentHour < colorcodeHour) && (currentHour > colorcodeHour - 6)) {
      setColor(color, "blue");
    } else if ((currentHour > colorcodeHour) && (currentHour < colorcodeHour + 6)) {
      setColor(color, "red");
    } else {
      setColor(color, "white");
    }
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color};


var saveBT = document.querySelector(".save_btn");
var editCont = document.querySelector(".edit_cont");  
var saveTXT = localStorage.getItem("saveTXT");


  saveBT.addEventListener("click", function() {
    localStorage.setItem("saveTXT", saveTXT);
  });