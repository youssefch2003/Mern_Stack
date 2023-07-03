
const nums1 = [5,3,4,2,1]
function buubleSort(nums){
    for (let i = 0 ; i<nums.length;i++){
        for (let j = 0 ; j<nums.length-1-i;j++)
        
        if( nums[j]>nums[j+1]){
            let temp = nums[j+1]
            nums[j+1]= nums[j]
            nums[j]=temp
        }
    }
    return nums
}
console.log(nums1);
console.log(buubleSort(nums1));
