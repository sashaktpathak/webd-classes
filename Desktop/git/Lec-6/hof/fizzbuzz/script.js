var str="";
window.onload=function()
{
    var num = document.getElementById('num');
    var btn = document.getElementById('btn');
    var list = document.getElementById('list');
    var number = parseInt(num.value,10);    
    btn.onclick = function()
    {
        let start = new Date().getTime();
        for(var i =1 ; i<= number;i++)
        {
        if(i%15==0)
            str+=" <li>  FIZZBUZZ <\li> "
        else if(i%3==0)
            str+=" <li>  FIZZ  <\li> "

        else if(i%5==0)
            str+=" <li>  BUZZ <\li> "
        else
            str+=" <li> " + i + " <\li> "
        }
        list.innerHTML=str;
        let end = new Date().getTime();
        console.log(end-start);
    }
}

function fizzbuzz(NUM)
{
    
}