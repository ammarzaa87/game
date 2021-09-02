var isStart = false;
var isInMap = false;
var coin = 0 ;
window.onload = function () {
	document.getElementById("status").textContent = "";
    var wall = document.getElementsByClassName("boundary");
    /*start */
    document.getElementById("start").addEventListener("mouseover", start);
	

    /*out of the map */
    document.getElementById("game").addEventListener("mouseleave", IsOutside);
	
	
    /*wall */
    for (var i = 0; i < wall.length - 1; i++)
        wall[i].addEventListener("mouseover", hit);
	

    /*end */
    document.getElementById("end").addEventListener("mouseover",end);
	
	function start(){
		
        isStart = true;
        isInMap = true;
        for (var i = 0; i < wall.length; i++) { wall[i].style.backgroundColor = "#EEEEEE"; }
	}
	
	function IsOutside(){
		isInMap = false;
	}
	function hit(){
		if (isStart) {
			
			for (var i = 0; i < wall.length - 1; i++) {
				wall[i].style.backgroundColor = "#FF0000"; 
				
				}
        
                document.getElementById("status").textContent = "you Lost!";
                isStart = false;
				coin = coin -10;
				
				var score = document.getElementsByTagName("h1");
				score[0].innerHTML = "you have "+coin+" points"
            }
	}
	function end(){
		 if (isStart) {
            if (isInMap) { 
			document.getElementById("status").textContent = "you won"; 
			coin = coin + 5 ;
			var score = document.getElementsByTagName("h1");
			score[0].innerHTML = "you have "+coin+" points"
			}
            else {
                document.getElementById("status").textContent = "don't try this again!";
                isStart = false;
				
            }
        }
        isStart = false;
	}
	
}