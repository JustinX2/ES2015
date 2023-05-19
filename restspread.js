function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}

/*ES2015*/
const filterOutOdds=(...nums)=>nums.filter(num=>num%2===0);

const findMin=(...args)=>Math.min(...args);

const mergeObjects=(obj1,obj2)=>({...obj1,...obj2});

const doubleAndReturnArg=(arr,...args)=>[...arr,...args.map(val=>val*2)];

/*Slice and Dice*/

const removeRamdon=items=>{
  let index=Math.floor(Math.random()*items.length);
  return [...items.slice(0,index),...items.slice(index+1)];
}

const extend=(array1,array2)=>[...array1,...array2];

const addKeyVal=(obj,key,val)=>({...obj,[key]:val});

const removeKey=(obj,key)=>{
  let newObj={...obj};
  delete newObj[key];
  return newObj;
}

const combine = (obj1,obj2)=({...obj1,...obj2});

const update = (obj, key, val)=>({...obj,[key]:val});
