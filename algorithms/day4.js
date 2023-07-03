function insertionSort(arr){
    for (let i=1; i<arr.length ; i++){
        for(let j=i-1; j>=0 ;j++){
            if (arr[j]<arr[i]){
                temp = arr[j+1]
                arr[j]= arr[i]
                arr[i]=temp

            }

        }
    }
    return arr

}
const arr1 = [3,5,2,1,0]
console.log(insertionSort(arr1));