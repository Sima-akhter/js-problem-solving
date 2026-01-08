// Find the Maximum Number
function findMax(arr) {
    let max = [0];
    for(let i = 1; i<arr.length; i++){
        if(arr[i]> max){
            max = arr[i];
        }
    }
    return max;
}
const result = findMax([5, 1, 9, 3])
console.log(result);