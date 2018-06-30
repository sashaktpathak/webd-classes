console.log("Hello")
window.onload=function()
{
    document.getElementById('mydiv').innerText="SOMETHING"
    var alertbtn = this.document.getElementById('btn');
    alertbtn.onclick=function()
    {
        var name = document.getElementById('name');
        var nameval = name.value;
        alert("hello "+nameval);
    }
    
}
var beta = function()
    {
        console.log("Running Beta");
    }
   let obj1 = {
        item1: 1,
        item2: 'dsfg',
        item3: [23,23,25]
    }