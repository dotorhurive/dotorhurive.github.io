$(document).ready(function(){
	$("button").click(function(){

		$(".defensa").text("");

		var random1 = Math.floor(Math.random()*8);
		var random2 = Math.floor(Math.random()*8);
		var random3 = Math.floor(Math.random()*8);

		var	todoes = ["un complot", "un montaje", "un invento", "una conspiración", "un plan", "una cacería de brujas", "una campaña terrorista", "producto de la presión",];
		
		var	de = ["la far", "Petro", "el Castrochavismo", "el comunismo ateo", "la fiscalía", "Santos", "Timochenko", 'Piedad "Teodora" Córdoba'];

		var conElFinDe = ["enlodar el buen nombre del presidente Uribe", "entregarle el país al terrorismo", "lograr la paz con impunidad", "repartir mermelada", "humillar al glorioso ejercito nacional", "igualar a los terroristas con las fuerzas armadas", "traer el socialismo a Colombia", "mentirle al país"];

		$(".defensa").append("Todo es " + todoes[random1] + " de " + de[random2] + " con el fin de " + conElFinDe[random3]);

	})
})