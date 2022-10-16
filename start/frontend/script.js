//reduce()

let maxValue = document.querySelector(".maxValue__input");
const buttonMaxV = document.querySelector(".maxValue__btn");
const maxVContainer = document.querySelector(".maxValue__container");

const biggest = function (input){
	let bigArr = input.split(",");
	return bigArr.reduce((a,b) => Math.max(a,b));
}

buttonMaxV.addEventListener("click", function(){
	if(maxVContainer.childNodes.length !== 0){
		maxVContainer.innerHTML = "";
		maxVContainer.insertAdjacentHTML("beforeend", biggest(maxValue.value));

	}else{
		maxVContainer.insertAdjacentHTML("beforeend", biggest(maxValue.value));
	}
});

//filter()

let gratherI = document.querySelector(".greaterThan__input");
const buttonG = document.querySelector(".greaterThan__btn");
const gratherC = document.querySelector(".greaterThan__container");

const grather = function(input){
	const numbers = [1,2,3,4,5,6,7,8,9,10];
	return numbers.filter(el => el > input);

}
buttonG.addEventListener("click", function(){
	if(gratherC.childNodes.length !== 0){
		gratherC.innerHTML = "";
	}else{
		gratherC.insertAdjacentHTML("beforeend", grather(gratherI.value));

	}
});

//map()

let fBI = document.querySelector(".fizzBuzz__input");
const buttonFB = document.querySelector(".fizzBuzz__btn");
const fBC = document.querySelector(".fizzBuzz__container");

const fizzBuzz = function (input){
	let createdA = Array.from({length: input}, (x, i) => i + 1);
	return createdA.map(el => {
		if(el%5===0&&el%3===0){
			return "FizzBuzz"
		}else if(el%5===0){
			return "Buzz";
		}else if(el%3===0){
			return "Fizz"
		}else{
			return el;
		}
	});
	/* return Array(parseInt(input)).fill(1).map((num,index) => {
		if((index+1)%5===0&&(index+1)%3===0){
			return "FizzBuzz";
		}else if((index+1)%5===0){
			return "Buzz";
		}else if((index+1)%3===0){
			return "Fizz";
		}else{
			num+=index;
			return num;
		} */
	/* }) */
		
	console.log(Array(8).fill(1));
	
}

buttonFB.addEventListener("click", function(){
	
	if(fBC.childNodes.length !== 0){
		fBC.innerHTML = "";
		fBC.insertAdjacentHTML("beforeend", fizzBuzz(fBI.value));
	}else{
		fBC.insertAdjacentHTML("beforeend", fizzBuzz(fBI.value));
	}

})
