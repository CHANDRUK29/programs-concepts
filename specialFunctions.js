// Format Price

const price = 1999;
const formatted = new Intl.NumberFormat('en-US',{
    style:'currency',
    currency:'USD'
}).format(price);

console.log(formatted)  //$1,999.00

//Format compact Number

const views = 1500;
const compact = new Intl.NumberFormat('en-US',{
    notation:'compact'
}).format(views);

console.log(compact) //1.5k

