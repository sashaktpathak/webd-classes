window.onload=function()
    {
            var val = document.getElementById('value');
            var btn = document.getElementById('btn');
            var arr;
            btn.onclick=function()
            {
                console.log("here");
            arr=JSON.parse("[" + val.value + "]");
            console.log(arr);
            //arr.sort(function(a,b)
            //{
            // return a + b
            //}); 
            var arr2 = arr.map(function(v,i,a)
            {
                return v*v;
            });
            var x = arr2.reduce(function(accum,v,i,a)
            {
                return accum + v;
            });
            var sum = x/arr.length;
            console.log(sum);
            var str="";
            str="<li>"+Math.sqrt(sum);
            list.innerHTML+=str;
        }
    }
    // let vals = Math.sqrt(amount.value.split(',').map((v) => Math.pow(+v.trim(),2)).reduce((a,v,i,ar)=> a+(v/ar.length),0))