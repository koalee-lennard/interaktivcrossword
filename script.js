//const passText = document.getElementById("pass-text");

function validateAnswer(){
   //GETS VALUE/CONTENT OF ACROSS 2 - Heart
   var x1 = document.getElementById("item2-8").value;
   var x2 = document.getElementById("item2-9").value;
   var x3 = document.getElementById("item2-10").value;
   var x4 = document.getElementById("item2-11").value;
   var x5 = document.getElementById("item2-12").value;

   //GETS VALUE/CONTENT OF ACROSS 3 - Extra Ordinarily Well
   var x6 = document.getElementById("item4-1").value;
   var x7 = document.getElementById("item4-2").value;
   var x8 = document.getElementById("item4-3").value;
   var x9 = document.getElementById("item4-4").value;
   var x10 = document.getElementById("item4-5").value;
   var x11 = document.getElementById("item4-6").value;
   var x12 = document.getElementById("item4-7").value;
   var x13 = document.getElementById("item4-8").value;
   var x14 = document.getElementById("item4-9").value;
   var x15 = document.getElementById("item4-10").value;
   var x16 = document.getElementById("item4-11").value;
   var x17 = document.getElementById("item4-12").value;
   var x18 = document.getElementById("item4-13").value;
   var x19 = document.getElementById("item4-14").value;
   var x20 = document.getElementById("item4-15").value;
   var x21 = document.getElementById("item4-16").value;
   var x22 = document.getElementById("item4-17").value;
   var x23 = document.getElementById("item4-18").value;
   var x24 = document.getElementById("item4-19").value;

   //GETS VALUE/CONTENT OF ACROSS 6 - Innovative
   var x25 = document.getElementById("item7-3").value;
   var x26 = document.getElementById("item7-4").value;
   var x27 = document.getElementById("item7-5").value;
   var x28 = document.getElementById("item7-6").value;
   var x29 = document.getElementById("item7-7").value;
   var x30 = document.getElementById("item7-8").value;
   var x31 = document.getElementById("item7-9").value;
   var x32 = document.getElementById("item7-10").value;
   var x33 = document.getElementById("item7-11").value;
   var x34 = document.getElementById("item7-12").value;

   //GETS VALUE/CONTENT OF ACROSS 7 - Values
   var x35 = document.getElementById("item9-1").value;
   var x36 = document.getElementById("item9-2").value;
   var x37 = document.getElementById("item9-3").value;
   var x38 = document.getElementById("item9-4").value;
   var x39 = document.getElementById("item9-5").value;
   var x40 = document.getElementById("item9-6").value;

   //GETS VALUE/CONTENT OF ACROSS 8 - Romancon
   var x41 = document.getElementById("item11-5").value;
   var x42 = document.getElementById("item11-6").value;
   var x43 = document.getElementById("item11-7").value;
   var x44 = document.getElementById("item11-8").value;
   var x45 = document.getElementById("item11-9").value;
   var x46 = document.getElementById("item11-10").value;
   var x47 = document.getElementById("item11-11").value;
   var x48 = document.getElementById("item11-12").value;
   
   //GETS VALUE/CONTENT OF DOWN 1 - Creative
   var x49 = document.getElementById("item1-11").value;
   var x50 = document.getElementById("item3-11").value;
   var x51 = document.getElementById("item5-11").value;
   var x52 = document.getElementById("item6-11").value;
   var x53 = document.getElementById("item8-11").value;

   //GETS VALUE/CONTENT OF DOWN 4 - Service
   var x54 = document.getElementById("item6-1").value;
   var x55 = document.getElementById("item7-1").value;
   var x56 = document.getElementById("item8-1").value;
   var x57 = document.getElementById("item10-1").value;
   var x58 = document.getElementById("item11-1").value;
   var x59 = document.getElementById("item12-1").value;

   //GETS VALUE/CONTENT OF DOWN 5 - Integrity
   var x60 = document.getElementById("item6-5").value;
   var x61 = document.getElementById("item8-5").value;
   var x62 = document.getElementById("item10-5").value;
   var x63 = document.getElementById("item12-5").value;
   var x64 = document.getElementById("item13-5").value;
   var x65 = document.getElementById("item14-5").value;


   //TEST TO CHECK IF CHECKBOX IS CLICKED, YOU MAY REMOVE THIS AFTER
   //Added a header <h1> in .html
   //var test = document.getElementById("test");
   //test.innerHTML += "clicked! ";
    //document.getElementById("test").innerHTML = "checkbox clicked!";


    //CHECKS IF ANSWERS ARE CORRECT, OUTPUTS CORRECT IF TRUE (in the <h1> element)
    //CHECKS IF ACROSS 2 IS CORRECT
   if ((x1 == "H" || x1 == "h") && (x2 == "E" || x2 == "e") && (x3 == "A" || x3 == "a") && (x4 == "r" || x4 == "R") && (x5 == "T" || x5 == "t") && 
   //CHECKS IF ACROSS 3 IS CORRECT
   (x6 == "E" || x6 == "e") && (x7 == "X" || x7 == "x") && (x8 == "T" || x8 == "t") && (x9 == "R" || x9 == "r") && (x10 == "A" || x10 == "a") && 
   (x11 == "O" || x11 == "o") && (x12 == "R" || x12 == "r") && (x13 == "D" || x13 == "d") && (x14 == "I" || x14 == "i") && (x15 == "N" || x15 == "n") && (x16 == "A" || x16 == "a") && (x17 == "R" || x17 == "r") && (x18 == "I" || x18 == "i") && (x19 == "L" || x19 == "l") && (x20 == "Y" || x20 == "y") && 
   (x21 == "W" || x21 == "w") && (x22 == "E" || x22 == "e") && (x23 == "L" || x23 == "l") && (x24 == "L" || x24 == "l") && 
   //CHECKS IF ACROSS 6 IS CORRECT
   (x25 == "I" || x25 == "i") && (x26 == "N" || x26 == "n") && (x27 == "N" || x27 == "n") && (x28 == "O" || x28 == "o") && (x29 == "V" || x29 == "v") && (x30 == "A" || x30 == "a") && (x31 == "T" || x31 == "t") && (x32 == "I" || x32 == "i") && (x33 == "V" || x33 == "v") && (x34 == "E" || x34 == "e") &&
   //CHECKS IF ACROSS 7 IS CORRECT
   (x35 == "V" || x35 == "v") && (x36 == "A" || x36 == "a") && (x37 == "L" || x37 == "l") && (x38 == "U" || x38 == "u") && (x39 == "E" || x39 == "e") && (x40 == "S" || x40 == "s") &&
   //CHECKS IF ACROSS 8 IS CORRECT
   (x41 == "R" || x41 == "r") && (x42 == "O" || x42 == "o") && (x43 == "M" || x43 == "m") && (x44 == "A" || x44 == "a") && (x45 == "N" || x45 == "n") && (x46 == "C" || x46 == "c") && (x47 == "O" || x47 == "o") && (x48 == "N" || x48 == "n") &&
   //CHECKS IF DOWN 1 IS CORRECT
   (x49 == "C" || x49 == "c") && (x50 == "E" || x50 == "e") && (x51 == "T" || x51 == "t") && (x52 == "I" || x52 == "i") && (x53 == "E" || x53 == "e") &&
   //CHECKS IF DOWN 4 IS CORRECT
   (x54 == "S" || x54 == "s") && (x55 == "E" || x55 == "e") && (x56 == "R" || x56 == "r") && (x57 == "I" || x57 == "i") && (x58 == "C" || x58 == "c") && (x59 == "E" || x59 == "e") &&
   //CHECKS IF DOWN 5 IS CORRECT
   (x60 == "I" || x60 == "i") && (x61 == "T" || x61 == "t") && (x62 == "G" || x62 == "g") && (x63 == "I" || x63 == "i") && (x64 == "T" || x64 == "t") && (x65 == "Y" || x65 == "y")
   )
   {
       //document.getElementById("output").innerHTML = "CORRECT!";
       alert("CONGRATULATIONS! You have passed this test! The SECRET CODE is 'EMERGENCY'");
   } else {
       //document.getElementById("output").innerHTML ="WRONG!";
       alert("FAIL! Please Try Again!");
   }

}