function printReverse(array){

  for(var i = array.length - 1; i >= 0 ; i--){
    console.log(array[i]);
  }
}
printReverse([1,2,3,4]);

// ****isUnform() starts****
function isUniform(array){
  var first = array[0];
  for(var i = 1; i < array.length; i++)
    if(array[i] !== first){
      return false;
    }
    else{
      return true;
    }
}
// **** sumArray() starts here ****
function sumArray(array){
  var total = 0;
  array.forEach(function (element){
    total+=element;
  });
  return total;
}

//**** max() ****

function max(array){
  var maximum= array[0];
  for (var i = 1; i < array.length; i++){
    if(array[i] > maximum){
      maximum = array[i];
    }
  }
  return maximum;
}

// objects exercise selecting from nested arrays and objects
var someObject = {
	friends:[
    {name: "Malfoy" },
		{name: "Crabbe"},
		{name: "Goyle"},
	],
	color: "Baby Blue",
	isEvil: true
};
