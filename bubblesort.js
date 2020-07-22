
let swapCounter = 0
let comparisonCounter = 0
let dummy = 0

function swap(){
    swapCounter++
}

function bubbleSort(arr){
    while(comparisonCounter < arr.length){
        for ( let i = 0; i < arr.length; i++){
            if(arr[i]> arr[i+1]){
            swap(swapCounter)
            dummy = arr[i] 
            arr[i] = arr[i+1]
            arr[i+1] = dummy
            }
        }
        comparisonCounter++  
    }
return arr
}


