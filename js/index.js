	var $butonis = $('#mostraris'),
		$form = $('#formulario'),
		$form1 = $('#formulario1'),
		$user = $('#user'),
		$pass = $('#pass'),
		$ti = $('#i_titulo'),
		$fr = $('#i_frase'),
		$li = $('#i_link'),
		$list = $('#id_contenedor'),
		$art = $('.articulo').first(),
		$maside = $('#m_aside');
		$('#target').hide();
		

	function  fIsesion(){
		$form.slideToggle();
		$list.slideToggle();
		$maside.slideToggle();		
		return false;
	}

	function faddpost(){
		$form1.slideToggle();
		$list.slideToggle();
		$maside.slideToggle();
		return false;
	}

	function bienvenida(){
		var user=$user.val(),
			pass=$pass.val();
			alert('Bienvenido\nTu usuario es: '+user+'\nTu Contraseña es: '+pass);
	}

	function addPost(){
		var titulo=$ti.val(),
			frase=$fr.val(),
			link=$li.val(),
			$clon=$art.clone();
			alert('Se Agregara el siguiente post\n'+titulo+'\n'+frase+'\n'+link);
			$clon.find('.titulo a').text(titulo);
			$clon.find('.frase p').text(frase);
			$clon.hide();
			$list.prepend($clon);
			faddpost();
			$clon.fadeIn();
			$clon.slideDown();
			$ti.val('');
			$fr.val('');
			$li.val('');
			return false
	}
	$(document).ready(function(){
		$(".mostrar").on( "click", function() {
			$('#target').show(); //muestro mediante id
			$('.target').show(); //muestro mediante clase
		 });
		$("#ocultar").on( "click", function() {
			$('#target').hide(); //oculto mediante id
			$('.target').hide(); //muestro mediante clase
		});
	});
	

$('#isesion a').click(fIsesion);
$('#addpost a').click(faddpost);
$('#formulario').on('submit', bienvenida);
$('#formulario1').on('submit', addPost);