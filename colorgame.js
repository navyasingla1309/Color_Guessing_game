let ng = document.querySelector(".new");
let easybtn= document.querySelector("#easy");
let hardbtn= document.querySelector("#hard");
let target="";
let colors=[];
let boxes = document.querySelectorAll(".square");
let main = document.querySelector(".head");
let t = document.querySelector(".target");
let h= document.querySelector(".head");
let easy = false;
let hard = true;
function generateColor(){
	let r = Math.floor(Math.random()*256);
	let g = Math.floor(Math.random()*256);
	let b = Math.floor(Math.random()*256);
	let color= `rgb(${r}, ${g}, ${b})`;
	return color;
}
function generateTarget(n){
	let index = Math.floor(Math.random()*n);
	return index;
}
function reset(n){
	main.style.backgroundColor="steelblue";
	colors=[];
	fill(n);
    target = colors[generateTarget(n)];
    t.innerText=target;
    easy = false;
    hard=true;
}
easybtn.addEventListener("click",function(){
	reset(3);
	easy=true;
	hard=false;
	for(let i=3;i<6;i++){
		boxes[i].style.backgroundColor="#232323";
	}
	change(easybtn,hardbtn);
    
});
hardbtn.addEventListener("click",function(){
	reset(6);
	change(hardbtn,easybtn);
});
reset(6);
function fill(n){
for(let box of boxes){
	let color= generateColor();
	box.style.backgroundColor = color;
	if(colors.length<n){
	colors.push(color);
	}
}
}

for(let box of boxes){
	box.addEventListener("click",function(){
		let clicked = this.style.backgroundColor;
		if(clicked===target){
			h.style.backgroundColor=clicked;
			ng.innerText="Play Again?";
			let i=0;
			for(let x of boxes){
				if(easy==true && i==3){
					break;
				}
				x.style.backgroundColor=clicked;
				i++;
			}
		}else{
			this.style.backgroundColor="#232323";
		}
	});
}
function change(a,b){
	a.classList.add("selected");
	a.style.color="white";
	b.classList.remove("selected");
	b.style.color="steelblue";
}
ng.addEventListener("click",function(){
	reset(6);
    ng.innerText="New Colors";
    change(hardbtn,easybtn);
});
