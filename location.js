	window.onload = function() {
	var button = document.getElementById("submit");
	button.onclick = addData;
	};
	
	
		
		
		
	function addData(){
		
		var selectObj = document.getElementById("selectLocation");
		var index = selectObj.selectedIndex;
		var place = selectObj[index].value;
		
		if (place == "Kuala Lumpur") {
		
			$.ajax({
				url : "locations/KualaLumpur.html"
		
			}).done(function(data){

				$("#table").html(data);
			});
		
		}
		
		if (place == "Petaling Jaya") {
		
				$.ajax({
				url : "locations/PetalingJaya.html"
		
			}).done(function(data){

				$("#table").html(data);
			});
		
		}
		
		if (place == "Batu Caves") {
		
				$.ajax({
				url : "locations/BatuCaves.html"
		
			}).done(function(data){

				$("#table").html(data);
			});
		
		}
		
	}
		
	
	