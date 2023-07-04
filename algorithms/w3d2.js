function twoSums(arr,target){
    const newarr=[]
    for(let i=0;i<arr.length;i++){
        for(let j=1;j<arr.length;j++){
        if(arr[i]+arr[j]==target){
            newarr.push(i)
            newarr.push(j)
            return newarr
        }else {
            continue;
        }
        }
    }

}
console.log(twoSums([2,11,7,15],9));