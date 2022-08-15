console.log("Before calling");



Getdata(1)
 .then((result)=> RetrievingChanel(result.name))
 .then( ([result,ham])=> fellowers(result))
 .then((result)=> {   console.log(result)} )


//Async

//  async function display(){
//    try{
//     const user = await Getdata(2);
//     const retriv = await RetrievingChanel(user.name);
//     const fellowe = await fellowers(retriv[0]);
//     console.log(fellowe);
//    }
//     catch(er){
//         console.log(er)
//     }
// }
// display();



//anonymous function block
// function thirdlevel({name,fellower,subscribers}){
//     console.log(`${name} has ${fellower} and ${subscribers} subscribers`)
// }
// function secondlevel(name,channelseries){
//     console.log("the videos are: "+ channelseries)
      
//     fellowers(name,thirdlevel);
// }
// function firstlevel({name,youtubeInfo}){
//     console.log("User is " + name +"  "+ youtubeInfo)

//  RetrievingChanel(name,secondlevel)

// }

console.log("After calling");



// first functionn
function Getdata(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //some data base stuff
            console.log("Loading User Data ...")
         resolve({id:id, name:"kingsley", youtubeInfo: "software Engineering videos"})
           
        }, 4000)
    }) 
}

//second function

function RetrievingChanel(name){
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log(`Retriving ${name} youtube channel`)
        resolve([name,[["living greatlife"],["being asoftware enginner"],["...."]]])
    },4000)
    
   })
}
// third function
 function fellowers(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`getting ${name} fellowers details ...`)
            resolve({name: name,fellower: 2000, subscribers: 1500})
        }, 4000)
    

    })

}




