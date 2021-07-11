const getData = async () => {
    
    const response = await fetch("data/game-movies.json");
    const data = await response.json();
    
    return data;
};

getData()
    .then((data) => console.log("resolved:", data));

