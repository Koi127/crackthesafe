// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var one = Math.floor(Math.random()*10).toString();
var two = Math.floor(Math.random()*10).toString();
var three = Math.floor(Math.random()*10).toString();
var four = Math.floor(Math.random()*10).toString();
var str =[one, two, three, four];

$("#verify").click(function(){
    var num_one=$("#number1").val();
    var num_two=$("#number2").val();
    var num_three=$("#number3").val();
    var num_four=$("#number4").val();
    var your_ans =[num_one, num_two, num_three, num_four];
    console.log(your_ans);
    console.log(str);
    $("#userChoice").text(your_ans);
    var number = 0;
    var exact = 0;
    var done=false;
    for(var i=0; i<=str.length-1;i++){
        if(str[i] === your_ans[i]){
            exact++;
            if(exact === str.length){
                $("#results").text("You are correct!");
            }
        }
        if(str.includes(your_ans[i])){
            number++;
        }
    }

    $("#results").text("You get " + number + " correct and " + exact +" in exact place");
});


// DOCUMENT READY FUNCTION BELOW

