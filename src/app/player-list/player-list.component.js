function perCent( x,  y){
	return (x/y)*100;
}

function updateRates(){
	var rows = document.getElementById('rates').rows.length;;
	console.log(rows);
	var table_rates = document.getElementById('rates');
	var table_won = document.getElementById('won');
	var table_rolled = document.getElementById('rolled');
	
	for (var r=1; r<rows ; r+=1) {
		// Winrate café
		if (table_rolled.rows[r].cells[1].innerHTML != 0){
			table_rates.rows[r].cells[1].innerHTML = Math.round(perCent(table_won.rows[r].cells[1].innerHTML, table_rolled.rows[r].cells[1].innerHTML)*100)/100;
		}
		else table_rates.rows[r].cells[1].innerHTML = '';

		//Winrate bouilloire		
		if (table_rolled.rows[r].cells[2].innerHTML != 0){
			table_rates.rows[r].cells[2].innerHTML = Math.round(perCent(table_won.rows[r].cells[2].innerHTML, table_rolled.rows[r].cells[2].innerHTML)*100)/100;
		}
		else table_rates.rows[r].cells[2].innerHTML = '';
		
		// Winrate Croco
		if (table_rolled.rows[r].cells[3].innerHTML != 0){
			table_rates.rows[r].cells[3].innerHTML = Math.round(perCent(table_won.rows[r].cells[3].innerHTML, table_rolled.rows[r].cells[3].innerHTML)*100)/100;
		}
		else table_rates.rows[r].cells[3].innerHTML = '';
		
		// Winrate Base
		if (table_rolled.rows[r].cells[4].innerHTML != 0){
			table_rates.rows[r].cells[4].innerHTML = Math.round(perCent(table_won.rows[r].cells[4].innerHTML, table_rolled.rows[r].cells[4].innerHTML)*100)/100;
		}
		else table_rates.rows[r].cells[4].innerHTML = '';
		
		// Winrate autre
		if (table_rolled.rows[r].cells[5].innerHTML != 0){
			table_rates.rows[r].cells[5].innerHTML = Math.round(perCent(table_won.rows[r].cells[5].innerHTML, table_rolled.rows[r].cells[5].innerHTML)*100)/100;
		}
		else table_rates.rows[r].cells[5].innerHTML = '';
		
		//Winrate global
		table_rates.rows[r].cells[6].innerHTML = (table_rates.rows[r].cells[1].innerHTML
													+table_rates.rows[r].cells[2].innerHTML
													+table_rates.rows[r].cells[3].innerHTML
													+table_rates.rows[r].cells[4].innerHTML
													+table_rates.rows[r].cells[5].innerHTML)/5

	}
}
