$(document).ready(function(){
	var sec=document.getElementsByClassName('sign-in')[0];
	var icon=document.getElementsByClassName('inpicon');
	$('#username').focus(function(){
		icon[0].style.color = 'black';
		this.style.boxShadow = '1px 2px 3px 1px grey';
	});
	$('#username').blur(function(){
		icon[0].style.color = 'grey';
		this.style.boxShadow='none';
	});
	$('#pwd').focus(function(){
		icon[1].style.color = 'black';
		this.style.boxShadow = '1px 2px 3px 1px grey';
	});
	$('#pwd').blur(function(){
		icon[1].style.color = 'grey';
		this.style.boxShadow='none';
	});
	$('#customCheck1').prop('indeterminate', true);
	$('#form-2').hide();
	$('#nav-sign-up').click(function(){
		$('#nav-sign-up').addClass('active-2');
		$('#nav-sign-in').removeClass('active-1');
		$('#form-1').hide(1500);
		$('#form-2').show(1500);
	});
	$('#nav-sign-in').click(function(){
		$('#nav-sign-in').addClass('active-1');
		$('#nav-sign-up').removeClass('active-2');
		$('#form-2').hide(1500);
		$('#form-1').show(1500);
	});
	$('#form-2 input').focus(function(){
		this.style.boxShadow = '1px 2px 3px 1px grey';
		$(this).siblings('label').children('.inpicon').css('color','green');
	})
	$('#form-2 input').blur(function(){
		this.style.boxShadow = 'none';
		$(this).siblings('label').children('.inpicon').css('color','grey');
	})
	$('#sgpa_calc').load('sgpa_calculator.html');
});