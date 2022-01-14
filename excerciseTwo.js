
const sum = (a,d=0) => b => b ? sum(a + d + b) : a + d;
console.log(sum(2,3)())//	Outputs	5
console.log(sum(2)(3)())//	Outputs	5
console.log(sum(1)(2)(3)(4)())//	Outputs	10