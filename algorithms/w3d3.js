function orderedIntersection (sortedA,sortedB){
    // for( let i=0;i<sortedA.length;i++){
    //     for( let i=0;i<sortedA.length;i++)
    //         if (sortedA[i]==sortedB[j] && )

    // }
    const intersection = [...new Set(sortedA.filter(element => sortedB.includes(element)))];
    return intersection
}

console.log(orderedIntersection([0,1,2,2,2,7],[2,2,6,6,7]));