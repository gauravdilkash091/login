$(document).ready(function(){
	var count=0;
	$('#form-2').hide(0);
	var h=$('#form-2').css('height');
	$('#form-1 button').click(function(){
		event.preventDefault();
		$('#form-2').css('height',h);
		$('#error').html('');
		var inpgrade=document.getElementsByClassName('choice');
		var inpcredit=document.getElementsByClassName('credit');
		for(var i=0;i<15;i++){
			inpgrade[i].style.display = 'block';
			inpcredit[i].style.display ='block';
		}
		$('#form-2').hide(0);
		var elem=$('#nsub').val();
		count=elem;
		if(elem<5 || elem>15 || (elem*10)%10!=0){
			$('#error').html('number of courses should between 5 and 15');
		}
		else{
			$('#form-2').show();
			for(var i=14;i>=elem;i--)
			{
				inpgrade[i].style.display = 'none';
				inpcredit[i].style.display ='none';
			}
			var btnheight=(15-elem)*15;
			$('#form-2 button').css({
				'bottom':btnheight+'px'
			});
			$('#form-2').css('height','-='+(15-elem)*54+'px');
		}
	});

	$('#form-2 button').click(function(){
		event.preventDefault();
		var flag=true;
		var grades=['A','A-','B','B-','C','C-','D','D-','E','F'];
		var grade_val=[10,9,8,7,6,5,4,3,2,1]
		var inpgrades=document.getElementsByClassName('choice');
		var inpcredits=document.getElementsByClassName('credit');
		for(var i=0;i<count;i++)
		{
			if(inpcredits[i].value<0.5 || (inpcredits[i].value*10)%5!=0 || inpcredits[i].value=='' || inpcredits[i].value>6 )
			{
				document.getElementById('showdata').innerHTML =`<b>'please enter valid details!'</b>`
				flag=false;
				break;
			}
			for(var j=0;j<grades.length;j++)
			{
				if(inpgrades[i].value.toUpperCase()==grades[j].toUpperCase())
				{
					flag=true;
					break;
				}
				else{
					flag=false;
				}
			}
			if(flag==false){
				document.getElementById('showdata').innerHTML =`<b>'please enter valid details!'</b>`
				break;
			}
		}
		if(flag!=false){
			var sumofcredits=0;
			var weightage=0;
			for(var i=0;i<count;i++){
				var temp=grades.indexOf(inpgrades[i].value.toUpperCase());
				weightage+=inpcredits[i].value*grade_val[temp];
				sumofcredits+=Number(inpcredits[i].value);
			}
			var totalgrades=(weightage/sumofcredits);
			// alert(totalgrades.toPrecision(3));
			var per=totalgrades*9.5;
				if(totalgrades<=10 && totalgrades>=8.5)
		{
			division="First with Distinction";
		}else if(totalgrades<=8.49 && totalgrades>=7.5)
		{
			division="First";
		}else if(totalgrades<=7.49 && totalgrades>=6)
		{
			division="Second";
		}else if(totalgrades<=6.49 && totalgrades>=4)
		{
			division="Third";
		}else{
			division="Last";
		}
		document.getElementById('showdata').innerHTML =`<strong>Your SGPA is ${totalgrades.toPrecision(3)} and your Percentage is
		 ${per.toPrecision(3)}%.<br>Your Division is ${division}.</strong>`
		}
	});
});