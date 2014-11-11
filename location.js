	window.onload = function() {
	var button = document.getElementById("submit");
	button.onclick = addTable;
	};
	function addTable() {
	
		var table = document.getElementById("table");
		
		if (table.rows.length == 1) {
		
		var row1 = table.insertRow(1);
		var cell1 = row1.insertCell(0);
		var cell2 = row1.insertCell(1);
		var cell3 = row1.insertCell(2);
		var cell4 = row1.insertCell(3);
		addData();
		
		}

		else {
		
		deleteData();
		
		var row1 = table.insertRow(1);
		var cell1 = row1.insertCell(0);
		var cell2 = row1.insertCell(1);
		var cell3 = row1.insertCell(2);
		var cell4 = row1.insertCell(3);
		
		addData();
		
		}
		
		
	/*function chooseData(){
		
		x = document.getElementById("table").rows[1].cells[0].innerHTML;
		if ( x =="") {
			alert("no");
			addData;
		} 

		else {
			alert("yes");
			deleteData;
			addData;
		
		}
		
		}*/
		
	function addData(){
		
		var selectObj = document.getElementById("selectLocation");
		var index = selectObj.selectedIndex;
		var place = selectObj[index].value;
		
		if (place == "Kuala Lumpur") {
		
			cell1.innerHTML = "chicken with rice noodles in soup";
			cell2.innerHTML ="roadside stall";
			cell3.innerHTML ="Jalan San Peng Kuala Lumpur";
			cell4.innerHTML ="RM5";
		
		} 
		
		if (place == "Petaling Jaya") {
		
			cell1.innerHTML = "hor fun";
			cell2.innerHTML ="Soon Lee coffee shop";
			cell3.innerHTML ="Jalan 1/10 Petaling Jaya’s Old Town";
			cell4.innerHTML ="RM6";
		
		}
		
		if (place == "Batu Caves") {
		
			cell1.innerHTML = "Kari Kepala Ikan ";
			cell2.innerHTML ="SG ";
			cell3.innerHTML ="Jalan SG 1/8,Tmn Sri Gombak, Batu Caves.";
			cell4.innerHTML ="RM5.5";
		
		}
		
	}
		
	function deleteData(){
		
		var table = document.getElementById("table");
		var row = table.deleteRow(1)
	
		
		
		
		}
	}