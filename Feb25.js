function multpl(a,b){
    return a*b;    
}
console.log(multpl(2,3));
const multi2=(a,b) => a*b;
console.log(multi2(4,5));

let x1=100/0;
console.log(x1);

console.log("**********************");
let name=1;
let age=1;
{
	let height;
	{
		let weight=2;
		console.log(weight)
	}
    //console.log(weight)
}