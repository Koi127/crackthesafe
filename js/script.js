// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var one = Math.floor(Math.random()*10);
var two = Math.floor(Math.random()*10);
var three = Math.floor(Math.random()*10);
var four = Math.floor(Math.random()*10);
var str =[one, two, three, four];

$("#verify").click(function(){
    var num_one=$("#number1").val();
    var num_two=$("#number2").val();
    var num_three=$("#number3").val();
    var num_four=$("#number4").val();
    var your_ans =[num_one, num_two, num_three, num_four];
    $("#userChoice").text(your_ans);
    for(var i = 0; i<str.length()-1; i++){
        if(str[i] === your_ans[i]){
            
        }
        
    }
});


// DOCUMENT READY FUNCTION BELOW

