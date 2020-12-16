function inicia () {    
    
    //Fase 1
    let nom = prompt("Introdueix el teu nom:");
    let aLletres = Array.from(nom);
            
    for (i=0; i<aLletres.length; i++) {
            
        document.write(aLletres[i]+ "<br/>");
    }
    document.write ("<br/>");

    //Fase 2        
	aLlista = aLletres.join(",");
		
    for (i=0; i<aLlista.length; i++) {
				        
		if(aLlista[i] == ' ') {
                
            document.write("espai" + "<br/>");

	    } else if (aLlista[i] == 'a' || aLlista[i] == 'e' || aLlista[i] == 'i' || aLlista[i] == 'o' || aLlista[i] == 'u') {
					           
			document.write("VOCAL " + aLlista[i] + "<br/>");
			
		} else if  (!isNaN(aLlista[i])) {
				
            document.write("Els noms de persones no contenen números! ( " + aLlista[i] + " )" + "<br/>");
            
        } else if (aLlista[i] == ',' ) {
                
            //do nothing

		} else {

			document.write("CONSONANT " + aLlista[i] + "<br/>");	
		}
	}
    document.write ("<br/>");

    //Fase 3
    let myMap = new Map();
    let key;
    let count = 0;

    for (i = 0; i < aLletres.length; i++) {
        
        key = aLletres[i].toLowerCase();
        
        for (j = 0; j < aLletres.length; j++) {
            if (aLletres[j].toLowerCase() == key) {
                count++;
            }
        }
        
        if (count > 1 && myMap.size > 0) {
            
            myMap.delete(aLletres[i]);
            myMap.set(aLletres[i].toLowerCase(),count);
            count = 0;
        
        } else {

            myMap.set(aLletres[i].toLowerCase(),count);
            count = 0;
        }
    }
       
    myMap.forEach(writeMapElements);

    function writeMapElements(value, key, map) {
        
        document.write(`[${key}] = ${value}`+"  //  ");
    }
    
    document.write ("<br/>");
    document.write ("<br/>");

    //Fase 4
    let cognom = prompt("Introdueix el teu cognom:");
    let cognomALletres = Array.from(cognom);
    
    aLletres.push(" ");
    let Fullname = aLletres.concat(cognomALletres);
    
    document.write("["); 
    for (i=0; i<Fullname.length; i++) {
        
        if (i== Fullname.length -1) {
            document.write("'" + Fullname[i] + "'");
        } else { 
            document.write("'" + Fullname[i] + "'" + ",");
        }
    }	    
    document.write("]"); 	
}        