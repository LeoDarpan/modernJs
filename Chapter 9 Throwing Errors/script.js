const getData = async () => {
    
    const response = await fetch("data/game-movies.json");
    
    if(response.status !== 200){
        throw new Error("Cannot fetch the data");
    }

    const data = await response.json();

    return data;
};

getData()
    .then((data) => console.log("Resolved:", data))
    .catch((err) => console.log("Rejected:", err.message));

