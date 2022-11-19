//Daniel Philip Lalonde

function todaysDate()
{
     var rightNow =  new Date(), theMonth = 0, todaysDate = "", theMonthName = 0; 
	 theMonth = rightNow.getMonth() + 1;
	 theMonthName = getMonthName(theMonth);
	 todaysDate = theMonthName + ' ' + rightNow.getDate() + ', ' + rightNow.getFullYear();
	 document.getElementById("showDate").innerHTML = todaysDate;	
}
function getMonthName(month)
{
	var mName="";
	switch(month)
	{
		case 1:  mName="January"; break;
		case 2:  mName="February"; break;	
		case 3:  mName="March"; break;
		case 4:  mName="April"; break;
		case 5:  mName="May"; break;
		case 6:  mName="June"; break;
		case 7:  mName="July"; break;
		case 8:  mName="August"; break;	
		case 9:  mName="September"; break;
		case 10: mName="October"; break;	
		case 11: mName="November"; break;	
		case 12: mName="December"; break;				
	}
	return(mName);
}
function tableStyleChanger()
{
	document.getElementById("table").style.color = "#0004ff";
	document.getElementById("table").style.backgroundColor = "#fff200";
	document.getElementById("table").style.borderWidth = ".4em";
	document.getElementById("table").style.borderStyle = "dotted";
	document.getElementById("table").style.borderColor = "#00ff1a";
	document.getElementById("table").style.fontFamily = "serif"	
}
function tableStyleUndo()
{
	document.getElementById("table").style.color = "#199999";
	document.getElementById("table").style.backgroundColor = "#F0F0F0";
	document.getElementById("table").style.borderWidth = ".3em";
	document.getElementById("table").style.borderStyle = "solid";
	document.getElementById("table").style.borderColor = "#fffff0";
	document.getElementById("table").style.fontFamily = "helvetica"	
}