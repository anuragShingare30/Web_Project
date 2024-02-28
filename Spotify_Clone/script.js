// console.log("hey there this is the client side project and not a server side project.");

// async function getsongs(){
// 	let a = await fetch("http://127.0.0.1:3002/songs/");
// 	let response = await a.text();
// 	console.log(response)
// 	let div = document.createElement("div")
// 	div.innerHTML = response;
// 	let as = div.getElementsByTagName('a')
// 	let songs = []
// 	for (var i = 0; i < as.length; i++) {
// 		const element =  as[i];
// 		if (element.href.endsWith(".mp3")) {
// 			songs.push(element.href.split("/songs/")[1])
// 		}
// 	}
// 	return songs;
// }

// async function main(){
// 	let songs = await getsongs()
// 	console.log(songs)

// 	let songul = document.querySelector(".song_playlist").getElementsByTagName("ul")[0]
// 	for (const song of songs){
// 		songul.innerHTML = songul.innerHTML + `<li> ${songs} </li>`;
// 	}

// 	let audio = new Audio(songs[0]);
// 	audio.play();

	

// }
// main();

document.querySelector(".hamburger").addEventListener("click", ()=>{
		document.querySelector(".right_menu").style.width = "342px";
		document.querySelector(".close").style.display = "flex";
		document.querySelector(".part1").style.display = "flex";
		document.querySelector(".part2").style.display = "flex";
		document.querySelector(".song_playlist").style.display = "flex";
		document.querySelector(".links").style.display = "flex";
		document.querySelector(".right_menu").style.transition = "0.5s linear";

	})

document.querySelector(".close").addEventListener("click", ()=>{
	document.querySelector(".right_menu").style.width = "0px";
	document.querySelector(".part1").style.display = "none";
	document.querySelector(".part2").style.display = "none";
	// document.querySelector(".song_playlist").style.display = "none";
	document.querySelector(".song_playlist").style.display = "none"
	document.querySelector(".right_menu").style.transition = "0.5s linear";
	document.querySelector(".links").style.display = "none";
})

const playlistElement = document.querySelector(".song_playlist");

// Check if the element with the class "song_playlist" exists before applying styles
if (playlistElement) {
    playlistElement.style.display = "flex";
    playlistElement.style.justifyContent = "center";
    playlistElement.style.alignItems = "center";
    playlistElement.style.flexDirection = "column";
}

