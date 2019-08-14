$(document).ready(function(){
	
	$("article .contrut").hide();
	$("article h3").click(function(){
		$(this).toggleClass("activo").next().slideToggle();
	});

	$("#grifo").mouseover(function(){
	$("#fichaff").html("<div class='contfich row'><div class='fichinf col-sm-6'><h4>Nombre</h4><p>Grifo</p><h4>Especie</h4><p>Achylae-leo Gigantus</p><h4>Descripción</h4><p>Animal similar al águila del gran tamaño que puede alcanzar los 125m.</p></div><div class='col-sm-6'><img src='imgs/grifo.jpg'></div></div>");
		});
	
	$("#romero").mouseover(function(){
		$("#fichaff").html("<div class='contfich row'><div class='fichinf col-sm-6'><h4>Nombre</h4><p>Rosmarinus offininalis</p><h4>Especie</h4><p>Rosmarinus</p><h4>Descripción</h4><p>Arbusto aromático, leñoso, de hojas perennes, muy ramificado y ocasionalmente achaparrado y que puede llegar a medir 2 metros de altura.</p></div><div class='fichim col-sm-6'><img src='imgs/romer.jpg'></div></div>");
		});
	$("#dragon").mouseover(function(){
		$("#fichaff").html("<div class='contfich row'><div class='fichinf col-sm-6'><h4>Nombre</h4><p>Dragón</p><h4>Especie</h4><p>Draco volans</p><h4>Descripción</h4><p>El dragón volador puede alcanzar una longitud de 19 a 23 m. Se alimenta de mamíferos.</p></div><div class='fichim col-sm-6'><img src='imgs/drac.jpg'></div></div>");
		});
	$("#foglet").mouseover(function(){
		$("#fichaff").html("<div class='contfich row'><div class='fichinf col-sm-6'><h4>Nombre</h4><p>Foglet</p><h4>Especie</h4><p>Galgalidae necrofagus</p><h4>Descripción</h4><p>Tienden a encontrarse principalmente en pantanos, bosques o en las montañas y atraen a sus presas a las trampas usando magia.</p></div><div class='fichim col-sm-6'><img src='imgs/goblin.jpg'></div></div>");
		});
	$("#diente").mouseover(function(){
		$("#fichaff").html("<div class='contfich row'><div class='fichinf col-sm-6'><h4>Nombre</h4><p>Diente de león</p><h4>Especie</h4><p>Asteráceas</p><h4>Descripción</h4><p>Considerada generalmente como una mala hierba, aunque sería más correcto decir 'hierba adventicia', sus hojas se consumen en ensalada y se le han atribuido numerosas propiedades medicinales.</p></div><div class='fichim col-sm-6'><img src='imgs/dent.jpg'></div></div>");
		});
	$("#mand").mouseover(function(){
		$("#fichaff").html("<div class='contfich row'><div class='fichinf col-sm-6'><h4>Nombre</h4><p>Mandrágora</p><h4>Especie</h4><p>Mandragora autumnalis</p><h4>Descripción</h4><p>Especie de fanerógama perteneciente a la familia de las Solanáceas, que fue usada extensamente en Europa medicinalmente.</p></div><div class='fichim col-sm-6'><img src='imgs/mandr.jpg'></div></div>");
		});
	$("#buho").mouseover(function(){
		$("#fichaff").html("<div class='contfich row'><div class='fichinf col-sm-6'><h4>Nombre</h4><p>Búho real</p><h4>Especie</h4><p>Bubo bubo</p><h4>Descripción</h4><p>Es una rapaz de tamaño grande, distribuida por Europa, Asia y África. Es más común en el noreste de Europa, pero también en la zona que rodea el Mediterráneo, incluyendo la península ibérica.</p></div><div class='fichim col-sm-6'><img src='imgs/buho.jpg'></div></div>");
		});
	$("#buitre").mouseover(function(){
		$("#fichaff").html("<div class='contfich row'><div class='fichinf col-sm-6'><h4>Nombre</h4><p>Buitre negro</p><h4>Especie</h4><p>Aegypius monachus</p><h4>Descripción</h4><p>El ave de mayor tamaño de toda la Península Ibérica. Tiene una envergadura alar de unos 250 cm.</p></div><div class='fichim col-sm-6'><img src='imgs/buitre.jpg'></div></div>");
		});
	$("#chopo").mouseover(function(){
		$("#fichaff").html("<div class='contfich row'><div class='fichinf col-sm-6'><h4>Nombre</h4><p>Chopo</p><h4>Especie</h4><p>Populus alba</p><h4>Descripción</h4><p>Árbol caducifolio corpulento de forma redondeada y rápido crecimiento, de hasta 30 m de altura y 1 m de diámetro, de forma ancha y columnar, de grueso tronco.</p></div><div class='fichim col-sm-6'><img src='imgs/chopo.jpg'></div></div>");
		});
	$("#olivo").mouseover(function(){
		$("#fichaff").html("<div class='contfich row'><div class='fichinf col-sm-6'><h4>Nombre</h4><p>Olivo</p><h4>Especie</h4><p>Olea europea</p><h4>Descripción</h4><p>Árbol pequeño perennifolio, longevo, que puede alcanzar hasta 15 m de altura, con copa ancha y tronco grueso, de aspecto retorcido.</p></div><div class='fichim col-sm-6'><img src='imgs/olivo.jpg'></div></div>");
		});
});