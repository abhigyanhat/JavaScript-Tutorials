for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(`Inner loop value ${i}`);
    {
        for (let j = 0; j <=10; j++) {
            const element = j;
            // console.log(j);
            {
                // console.log(i + '*' + j + '=' + i*j);
            }
            
        }
    }
    
}

let Myarray = ["Abhigyan", "Sanskar", "Anamika"]
//console.log("Superheros are");
//console.log(Myarray.length);

for (let index = 0; index < Myarray.length; index++) {
    const element = Myarray[index];
    //console.log(element);
}