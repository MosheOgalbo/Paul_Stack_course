
///1
const arrayPossession1 = (indexArra) => {
    const StronglyUp = [];
    for (let prom in indexArra) {
        StronglyUp[prom] = indexArra[prom] ** 2;

    }
    return StronglyUp;
}



const arra1 = [1, 2, 3, -4];
//console.log(arrayPossession1(arra1));

const arrayPossession2 = (indexArra) => {
    return indexArra.map((number) => {
        return number ** 2;
    })
}
//console.log(arrayPossession2(arra1))


///3
///להשלים לא בוצעה
const last = (arr, number) => {
    const nweArr = [];

    for (let i=0 ; number > i  ; i++) {
        nweArr[i]=arr[i]
        
    }
return nweArr;
}

const last2=(arr,number)=>{

    let nweArr = [];
    nweArr = arr.slice(number);
    return number;
}
 
 //console.log(last(arra1));
//console.log(last(arra1,3));
//console.log(last(arra1,6));

console.log(last2(arra1));
console.log(last2(arra1,3));
console.log(last2(arra1,6));
