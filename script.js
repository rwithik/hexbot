let i = 0;
let max = 10;
let seeds = {"emoji-angry": "FF0000,FF0048,FF0072",
			 "emoji-love": "FF0072,FF00B2,E100FF",
			 "emoji-sick": "01A319,28D642,198908",
			 "emoji-sad": "00AEFF,0059FF,007FA3",
			 "emoji-happy": "FFB200,FFF600,D4FF00"
			};

let shadows = {"emoji-angry": "rgba(256, 0, 0, 0.6)",
			 "emoji-love": "rgba(255, 0, 114, 0.6)",
			 "emoji-sick": "rgba(1, 163, 25, 0.6)",
			 "emoji-sad": "rgba(0, 174, 255, 0.6)",
			 "emoji-happy": "rgba(255, 178, 0, 0.6)"
			};

let colorInterval = setInterval( () => {
		document.getElementById('canvas').style.backgroundColor = res.colors[i].value;
	}, 10000)

function newcolor(){
	clearInterval(colorInterval)
	let emoji = event.srcElement.id
	console.log(emoji);
	fetch('https://api.noopschallenge.com/hexbot?count=' + max + '&seed=' + seeds[emoji])
		.then(response => response.json()
			.then(res => {
				console.log(res.colors);
				colorInterval = setInterval(() => {
					document.getElementById('canvas').style.transition = '600ms linear';
					document.getElementById('inner-div').style.transition = '600ms linear';
					document.getElementById('canvas').style.boxShadow = '0px 0px 20px ' + shadows[emoji];
					document.getElementById('inner-div').style.boxShadow = 'inset 0px 0px 20px ' + shadows[emoji];
					document.getElementById('canvas').style.backgroundColor = res.colors[i].value;
					i = (i + 1) % max;
				}, 750);
			}))
		.catch(error => {
			console.error(error);
		});
}