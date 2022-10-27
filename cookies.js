const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
const avisoCookies = document.getElementById('aviso-cookies');
const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');
const botonRechazarCookies = document.getElementById('btn-configurar-cookies');



dataLayer = [];

if(!localStorage.getItem('cookies-aceptadas')){
	avisoCookies.classList.add('activo');
	fondoAvisoCookies.classList.add('activo');
} else {
	dataLayer.push({'event': 'cookies-aceptadas'});
}

botonAceptarCookies.addEventListener('click', () => {
	avisoCookies.classList.remove('activo');
	fondoAvisoCookies.classList.remove('activo');

	localStorage.setItem('cookies-aceptadas', true);

	dataLayer.push({'event': 'cookies-aceptadas'});
});

botonRechazarCookies.addEventListener('click',borrarCookie);


function borrarCookie() {

	var ca = document.cookie.split(';');
  
	for(var i=0;i < ca.length;i++) {
  
	  var c = ca[i];
	  while (c.charAt(0)==' ') c = c.substring(1,c.length);
	  var nombreCookie=c.substring(0,c.indexOf("="));
	  document.cookie= nombreCookie +"=" + ";"+"max-age=0";
	  avisoCookies.classList.remove('activo');
	  fondoAvisoCookies.classList.remove('activo');
	  localStorage.setItem('cookies-rechazadas', true);

	  dataLayer.push({'event': 'cookies-rechazadas'});

  
	}
  
	return null;
  
  }
  
