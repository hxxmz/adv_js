let arr = [10,20,50,46,30,6];
let newEl = 2;
let position = 5;


for(let i = arr.length-1; i >=0; i--){

    if(i >= position){

        arr[i+1] = arr[i];
        if(i == position){

            arr[i] = newEl;
        }
    }
}


console.log(arr);


























