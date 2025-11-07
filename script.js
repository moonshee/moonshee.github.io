
//Java script for Nashville Entertainer AI project



//--Scroll toggler-->
 function disableScroll() {
	document.body.style.overflow = 'hidden';
}
//

 function enableScroll() {
	document.body.style.overflow = 'auto';
}


//--Script for progress gauge-->
{	document.getElementById("solarPower").value = Math.floor(Math.random() * 101 - 30);
}
//--end progress gauge-->
//--Start script for diagnostics-->
{	document.getElementById("signalMeter").value = Math.floor(Math.random() * 101);
}
//--end diagnostics script-->
//--Start script for analog round gauge-->

{
window.addEventListener("DOMContentLoaded", () => {

const angle = Math.floor(Math.random(2) * 180);
const needleGroup = document.getElementById("needle-group");
needleGroup.setAttribute("transform", 'rotate(${angle}, 100 100)');
});}
//--End script for analog round gauge  DOESNT WORK-->


//--mic button colour tog-->

	{
	window.onload = function () {
		const btn = document.getElementById('btn');
		btn.onclick = function () {
		 if (btn.style.backgroundColor === 'red') {
		  btn.style.backgroundColor = 'lightgreen';
		 } else {
		   btn.style.backgroundColor = 'red';
		 }
		}};
}

//user id assign

{
 document.getElementById("systemCode").textContent = "USER_ID-" + Math.floor(Math.random() * 9000 + 1000);
}


// voice done go on splash
function voiceDone()
{
window.addEventListener("DOMContentLoaded", () => {

document.getElementById("goBtn").addEventListener("click", function () { submitChat(); //same func triggered by text input
});
});

}


// - drop down

<!--function voice done button-->
	function goToLink(select) {
		const url = select.value;
		if (url) {
			window.location.href = url;
		}
	}
<!--function end-->







