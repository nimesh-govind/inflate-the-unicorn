  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

var unicorn1 = document.getElementById("unicorn1")
var unicorn2 = document.getElementById("unicorn2")
var unicorn3 = document.getElementById("unicorn3")

var inflationLevel1 = 0
var inflationLevel2 = 0
var inflationLevel3 = 0

unicorn1.onclick = clicked
unicorn2.onclick = clicked
unicorn3.onclick = clicked

//figure out which unicorn is click
//increase inflation level 
//change source of image to new pic

function clicked(event) {
  var unicorn = event.target

   if (unicorn.id == "unicorn1") {

      inflationLevel1++

      if (inflationLevel1 == 4)
          inflationLevel1 = 0

      unicorn.src = "./images/unicorn-" + inflationLevel1 + ".png"
   }

   if (unicorn.id == "unicorn2") {

    inflationLevel2++

    if (inflationLevel2 == 4)
        inflationLevel2 = 0

    unicorn.src = "./images/unicorn-" + inflationLevel2 + ".png"
 }

  if (unicorn.id == "unicorn3") {

    inflationLevel3++

    if (inflationLevel3 == 4)
        inflationLevel3 = 0

    unicorn.src = "./images/unicorn-" + inflationLevel3 + ".png"
  }

} 