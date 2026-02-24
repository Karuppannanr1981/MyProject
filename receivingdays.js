/*Building  a time tracking application for freelancers. At some point in building this app we need a function that receives daily work hours for a certain week and returns.
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
	let i=0
	for(i=0; i<dailyHrs.length ; i++)
	//for (i of dailyHrs) 
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