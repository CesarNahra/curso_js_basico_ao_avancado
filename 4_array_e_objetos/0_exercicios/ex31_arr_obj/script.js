let nums = [1, 2, 3, 4, 5, 6];

let nums2 = [1, 2, 3];

function verificaElemento(arr){
    if(arr.length < 5){
        console.log("Poucos elementos");
    } else if(arr.length >= 5){
        console.log("Muitos elementos");
    }
};

verificaElemento(nums);
verificaElemento(nums2);