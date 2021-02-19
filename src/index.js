const { underline } = require("colors");

exports.min = function min (array) {
    
    if ((array === undefined) || (array.length === 0 ))
    {
        return 0;
    }
    else
 {  
    let min = array[0];
  for (let i = 0; i<array.length; i++)
  { 
      if (min > array[i])
      {
          min = array[i];
      }
      
  }
  return min;
}
}

exports.max = function max (array) {

 if ((array === undefined) || (array.length === 0 ))
 {
     return 0;
 }
 else 
 {
    let max = array[0];
 
 for (let k = 0; k < array.length; k++)
 {
     if (max < array[k])
     {
         max = array[k];
     }
 }
 return max;
}
}

exports.avg = function avg (array) {
    if (array === undefined || array.length === 0)
    {
        return 0;
    }
    else
    {   let sumArray = 0;
        let avg = 0;
        for (let i = 0; i<array.length; i++)
        {
            sumArray += array[i];

        }
        avg = sumArray / array.length;
        return avg;
    }
  
}
