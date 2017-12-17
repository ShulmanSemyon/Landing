function preparePage() {
	document.getElementById("check").onclick = function() {
		if (document.getElementById("check").checked) {
			// use CSS style to show it
			document.getElementById("personalInfo").style.display = "block";
		} else {
			// hide the div
			document.getElementById("personalInfo").style.display = "none";
		}
	};
	// now hide it on the initial page load.
	document.getElementById("personalInfo").style.display = "none";
}
function checkInfo() {
	document.getElementById('').
}
window.onload =  function() {
	preparePage();
};

