const getDataBack = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener("readystatechange", ()=>{
            // console.log(request, request.readyState);
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText);
                resolve(data);
            }
            else if(request.readyState === 4 && request.status === 404){
                reject("Error getting data");
            }
        });

        request.open("GET", resource);
        request.send();

    });    
};

getDataBack("data/favorite-games.json").then((data) => {
    console.log("Promise resolved:", data);
}).catch((err) => {
    console.log("Promise rejected:", err);
});
// -------------Promise example---------------
// const getSomething = () => {
//     return new Promise((resolve, reject) => {
//         //fetch something
//         resolve("some data");

//         //if there is error
//         reject("some error");
//     });

// }

// getSomething().then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// });

