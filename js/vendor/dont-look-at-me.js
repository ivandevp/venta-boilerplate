+function() {
	// Elementos
	var precioTotal = document.getElementById("precio-total");
	// Manejador de Evento
	precioTotal.addEventListener("click", function () {
		var cantidad = document.getElementById("cantidad").value;
		var precio = document.getElementById("precio").value;
		var resultado = document.getElementById("resultado");
		resultado.textContent = calcularPrecioFinal(cantidad, precio);
	});
}();