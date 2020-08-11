var p1=prompt("Player One:Enter Your Name,you will be Blue");
var p1color= 'rgb(86, 151, 255)';

var p2=prompt("Player Two:Enter Your Name,you will be Red");
var p2color= 'rgb(237, 45, 73)';


var game_on=true;
var table = $('table tr');


function changecolor(rowInd,colInd,color)
{
	return table.eq(rowInd).find('td').eq(colInd).find('button').css('background-color',color);
}


function retcolor(rowInd,colInd)
{
	//console.log("row"+rowInd+"col"+colInd);
return table.eq(rowInd).find('td').eq(colInd).find('button').css('background-color');
}


function lastrow(colInd)
{
	var colrep=retcolor(5,colInd);
	//console.log("initaial"+colInd+"colour is"+colrep);
	for(var i=5;i> -1;i--)
	{
		colrep=retcolor(i,colInd);
		//console.log("colour is "+colrep);
		if(colrep === 'rgb(128, 128, 128)')
		{//console.log("AAAAAAA");
			return i;}
	}
}

function check(one,two,three,four)
{
	return (one===two && one===three && one===four && one!=='rgb(128, 128, 128)'&& one!==undefined)
		
}
 
function hori_check()
{
	for(var i=0;i<6;i++)
	{
		for(var j=0;j<4;j++)
		{
			if(check(retcolor(i,j),retcolor(i,j+1),retcolor(i,j+2),retcolor(i,j+3)))
				return true;	
		}
	}
	return false;
	
}
function ver_check()
{
	for(var i=0;i<7;i++)
	{
		for(var j=0;j<3;j++)
		{
			if(check(retcolor(j,i),retcolor(j+1,i),retcolor(j+2,i),retcolor(j+3,i)))
				return true;	
		}
	}
	return false;
	
}
function diag_check()
{
	for(var i=0;i<7;i++)
	{
		for(var j=0;j<3;j++)
		{
			if(check(retcolor(j,i),retcolor(j+1,i+1),retcolor(j+2,i+2),retcolor(j+3,i+3)))
				return true;	
			else if(check(retcolor(j,i),retcolor(j-1,i+1),retcolor(j-2,i+2),retcolor(j-3,i+3)))
				return true;
		}
	}
	return false;
	
}
//end
function gameEnd(wp) {
  for (var col = 0; col < 7; col++) {
    for (var row = 0; row < 7; row++) {
      $('h3').fadeOut('fast');
      $('h2').fadeOut('fast');
      $('h1').text(wp+" has won! Refresh your browser to play again!").css("fontSize", "50px")
    }
  }
}
//start
curr_pl=1;
curr_name=p1;
curr_color=p1color;
$('h3').text(p1+": it is your turn,pick a coloumn!");

$('.board button').on('click',function(){
	
var colo=$(this).closest('td').index();
	//console.log("column is"+colo);
var bot=lastrow(colo);
	//console.log(bot);
changecolor(bot,colo,curr_color);
if(hori_check()||ver_check()||diag_check())
{
	gameEnd(curr_name);
	
}
else
{
	curr_pl=curr_pl * -1;
	if(curr_pl === 1)
	{
	   curr_name=p1;
       curr_color=p1color;
		$('h3').text(p1+": it is your turn,pick a coloumn!");

	}
	else
	{
		curr_name=p2;
        curr_color=p2color;
		$('h3').text(p2+": it is your turn,pick a coloumn!");

	}
}
})
  


