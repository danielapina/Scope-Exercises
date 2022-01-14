
const runningAverage=()=> {
    let sum = 0;
    let counter = 0;
  
    return innerFunc = number => {
      sum += number;
      counter++;
      
      return (sum / counter * 100) / 100;
    };
  }

 const rAvg	=	runningAverage();
console.log( rAvg(10))  //	10.0;
console.log( rAvg(11))	//  10.5;
console.log( rAvg(12))  //  11
