const datas = [
    {name:"shery", Profestion:"software engineer"},
    {name:"shery", Profestion:"software engineer"}
];

function getDatas(){
    setTimeout(() =>{
        let output = "";
        datas.forEach((data,index) => {
            output+=`<li>${data.name}</>`;
        })
       document.body.innerHTML=output
    }, 2000);
}


function createdata(newdata){
    return new  Promise((resolve,reject) =>{
        setTimeout(() =>{
            datas.push(newdata);
            let error=false;
            if(!error){
                resolve();
            }else{
                reject("kuch sai nahi ha")
            }
        }, 2000);
    })
   
}
// createdata({name:"Mostafa", Profestion:"software engineer"}).then(getDatas)
 async function start(){
    await createdata({name:"Mostafa", Profestion:"software engineer"})
    getDatas();
 }

 start();