window.onload=function()
{
    var btn = this.document.getElementById('btn');
    var item = this.document.getElementById('item');
    var list = this.document.getElementById('list');
    window.del = function(element)
    {
        console.log(element.parentElement);
        //list.removeChild(element.parentElement)
        
        var text = element.parentElement.children[0];
        if(text.style.children[0]=='line-through')
            text
    }
    item.addEventListener("keydown",function(event)
    {
        //event.preventDefault();
        if(event.keyCode === 13)
        {
            document.getElementById('btn').click();
        }
    });
    btn.onclick=function()
    {
        var str = item.value;
        list.innerHTML+= `<li><span>${str}</span><button onclick="del(this)">X</button><br>`;
        item.value="";
    }
}
