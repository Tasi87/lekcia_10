//idea	REST parameter

// const firstFunction = (firstName, secondName, ...rest) => {
// 	console.log(rest)
// }

// firstFunction("Jožko", "Mrkvička", "programátor", "BA");

function firstFunction (firstName, secondName, ...rest)  {
	console.log(rest)
}

firstFunction("Jožko", "Mrkvička", "programátor", "BA");

//idea	Scope a Lexical Enviroment

/**
	Scope určuje, akým spôsobom sa hľadajú premenné a ku ktorým 
	premenným kód má prístup a ku ktorým nie.
*/

/**
	Lexical enviroment je koncept, ktorý je JavaScripte hovorí, ako má ukladať 
	premenné a ako má riadiť ich dosah.
*/

/**
	Scope určuje, ktorý kód ma prístup ku ktorým premenným.
	Lexical enviroment realizuje tento prístup v praxi.
 */

//idea	Scope

//note	lokálny scope
const ageFunction = () => {
	const age = 50;
	console.log(age);
}

const nameFunction = () => {
	const firstName = "Harry";
	console.log(firstName)
}

ageFunction();
nameFunction();
//----------------------------------------

//note	vnorený scope
const firstFun = () => {
	const age = 30;
	
	// vnorený scope
	const secondFun = () => {
		const firstName = "Hermiona";
		console.log(age);
		console.log(firstName);
	}
	secondFun();
}

firstFun();
//----------------------------------------
//note	globálny scope

const age = 20;	// globálny scope

const firstFunk = () => {
	// vnorený scope
	const secondFunk = () => {
		const firstName = "Ron";
		console.log(age);	
	}
	secondFunk();
}
firstFunk();
//----------------------------------------

//note	funkčný scope - lokálny a vnorený
// všetok scope, ktorý sa týka nejakým spôsobom funkcií.

const firFunkc = () => {
	const nickName = "Tasi";
	console.log(nickName);
}

firFunkc();
//----------------------------------------
//note	block scope - lokálny a vnorený
// - Block scope znamená, že premenná je dostupná iba vo vnútri bloku { }, kde bola vytvorená.
if (10 > 3) {
	
	if (100 > 3) {
		const age = 21;
		console.log(age);
		
	}
}