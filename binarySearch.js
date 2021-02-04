let arr = [];
for(let i = 0; i < 100; i++){
    arr.push(Math.floor(Math.random() * Math.floor(100)));
}

bubbleSort(arr);

function bubbleSort(arr){
    for(let x = 0; x < arr.length; x++){
        for(let z = 0; z < arr.length; z++){
            if(arr[z] > arr[z + 1]){
                let tmp = arr[z + 1];
                arr[z + 1] = arr[z];
                arr[z] = tmp;
            }
        }
    }
    
    let newArr = [...new Set(arr)];
    console.log(newArr);
    let ans = binarySearch(arr, arr[0], arr[arr.length -1], 35);
    console.log(ans);
}


function binarySearch(arr, l, r, t){
    let m = Math.round((l + r)/2);
    if(l > r){
        console.log(" l > r");
        return false;
    }
    else if(arr[m] == t){
        console.log("found target");
        return true;
    }
    else if(arr[m] > t){
        console.log("searching left side of list");
        return binarySearch(arr, l, m-1, t);
    }
    else{
        console.log("searching right side of list");
        return binarySearch(arr, m+1, r, t);
    }
}



