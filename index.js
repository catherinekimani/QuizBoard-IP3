function myButton(){
    var total = 5;
    var score = 0;

    // get user input
    var a1 = document.quizBoard.q1.value;
    var a2 = document.quizBoard.q2.value;
    var a3 = document.quizBoard.q3.value;
    var a4 = document.quizBoard.q4.value;
    var a5 = document.quizBoard.q5.value;

    // validation
    for(i=1;i<=total;i++){
        if(eval('a'+i) == null|| eval('a'+i) == ''){
            alert("you missed a question"+i);
            return false;
    }
} 
// set correct answers
var answers = ['a','b','a','c','a'];

// check answers
for(i=1;i<=total;i++){
    if(eval('a'+i) == answers[i-1]){
        score ++;
    }
}
// display results
var results = document.getElementById('results');
results.innerHTML= '<h3> You scored <span>' +score+'</span> out of <span>'+total+'</span></h3>';
alert ("You scored" +score+' out of'+total);

return false;

}  
    
   
    




