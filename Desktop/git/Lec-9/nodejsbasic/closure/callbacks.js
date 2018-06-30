function dosomething(arg1, done)
{
    console.log("Doing " + arg1);
    done(function(doLater){
        console.log("It is really done");
        doLater()
    })
}
dosomething("abcd", function(afterdone)
{
    console.log("It is done");
    afterdone(function(){
        console.log("Doing this later")
    })
}
)
//callback hell