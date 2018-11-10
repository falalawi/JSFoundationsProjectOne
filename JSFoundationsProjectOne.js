/**
 * Receives an array of numbers
 * Filters out odd numbers
 * Returns an array of the even numbers
 *
 * Example usage:
 *
 *     filterEvens([1, 2, 3, 4, 5])
 *     returns [2, 4]
 *
 */
function filterEvens(numbers) {
// const numbers = ([1,2,3,4,5])
let evens = []
for (let i=0; i<numbers.length; i++)
if (i%2 === 0) {
	return evens
} else {
	return ''
}
console.log(evens)
}

/**
 * Receives an array of numbers
 * Filters out even numbers
 * Returns an array of the odd numbers
 *
 * Example usage:
 *
 *     filterOdds([1, 2, 3, 4, 5])
 *     returns [1, 3, 5]
 *
 */
function filterOdds(numbers) {
// const numbers = ([1,2,3,4,5])
	let odds=[]	
	for (let i=0; i<numbers.length; i++)
		if (i%2 !== 0) {
			return odds
		} else {
			return ''
		}
		console.log(odds)
		}

/**
 * Receives an array of numbers
 * Returns the sum of the odd numbers in that array
 *
 * Example usage:
 *
 *     sumOdds([1, 2, 3, 4, 5])
 *     returns 9
 *
 */
function sumOdds(numbers) {
let sumOdds=0
	for (let i=0; i<odds.length; i++) {
	sumOdds+odds[i];
} 
console.length(sumOdds)
}


/**
 * Receives an array of names
 * Makes the array into an array of pairs
 * Order of names and pairs doesn't matter
 * if the length of the array is odd, the last element is in an array on its own
 * Returns the array of pairs
 *
 * Example usage:
 * 
 *     pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish', 'Hussein'])
 *     returns [['Mishmish', 'Fawas'], ['Asis', 'Hussein'], ['Hamsa']]
 * 
 *     pairs(['Aziz', 'Hamza', 'Fawaz', 'Mishmish'])
 *     returns [['Mishmish', 'Fawaz'], ['Aziz', 'Hamza']]
 * 
 */
function makePairs(names) {
	let pairs = []
	for (let i=0; i<instructors.length; i+=2) {
		if (instructors[i+1] !==undefined) {
			pairs.push([instructors[i]+instructors[i+1]])
			} else {
				pairs.push(instructors[i]);
			}
		}
		return pairs
	}

/**************************************************
The following code runs the functions defined above
***************************************************/
let numbers = [153,67,9,34,7,67,342,7,34,8656,2,124,5,43];
let instructors = ["Hamza", "Mshary", "Aziz", "Hussein", "Fawaz"];

// uncomment the following lines to run and test your code.
filterEvens
evens = filterEvens(numbers);
console.log(evens);

// // sumOdds
// sum = sumOdds(numbers);
// console.log(sum);

// // makePairs
// let pairs = makePairs(instructors);
// console.log(pairs);