//RTF
document.getElementById("RTFicon").ondblclick = function(){
	document.getElementById("RTFclick").style.display="block";
}
document.getElementById("RTFexit").onclick = function(){
	document.getElementById("RTFclick").style.display="none";
}
//mood
document.getElementById("moodIcon").ondblclick = function(){
	document.getElementById("moodClick").style.display="block";
	document.getElementById("moodIframe").src = "mood/Mood6/index.html";
}
document.getElementById("moodExit").onclick = function(){
	document.getElementById("moodClick").style.display="none";
	document.getElementById("moodIframe").src = "";
}
//knife
document.getElementById("knifeIcon").ondblclick = function(){
	document.getElementById("knifeClick").style.display="block";
}
document.getElementById("knifeExit").onclick = function(){
	document.getElementById("knifeClick").style.display="none";
}
//home
document.getElementById("homeIcon").ondblclick = function(){
	document.getElementById("homeClick").style.display="block";
}
document.getElementById("homeExit").onclick = function(){
	document.getElementById("homeClick").style.display="none";
}
//mad
document.getElementById("madIcon").ondblclick = function(){
	document.getElementById("madClick").style.display="block";
	document.getElementById("madClickVid").src = "https://www.youtube.com/embed/UCIr5ZcpLEU";
}
document.getElementById("madExit").onclick = function(){
	document.getElementById("madClick").style.display="none";
	document.getElementById("madClickVid").src = "";
}
//pingpong
document.getElementById("pingpongIcon").ondblclick = function(){
	document.getElementById("pingpongClick").style.display="block";
	document.getElementById("pingpongIframe").src = "https://seulilee-voice-pinpong.netlify.app";
}
document.getElementById("pingpongExit").onclick = function(){
	document.getElementById("pingpongClick").style.display="none";
	document.getElementById("pingpongIframe").src = "";
}
//Bitsy
document.getElementById("BitsyIcon").ondblclick = function(){
	document.getElementById("BitsyClick").style.display="block";
}
document.getElementById("BitsyExit").onclick = function(){
	document.getElementById("BitsyClick").style.display="none";
}
//file
document.getElementById("fileExit").onclick = function(){
	document.getElementById("file").style.display="none";
}
//WeNeedSleep
document.getElementById("needSleepIcon").ondblclick = function(){
	document.getElementById("needSleep").style.display = "block";
	document.getElementById("needSleepIframe").src = "WeNeedSleep/index.html";
}
