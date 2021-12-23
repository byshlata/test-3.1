
function humanReadable (seconds) {

      let countTime = (value, index) => Math.trunc(value / index);
      let hour = countTime (seconds, 3600);
      let minute = countTime (seconds - hour * 3600, 60);
      let second = seconds - hour * 3600 - minute * 60;
      
      let strHour = hour > 9 ? hour : "0" + hour; 
      let strMinute = minute > 9 ? minute : "0" + minute; 
      let strSecond = second > 9 ? second : "0" + second; 
  return strHour + ":" + strMinute + ":" + strSecond ;
}


console.log (humanReadable(86400));




/*рекурсия*/
/*
function closestPair(points) {

  if (points.length <= 1){
    return points;
  }
  points.sort(sortХ);
  let strAnswer = recursionPoint(points);
  return strAnswer[0];
 
 }
 
 function distans(pointX1, pointX2, pointY1, pointY2){
 return Math.pow (pointX1 - pointX2, 2) + Math.pow(pointY1 - pointY2, 2);

 }
 
 
 function sortХ(a, b) {
   return a[0] - b[0];
 } 
 

 
 function minDistans(arrayPoint) {
let arrayOffMinDist = [arrayPoint[0], arrayPoint[0]];
let dist = 0;
let minDist = distans(arrayPoint[0][0], arrayPoint[1][0], arrayPoint[0][1], arrayPoint[1][1]);
   for (let i = 0; i < arrayPoint.length - 1; i++){
     for (let j = i + 1 ; j < arrayPoint.length; j++){
      dist = distans(arrayPoint[i][0], arrayPoint[j][0], arrayPoint[i][1], arrayPoint[j][1]);
       if (minDist > dist){
         minDist = dist;
         arrayOffMinDist = [arrayPoint[i], arrayPoint[j]];
       }
     }
   }
   return [arrayOffMinDist, minDist];
 }
 
 
 function recursionPoint(pointSortX) {
   if (pointSortX.length <= 3){
     return minDistans(pointSortX);
   }
 function minPair(pair1, pair2){ 
     if (pair1[1] < pair2[1]){
     return pair1;
   } else {
    return pair2;
   }
 }

 
   let middle = Math.floor (pointSortX.length / 2);
   let leftClosPair = recursionPoint(pointSortX.slice(0,middle));
   let rightClosPair = recursionPoint(pointSortX.slice(middle));

   let minDista = minPair(leftClosPair, rightClosPair);
   let DividePairs = pointSortX.filter(function(coord) {
     return coord[0] - pointSortX[middle][0] < minDista[1];
   });
  let closDividePair = [Infinity, Infinity]; 
  let bestPair;
 if (DividePairs.length > 1) { 
closDividePair = minDistans(DividePairs);
 }
 bestPair = minPair(minDista,closDividePair);
 return bestPair;
 }


 console.log (closestPair([
  [2,2], // A
  [2,8], // B
  [5,5], // C
  [5,5], // C
  [6,3], // D
  [6,7], // E
  [7,4], // F
  [7,9]  // G
]));

*/
/*рекурсия*/












/* 
 console.log (closestPair([
  [2,2], // A
  [2,8], // B
  [5,5], // C
  [6,3], // D
  [6,7], // E
  [7,4], // F
  [7,9]  // G
])); */











/* function closestPair(points) {
    let array = [];
    let arrayOf = [];
     if (points.length == 2){
          return points;
      } else {
      points.sort(compareUnitaz); 
        let number = parseInt(points.length / 2);
        let arrayFerst = points.slice(0, number);
        let arraySecond = points.slice(number, number);
        array.push(brutForse(points, 0, number));
        array.push(brutForse(points, number, points.length)); 
        arrayOf.push(array[0][0]);
        arrayOf.push(array[0][1]);
        arrayOf.push(array[1][0]);
        arrayOf.push(array[1][1]);
        arrayOf.push(brutForse(arrayOf, 0, 4)); 
      } 
      return arrayOf[4];
}

function compareUnitaz(a, b) {
    return a[0] - b[0];
} 

function brutForse(pointsMeddle, numberFrom, numberBefore) {
    let indexPointOne = numberFrom,
        indexPointTwo = numberFrom + 1;
        let lengthLine  = Math.abs(pointsMeddle[indexPointOne][0] - pointsMeddle[indexPointTwo][0]) + Math.abs(pointsMeddle[indexPointOne][1] - pointsMeddle[indexPointTwo][1]);
        for (let i = numberFrom; i < numberBefore - 1; i++){
           for (let j = i + 1 ; j < numberBefore; j++){
              let lengthLineNow = Math.abs(pointsMeddle[i][0] - pointsMeddle[j][0]) + Math.abs(pointsMeddle[i][1] - pointsMeddle[j][1]);

                  if ( lengthLineNow < lengthLine) {

                    indexPointOne = i;
                    indexPointTwo = j;
                    lengthLine = lengthLineNow; 
                  if (lengthLineNow == 0){
                    j = pointsMeddle.length;
                    i = pointsMeddle.length;
                  }
    
                }
            }
        }
        let arrayOff = [];
        arrayOff.push(pointsMeddle[indexPointOne]);
        arrayOff.push(pointsMeddle[indexPointTwo]);
        return arrayOff; 
        
    } */







/* 
      function closestPair(points) {
        if (points.length == 2){
            return points;
        } else {
           let lengthLine  = Math.abs(points[0][0] - points[1][0]) + Math.abs(points[0][1] - points[1][1]);
            for (let i = 1; i < points.length - 1; i++){
               for (let j = i + 1 ; j < points.length; j++){
                  let lengthLineNow = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1]);
                    if ( lengthLineNow < lengthLine) {
                        indexPointOne = i;
                        indexPointTwo = j;
                        lengthLine = lengthLineNow; 
                      if (lengthLineNow == 0){
                        j = points.length;
                        i = points.length;
                      }
        
                    }
                }
            }
        }
        let arrayOff = [];
        arrayOff.push(points[indexPointOne]);
        arrayOff.push(points[indexPointTwo]);
        return arrayOff;
        } */