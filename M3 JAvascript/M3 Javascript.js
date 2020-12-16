function inicia () {    
    
    //Fase 1
    
    let city1 = prompt("Introdueix el nom d'una ciutat:");
    let city2 = prompt("Introdueix el nom d'una ciutat:");
    let city3 = prompt("Introdueix el nom d'una ciutat:");
    let city4 = prompt("Introdueix el nom d'una ciutat:");
    let city5 = prompt("Introdueix el nom d'una ciutat:");
    let city6 = prompt("Introdueix el nom d'una ciutat:");

    console.log(city1+", "+city2+", "+city3+", "+city4+", "+city5+", "+city6);
        
    //Fase 2    

	cities =  [city1,city2,city3,city4,city5,city6];
		
	temp = "";
		
	for (i = 0; i < cities.length; i++) {
           
		for (j = i + 1; j < cities.length; j++) {
               
			if (cities[i].localeCompare(cities[j])>0) {
                temp = cities[i];
                cities[i] = cities[j];
                cities[j] = temp;
            }
        }
	}
		
	console.log("Noms en ordre alfabetic: ");
        
	for (i = 0; i < cities.length - 1; i++) {
         
		console.log(cities[i] + ",");
    }
        
    console.log(cities[cities.length - 1]);
    
    //Fase 3

    cityChanged = "";
	ArrayCiutatsModificades = []; 
			
	for (i = 0; i < cities.length; i++) {				    //Entro al Array de Strings
				
	    temp = Array.from(cities[i]);   			       
			
		for (j = 0; j < temp.length; j++) {  			    
               
			if (temp[j] == ('a') || temp[j] == ('A')) {     //Condición para ver si char array contiene "a"s.
				temp[j] = '4';			       	 		    //Reemplazo 								
            } 
        }
        cityChanged = temp.toString();			            //Meto a String cityChanged
		ArrayCiutatsModificades.push(cityChanged); 	        //Meto a String Array la String: cityChanged
	}
		
	// Ordenar alfabeticament
		
	console.log("Noms en ordre alfabetic amb les a's com a 4's:");
		
    for (i = 0; i < ArrayCiutatsModificades.length; i++) {
           
		for (j = i + 1; j < ArrayCiutatsModificades.length; j++) {
               
			if (ArrayCiutatsModificades[i].localeCompare(ArrayCiutatsModificades[j])>0) {
                temp = ArrayCiutatsModificades[i];
                ArrayCiutatsModificades[i] = ArrayCiutatsModificades[j];
                ArrayCiutatsModificades[j] = temp;
            }
        }
	}
    
    for (i = 0; i < ArrayCiutatsModificades.length - 1; i++) {
         
		console.log(ArrayCiutatsModificades[i]);
    }
        
    console.log(ArrayCiutatsModificades[ArrayCiutatsModificades.length - 1]);

    //Fase 4

    city1Inv = arrangeArray(city1.split(""));
    city2Inv = arrangeArray(city2.split(""));
    city3Inv = arrangeArray(city3.split(""));
    city4Inv = arrangeArray(city4.split(""));
    city5Inv = arrangeArray(city5.split(""));
    city6Inv = arrangeArray(city6.split(""));

    console.log("Noms invertits:");
    console.log(city1Inv);
    console.log(city2Inv);
    console.log(city3Inv);
    console.log(city4Inv);
    console.log(city5Inv);
    console.log(city6Inv);
    
}

function arrangeArray (citySplitted) {
			
    arrayRev = [];

    for (i = citySplitted.length - 1; i >= 0; i--) {

        arrayRev[i] = citySplitted[(citySplitted.length - 1) - i];
    }

    return arrayRev;
 }     