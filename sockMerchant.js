var arr = [2,3,3,3,2,5,3,5,5,5,5,5];

function sockMerchant(n, ar){
    var count = 0;
    let a = [], b = [], prev;
    arr.sort();
    for (let i = 0; i < n; i++) {
        if (arr[i] !== prev) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length - 1]++;
        }
        prev = arr[i];

    }

    for(var k=0; k<b.length; k++){
        var newfinal = b[k]/2;
        var floored = Math.floor(newfinal);
        count += floored;
    }


    return count;
}

// sockMerchant(arr.length, arr);
console.log(sockMerchant(arr.length, arr));
