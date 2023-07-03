function consecutif(arr,k){
    let sum = [];
    for (let i = 0 , i<arr.length; i++ ){
        const consecNums = []
        let sum = 0
        let j = i 
        while (sum <= k && j<arr.length -1){
            if (sum + arr[j] <= k){
                sum += arr[j];
            }
        }



    }

}