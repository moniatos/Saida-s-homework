$(document).ready(function(){
	$("#aranj").mouseover(function(){
		$("#infoaside").html("<h2>Itinerario</h2><p>Durante la ruta guiada pasamos por la Plaza de Parejas, Plaza de la Parada, Jardín del Rey y de la Reina, Jardín del Parterre (jardín francés), Jardín de la Isla, Escalinata de las Estatuas, Fuente de Hércules y la Hidra, Fuente de Apolo, Fuente del Reloj, Niño de la Espina, Jardín de la Florera, Fuente de Diana, Fuente de Venus, Fuente de la Boticaria, Fuente de las Nereidas, Fuente de Céres, Fuente de Hércules y Anteo, Plaza e Iglesia de San Antonio, Casa de Oficios y Caballeros, Casa de Infantes (Carlos III), Mercado, Ayuntamienro y Plaza de Abastos.</p><br><h3>Próxima salida:<br>15 de Agosto a las 05:30</h3>");
		})
	$("#avil").mouseover(function(){
		$("#infoaside").html("<h2>Itinerario</h2><p>Nos en la Oficina de Turismo de Ávila. Paseo por el casco antiguo.</p><p>Seguiremos un tramo de la muralla. Nos dirigimos hacia la necrópolis romana</p><p>Continuaremos por los palacios renacentistas y templos. Durante el recorrido también nos acercaremos hasta el Convento de Santa Teresa.</p><p>Finalizaremos el tour regresando al mismo punto de partida mientras paseamos por el Rastro y la Plaza de Santa Teresa, dos lugares emblemáticos para todos los abulenses.</p><br><h3>Próxima salida:<br>15 de Agosto a las 05:30</h3>");
		})
	$("#esco").mouseover(function(){
		$("#infoaside").html("<h2>Itinerario</h2><p>Visite el Real Monasterio de El Escorial, un impresionante complejo que sirvió como palacio real y centro religioso durante el siglo XVI. Maravíllate ante una grandiosa hazaña arquitectónica que hoy se considera la octava maravilla del mundo.</p><br><h3>Próxima salida:<br>15 de Agosto a las 05:30</h3>");
		})
	$("#riomu").mouseover(function(){
		$("#infoaside").html("<h2>Itinerario</h2><p>La mejor forma de visitar el nacimiento del río Mundo es ir en coche hasta Riópar, situado a algo menos de dos horas de la ciudad de Albacete. Una vez allí, resulta sencillo alcanzar nuestra meta: tan solo hay que seguir las señales hacia Calares del Río Mundo y de la Sima y, tras unos 8 kilómetros de carretera en dirección a Siles, llegaremos a una explanada para aparcar nuestro coche (con un acceso limitado a un máximo de 100 vehículos al mismo tiempo) y continuar a pie hasta el propio nacimiento de la cascada del río Mundo.</p><br><h3>Próxima salida:<br>15 de Agosto a las 05:30</h3>");
		})
	$("#sego").mouseover(function(){
		$("#infoaside").html("<h2>Itinerario</h2><p>Quedaremos en el monumento más simbólico de Segovia: el acueducto. Desde allí comenzaremos nuestra ruta por el centro hisórico de Segovia. Seguiremos el mismo recorrido que en la visita guiada por Segovia y nos adentraremos además en la Catedral de Santa María para explorar el interior de esta joya arquitectónica del siglo XVI. </p><br><h3>Próxima salida:<br>15 de Agosto a las 05:30</h3>");
		})
	$("#tole").mouseover(function(){
		$("#infoaside").html("<h2>Itinerario</h2><p>Además de recorrer el centro histórico de Toledo nos adentraremos en los 3 lugares claves de la ciudad, uno de cada cultura: la Mezquita del Cristo de la Luz (construida en el año 999, durante el esplendor del califato de Córdoba), la Sinagoga de Santa María la Blanca (construida en el año 1180) y la Iglesia de Santo Tomé (en su interior se encuentra el famosísimo cuadro de El Greco, El entierro del Conde de Orgaz). </p><br><h3>Próxima salida:<br>15 de Agosto a las 05:30</h3>");
		})
	$("#boton1").click(function(){
		$("body").toggleClass("colorfon");
	})
	$("#boton2").click(function(){
		$("body").toggleClass("tamalet");
	})
	
	//JS PARA INDEX Y BOTONES
})