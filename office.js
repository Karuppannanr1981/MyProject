
function fun(a){
	console.log('test'); //6,5,4,3
	a--; //5 4 3 2
	if(a>2) //t, t , t f
		fun(a); //5 4 3
}
fun(6);