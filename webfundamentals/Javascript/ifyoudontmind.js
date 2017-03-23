// Part One //
function haveTheTime(hour, minute, period){

var x = hour;
var y = minute;
var z = period;

  if(x == 8 && y == 50 && z == "AM"){
    console.log("It's almost 9 in the morning")
  }
  if(x == 7 && y == 15 && z == "PM"){
    console.log("It's just after 7 in the evening")
  }
}

haveTheTime(8, 50, "AM");
haveTheTime(7, 15, "PM");

// Part Two - Challenge //
function haveTheTime2(hour, minute, period){

var x = hour;
var y = minute;
var z = period;

  if(y > 30){
    if (z == "AM"){
      console.log("It's almost " + (x + 1) + " in the morning");
    }
    if (z == "PM"){
      console.log("It's almost " + (x + 1) + " in the evening");
    }
  }
  if (y < 30){
    if (z == "AM"){
      console.log("It's just after " + x + " in the morning");
    }
    if (z == "PM"){
      console.log("It's just after " + x + " in the evening");
    }
  }
}

haveTheTime2(6, 25, "AM");
haveTheTime2(9, 45, "PM");
