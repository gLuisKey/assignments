

let message = "GlobalScope"


let a = function () {

let message = "inside a";
console.log("a:message = " + message)


function b () {

console.log("a:message = " + message)




}



}



a()

if (false || nul ||
	undefined || "" || 0 || NaN) {
	console.log("This line won't ever execute")
}

else {
	console.log ("All false")
}