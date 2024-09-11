// for loop

//for (let i = 0; i <= 10; i++) {
    //const element = i;
    //if(element == 5){
      //  console.log("5 is a number");
        
    //}
    //console.log(element);
//}


for (let i = 2; i <= 10; i++) {
     //console.log(`outer loop value : ${i}`);
     
    for (let j = 2; j <=10; j++) {
    //console.log(`inner loop value: ${j} and inner loop ${i}`);
    //console.log(i+ '*'+ j + '=' + i*j);
    
    }
}

let  myArray = ["flas", "batmab", "superman"]
//console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
      
}


//-----break and continue---- 

for (let index = 1; index <= 6; index++) {
    if(index == 3){
      //  console.log("detected 3");
       break
    }
    //console.log(`value of i: ${index}`);
    
    
}


for (let index = 1; index <= 6; index++) {
    if(index == 3){
        console.log("detected 3");
        continue
    }
    console.log(`value of i: ${index}`);
    
    
}