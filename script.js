$("button").click(function(){
    var name=$("input").val();
    if(name==="17"){
        $("h1").append("You Have Guess The Secret Number");
    }
        else{
            $("h2").append("INCORRECT, TRY AGAIN");
        }
    });
