function inicia () {    
    
	//Fase 1  
	  
    b5   = 5;
    b10  = 10;
    b20  = 20;
    b50  = 50;
    b100 = 100;
    b200 = 200;
    b500 = 500;
    
    let priceTot = 0;
    
    menu = [];
    pricesDish = [];
    
	//Fase 2	
	
	let numDish = prompt("Quants plats vols afegir al menú? ");		
	
	while (isNaN(numDish)) {	

		numDish = prompt("No has introuduït un número! Quants plats vols afegir al menú? ");

	}
						
	console.log("La nostra carta tindrá " + numDish + " plats.");
		
	for (i = 0; i<numDish; i++) {							
		
		let newDish = prompt("Introdueix un plat al menú:");	
		let dupli = menu.includes(newDish);
			
		while (dupli == true) {
			
			console.log("El plat "+newDish+ " está repetit, introdueix un altre plat:");
			newDish = prompt("Introdueix un plat al menú que no estigui repetit:");	
			dupli = menu.includes(newDish);
		
		}
		menu[i] = newDish;

		let priceDish = parseFloat(prompt("Quin preu té el plat: " +newDish+ "?"));
		
		while (isNaN(priceDish)) {	

			priceDish = parseFloat(prompt("No has introuduït un número! Quin preu té el plat: "+newDish+"?"));

		}			
		
		pricesDish[i] = priceDish;		
	}	

	console.log("Aquesta és la nostra carta: ");
	
	for (i = 0; i<numDish; i++) {							//Printo menu-precio
			
		console.log(menu[i]+": " +pricesDish[i]+ "€." ); 

	}

	order = [];								//pedido
	let continueOrder = 1;

	do  {			//Condicion para seguir pidiendo, inicializada en 1.
			
		let dish = prompt("Demana el plat que vulguis: ")
		
		if (menu.includes(dish)) {

			order.push(dish);
			continueOrder = parseInt(prompt("Vols seguir demanant? 1 = si / 0 = no."));
			
			while (continueOrder != 1 && continueOrder != 0) {	

				continueOrder = parseInt(prompt("Torna-hi! Recorda: Vols seguir demanant? 1 = si / 0 = no."));
				
			}
		
		} else {
			
			console.log("El plat que demanes no está al menú." );

		}

	} while (continueOrder == 1);

	console.log("Això és el que has demanat: ");

	for (i = 0; i<order.length; i++) {							//Printo pedido
			
		console.log(order[i]+", "); 

	}
	
	//Fase 3

	//Comparo array order con array menu para obtener el precio total de la factura
	for (i=0; i<order.length; i++) {

		if (menu.includes(order[i])) {

			j = menu.indexOf(order[i]);
			priceTot += pricesDish[j];

		}			
	}

	console.log("El total de la factura son: " +priceTot+"€.");

}