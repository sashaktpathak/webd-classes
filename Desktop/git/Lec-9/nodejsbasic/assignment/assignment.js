//setTimeout(()=>setInterval(()=>console.log("A"),100),2000)





//var v = setInterval(((()=>(console.log("A"),setTimeout(()=>clearInterval(v),2000)))(),()=>(console.log("A"),setTimeout(()=>clearInterval(v),2000))),100)

//setTimeout((v=setInterval(()=>console.log("A"),100)) => clearInterval(v),  2000)
// var counter=0;
// var v=setInterval(()=>console.log(counter),100); 
// setTimeout(()=>clearInterval(v),2000)

//setTimeout(setInterval(()=>console.log("A"),100),2000)
//var v = setInterval(((v)=>(console.log("A"),setTimeout((v)=>clearInterval(v),2000)))(),100)
//setInterval(()=>setTimeout(()=>console.log("A"),2000),100)
var v = setInterval(((()=>(console.log("A"),setTimeout(()=>clearInterval(v),2000)))(),()=>(console.log("A"),setTimeout(()=>clearInterval(v),2000))),100)
//setTimeout(clearInterval(setInterval(console.log("A"),100)),2000)