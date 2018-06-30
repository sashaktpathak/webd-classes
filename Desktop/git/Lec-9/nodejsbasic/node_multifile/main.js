if(typeof window === 'undefined')
{
    const lib = require('./lib')
    console.log(lib.add(3,4));
}
else
{
    console.log(add(3,4));
}