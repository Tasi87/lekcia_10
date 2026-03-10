//idea	Arguments a functions

// arguments
// eval()
// with
// for in
// delete

//note arguments
//!	-	arguments nie je pole

function firstFunction (firstName, secondName) {
	console.log(arguments);
	console.log(arguments[0]);
	console.log(arguments[1]);

								// Prevediem arguments na pole
	const newArgumemnts = Array.from(arguments);
	
	newArgumemnts.map( (item) => {
			console.log(item);
	});
}

firstFunction("Jožko", "Mrkvička");

//!	Šípková notácia nepozná "arguments"
const secondFunction = (firstName, secondName) => {
	console.log(arguments);
}

// secondFunction("Harry", "Potter");