function inner()
{
    return "Name";
}
function outer(arg)
{
    function greater()
    {
        console.log("Greet"+arg());
    }
    return greater
}
let greet = outer(inner);
greet()
var a = 5
var obj = {a: 16}
console.log(this.a);
