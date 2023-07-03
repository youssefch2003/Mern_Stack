function selectionSort(arr){
    for (let i=0;i<arr.length;i++){
        let min = i;
        for (let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min = j;

            }
        }
        
        temp = arr[min]
        arr[min] = arr[i]
        arr[i] = temp
        
    }
    return arr

}

const myArr = [3,2,9,5,1,4,8]
console.log(selectionSort(myArr));
