/*console.log("Testing 1 !!!");
console.log("Testing 2 !!!");
console.log("Testing 3 !!!");
console.log("Testing 4 !!!");
console.log("Testing 5 !!!");
console.log("Testing 6 !!!");
console.log("Testing 7 !!!");
console.log("Testing 8 !!!");
console.log("Testing 9 !!!");
console.log("Testing 10 !!!");
*/
/*
for (let i=5; i<=100; i=i+5)
{
	console.log(`Testing ${i} !!!`);
}
*/
/*
const joansArray=[
	firstName: 'Jonas',
	lastName: 'Peter',
	age: 46,
	job : 'Teacher'
	friends : ['Michel','Siva','Ram'],
	true,
	];
for( let i=0; i<joansArray.length; i++)
{
	console.log(`Joans object ${joansArray[i]} , typeof ${typeof joansArray[i]}`);
	// , typeof ${typeof joansArray[i]}`);
}
*/
/*
const joansArray=[
	'Jonas',
	'Peter',
	46,
	'Teacher',
	['Michel','Siva','Ram'],
	true,
	];
const types=[];	
for( let i=0; i<joansArray.length; i++)
{
	console.log(`Joans object ${joansArray[i]}`) ;
	//console.log(`Joans object ${joansArray[i]}`);
	//Filling types Array
	//types[i]=typeof joansArray[i];
	types.push(typeof joansArray[i]);
}
console.log(types);
*/
/*
const years=[1991,2007,1969,2020];
const ages=[];
for (i=0; i<years.length; i++){
	ages.push(2026-years[i]);
}
console.log(ages);
*/
/*
const joansArray=[
	'Jonas',
	'Peter',
	46,
	'Teacher',
	['Michel','Siva','Ram'],
	true,
	];
// continue and break
console.log('------ONLY STRINGS------');
for(let i= 0; i<joansArray.length; i++) 
{
	//const cond=typeof joansArray[i] !=='string';
//	console.log(cond);
	if (typeof joansArray[i] ==='string') ;
	{
	//console.log(cond);	
	console.log("variable type is string - typeof joansArray[i] ===string")
	console.log(joansArray[i], typeof joansArray[i]);
	}
	if (typeof joansArray[i] !=='string') ;
	{
	//console.log(cond);	
	console.log("variable type is not string typeof -joansArray[i] !==string")
	console.log(joansArray[i], typeof joansArray[i]);
	}
	if (typeof joansArray[i] !=='string') continue ;
	{
	//console.log(cond);	
	console.log("variable type is not strin with contine -typeof joansArray[i] !==string")
	console.log(joansArray[i], typeof joansArray[i]);
	}
	if (typeof joansArray[i] ==='string') continue ;
	{
	//console.log(cond);	
	console.log("variable type is string with contine- typeof joansArray[i] ===string")
	console.log(joansArray[i], typeof joansArray[i]);
	}	
	if (typeof joansArray[i] !=='string') break ;
	{
	//console.log(cond);	
	console.log("variable type is not string with break - typeof joansArray[i] !==string")
	console.log(joansArray[i], typeof joansArray[i]);
	}
	if (typeof joansArray[i] ==='string') break ;
	{
	//console.log(cond);	
	console.log("variable type is string with break typeof joansArray[i] ===string")
	console.log(joansArray[i], typeof joansArray[i]);
	}
} 
*/
// For loop
/*
const joansArray=[
	'Jonas',
	'Peter',
	46,
	'Teacher',
	['Michel','Siva','Ram'],
	true,
	];
	
	for(let i=joansArray.length-1; i>=0; i--)
	{
		console.log(i,joansArray[i]);
	}

for (let exc=1; exc<6; exc++)
{
	console.log(`-------------Starting Excercise ${exc}`)
	for (let rep=1; rep<6;rep++)
	{
		console.log(`Excercise ${exc} The repitation is ${rep}`);
	}
}	

*/
//------While loop
/*
let rep=1;
while(rep<6)
{
	console.log(`The replitation is ${rep}`);
	rep++;
}
*/
/*
let dice=Math.trunc(Math.random()*6)+1;
while(dice !==6)
{
console.log(`you rolled a ${dice});
//dice=Math.trunc(Math.random()*6)+1;

}
*/
//Assignment
/*
const bill=[22,295,176,440,37,105,10,1100,86,52];
const tip=[];
const totals=[];
for (let i=0; i<=10;i++)
	{ 	
		if(bill[i]>50 && bill[i]<300)
		{
			const tip[i]=bill[i] *(15/100);
		}
		else if(bill[i]>400)
		{
			const tip[i]=bill[i] *(20/100);
		}
console.log(`Amount ${bill[i]} Tip is ${tip[i]}`);			
	}
	*/
	/*
const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tip = [];
const totals = [];

for (let i = 0; i < bill.length; i++) {

  if (bill[i] >= 50 && bill[i] <= 300) {
    tip[i] = bill[i] * 0.15;
  } else {
    tip[i] = bill[i] * 0.20;
  }

  totals[i] = bill[i] + tip[i];

  console.log(`Amount ${bill[i]} | Tip ${tip[i]} | Total ${totals[i]}`);
}			*/
/*
const calcTip= function(bill){
	return bill>=50&& bill<300 ? bill*(15/100):bill*(20/100);
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips=[];
const totals=[];
for (let i=0;i<bills.length;i++)
{
	const tip=calcTip(bills[i]);
	tips.push(tip);
	totals.push(tip+bills[i]);
}
console.log(bills,tips,totals);


const calcAverage= function (arr){
	let sum=0;
	for (let i=0;i<arr.length;i++){
		sum=sum+arr[i];
	}
	return sum;
	
}
console.log(calcAverage([10,20,30]));


*/

'use strict';
/*const calcAge=birthYear=>birthYear-1981;
const age=calcAge(2026);
console.log(`My age is ${age}`);
*/
// we need a function that reverse whatever we pass into it.
/*
function reverse(input){
return input.split('').reverse().join('');
}
console.log(reverse("god"));
// Function Declaration
function reverse(inputValue){
	return inputValue.split('').reverse().join('');
}
console.log("dog ho");
*/
// Function Expression
/*
const  reverseExpr1=function (inputValueExp1){
	return inputValueExp1.split('').reverse().join('');
}
console.log(reverseExpr1("Function Expression"));
// Arrow function;
const reverseArrow=inputValue1=>inputValue1.split('').reverse().join('');
console.log(reverseArrow("ArrowFunction"));
*/
/*
//Arrow function
const birthYear=[1990,1991,1992,1993,1994,1995];
const reverseArrays=arr=>arr.slice().reverse();
console.log(reverseArrays(birthYear));
//function Expression
const birthYearEx=[1990,1991,1992,1993,1994,1995];
const reverseExp=function(birthYearEx){
	return birthYearEx.slice().reverse();
}
console.log("Expresssion"+reverseExp(birthYear));
//function Declaration
function  reverseNor(birthYearEx){
	return birthYearEx.slice().reverse();
}
console.log("Normal function Declaration :"+reverseNor(birthYear));

const numbervalue=123456789;
function numberReserve(numbervalue){
	//return numbervalue.split('').reverse().join();
	return numbervalue.toString().split('').reverse().join('');
}
console.log("Normal function Declaration for Number :"+numberReserve(numbervalue));
*/
//const birthYear=[1990,1991,1992,1993,1994,1995];
//const numbervalue=123456789;
/*
function reverseGeneral(inputValue){
	//if(typeof inputValue!=="string" && Array.isArray(inputValue) && typeof !==numer){
		//return "Invalid input";}
		
	if(typeof inputValue==='string')
	{
		return "String " + inputValue.split('').reverse().join('');
	}
	else if(typeof inputValue==='number')
	{
		return "Number " + inputValue.toString().split('').reverse().join('');
	}
		else if(Array.isArray(inputValue))
	{
		return "Array "+ inputValue.slice().reverse();
	}
	else{
		return "Invalid input";
	}
}

console.log("type of input: " + reverseGeneral([100, 110, 120, 130, 140]));
//console.log("type of input: " + reverseGeneral([100, 110, 120, 130, 140]));
*/

/*
const temperatues=[3,-2,-6,-1,'error',9,13,17,15,14,9,5];
// what is the temperatues amplitude? difference between max temperatues and min temperatues
//
function calcAmplitude(temperatues){
	let max=temperatues[0];
	let min=temperatues[0];
	if(Array.isArray(temperatues)){
		for(let i=0; i<temperatues.length;i++)
		{
			if(typeof temperatues[i]==='number')
			{
				if(temperatues[i]>max){
					max=temperatues[i];
				}
				if(temperatues[i]<min){
					min=temperatues[i];
				}	
			}
		}
	}
	const amplitude=max-min;
	return `max is ${max} min is ${min} and amplitude is ${amplitude}`;
}

console.log(calcAmplitude(temperatues));

*/
//const array1=[10,20,30,40,50];
//const array2=[60,70,80,"error",90,100];
//const arrayTotal=array1.concat(array2);
//console.log(arrayTotal);
// passing two Array
/*
function calcAmplitudeNew(temp1, temp2){
	const temps=temp1.concat(temp2);
	let max=temps[0];
	let min=temps[0];
	for(let i=0; i<temps.length;i++)
	{
		if(typeof temps[i] !=='number') continue;
		if(temps[i]>max) max=temps[i];
		if(temps[i]<min) min=temps[i];
	}
	//console.log(max,min);
	//console.warn(max,min);
	//console.error(max,min);
	const sum=max - min;
	return `Max is ${max} Min is ${min} and Sum is ${sum}`;
}
console.log(calcAmplitudeNew([10,20,30,40,50],[60,70,80,"error",90,100]));
*/
/*
function measureKelvin(){
	debugger;
	const measurement ={
		type: 'temperature',
		unit: 'Celsius',
		value: Number(prompt('Enter Degree Celsius!'))
	}
	console.log(measurement);
	console.log(typeof measurement);
	console.log(typeof measurement.value);
	console.table(measurement);
	//console.log("inside function "+ measurement.value);
	//console.warn("inside function "+ measurement.value);
	//console.error("inside function "+ measurement.value);
	const kelvin=measurement.value+273;
	return kelvin
}
console.log(measureKelvin());

*/
/*
function printForecast(arr){
	let max=arr[0];
	//let min=temp[0];
	debugger;
	for(let i=0; i<arr.length; i++)
	{
		if(arr[i]>max) max=arr[i]		
	}
	return `The maximum temperatues is ${max}*C`
}
console.log(printForecast([17,21,23]));
console.log(printForecast([12,5,-5,4]));
*/
/*
const data1=[17,21,23];
const data2=[12,5,-5,0,4];
console.log(`..${data1[0]}oC....${data1[1]}oC...${data1[2]}oC`);
function printForecast1(arr){
	let str='';
	for(let i=0; i<arr.length; i++)
	{
		str+=`${arr[i]}oC in ${i+1} days...`;
	}
	console.log('...'+str);
}
printForecast1(data1);
/*
function printForecast(arr){
	let max=arr[0];
	//let min=temp[0];
	debugger;
	for(let i=0; i<arr.length; i++)
	{
		//if(arr[i]>max) max=arr[i]		
	}
	return `The maximum temperatues is ${max}*C`
}
console.log(printForecast([17,21,23]));
console.log(printForecast([12,5,-5,4]));



*/
/*

Building  a time tracking application for freelancers. At some point in building this app we need a function that receives daily work hours for a certain week and returns.
1. Total hrs worked
2. Average daily hrs
3. The day with the most hrs worked
4. no. of days worked
5. whether the week was full-time worked 35 hrs or more
*/
const receivesDaily= function(dailyHrs){
	let totalHrs=0;	
	let max=0;
	let min=0;
	let mostWorkedhrs;
	let noOfDaysWorked=0;
	let fullTime;
	for(let i=0; i<dailyHrs.length ; i++)
	{
		// total hrs worked
		totalHrs=totalHrs+dailyHrs[i];
		if(max<dailyHrs[i]) {
			mostWorkedhrs=i+1;
			max=dailyHrs[i];
		//if(max>dailyHrs[i]) max=dailyHrs[i];	
		}
		if(dailyHrs[i]!==0){
			noOfDaysWorked=i+1;			
		}
		if(max>=35)
		{
			fullTime='worked 35 and more hrs';
		}
		else{
			fullTime='worked less than 35hrs';
		}
	}
	const averageHrs=totalHrs/dailyHrs.length;
	return `As per one work record, John worked ${totalHrs} total hrs and his average hrs was ${averageHrs} , the ${ mostWorkedhrs} th day he worked max hrs ${max}hrs and finally he worked ${fullTime}`	
}
console.log("One week John working hrs: 1st day 7.5 2nd day 8 3rd day 6.5 4th day 0 5th day 8.5, 6th day 4, 7th day 0");
console.log(receivesDaily([7.5,8,6.5,0,8.5,4,0]));

//README,md file contains
/*
# Time Tracking Application

This is a simple JavaScript application that analyzes weekly working hours for freelancers.

## Features

- Calculate total hours worked
- Calculate average daily hours
- Find the day with most hours worked
- Count number of working days
- Determine if week is full-time (35+ hours)

## How to Run

1. Clone the repository
2. Open in VS Code
3. Run the JavaScript file

## Author

Karuppannan Ramasamy
*/

/* code taken from ChatGPT 
const receivesDaily = function (dailyHrs) {
  let totalHrs = 0;
  let max = 0;
  let mostWorkedhrs;
  let noOfDaysWorked = 0;
  let fullTime;

  for (let i = 0; i < dailyHrs.length; i++) {
    totalHrs += dailyHrs[i];

    if (dailyHrs[i] > max) {
      mostWorkedhrs = i + 1;
      max = dailyHrs[i];
    }

    if (dailyHrs[i] !== 0) {
      noOfDaysWorked++;
    }
  }

  const averageHrs = (totalHrs / dailyHrs.length).toFixed(2);

  if (totalHrs >= 35) {
    fullTime = 'worked 35 and more hrs';
  } else {
    fullTime = 'worked less than 35 hrs';
  }

  return `As per one work record, John worked ${totalHrs} total hrs and his average hrs was ${averageHrs}, the ${mostWorkedhrs}th day he worked max hrs ${max} hrs and finally he ${fullTime}. Total days worked: ${noOfDaysWorked}`;
};

console.log(receivesDaily([7.5, 8, 6.5, 0, 8.5, 4, 0]));
*/

console.log("Testting document "+ document.querySelector("selector"));