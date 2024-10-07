let numero = 1;
const duree = 800;

// Si on clique sur la flèche "suivant"
$("#suivant").click(function () {
    
    $("#slide" + numero).hide();
	$("button").hide();
	
	if ($("#slide" + numero + ">h1").text() == " fin " ) {
		numero = numero
	}
    else {
		numero = numero + 1
	}
	
    $("#slide" + numero).show(duree,function(){$("button").show()});

});

// Si on clique sur la flèche "precedent"
$("#precedent").click(function () {
   
    $("#slide" + numero).hide();
	$("button").hide();
		
	if ($("#slide" + numero + ">h1").text() == " debut " ) {
		numero = 1
	}
    else {
		numero = numero - 1
	}
	
    $("#slide" + numero).show(duree,function(){$("button").show()});

});