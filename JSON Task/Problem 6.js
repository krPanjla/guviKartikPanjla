var arr= [[['firstName', 'Vasanth'],
['lastName', 'Raja'],
 ['age', 24], 
 ['role', 'JSWizard']],
  [['firstName', 'Sri'],
   ['lastName', 'Devi'], 
   ['age', 28], 
   ['role', 'Coder']]];
function transformEmployeeData(arr) {
    var tranformEmployeeList = [];
     for(i in arr){
        tranformEmployeeList.push(Object.fromEntries(arr[i]));
     }

 return tranformEmployeeList;
}
console.log(transformEmployeeData(arr));