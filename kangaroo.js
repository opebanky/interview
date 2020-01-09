function kangaroo(x1, v1, x2, v2) {

    let output = 'NO';
    for (let i = 0; i < 10000 && output == 'NO'; i++) {
        if (x1 + v1 * i == x2 + v2 * i) {
            output = 'YES';
        }
    }
    
    return output;

}