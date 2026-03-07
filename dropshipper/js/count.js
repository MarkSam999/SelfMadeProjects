// Constant values
const fuel_gal = 3;
// Initial values
let total = 0;
let maxLoad = 0;
let rent = 0;
let mpg = 0;
// Asked values
let truckType = "";
let distance = "";
let weight = "";

// Counts the total cost based on chosen truck type, distance of the route, weight of the cargo, and the federal tax of 10% (the official one is different)
function count(){
    truckType = document.getElementById("truckType").value;
    distance = document.getElementById("distance").value;
    weight = document.getElementById("weight").value;

    if(truckType == "" || distance == "" || weight == ""){
        alert("Please, fill out all of these fields!");
    } else {
        if(truckType == "pickup"){
            maxLoad = 3500;
            rent = 20; mpg = 20;
        } else if(truckType == "van"){
            maxLoad = 4000;
            rent = 50;
        } else if(truckType == "truck"){
            maxWeight = 250000;
            rent = 100;
        };

        total = rent + Math.round(distance * fuel_gal / mpg + (weight / 100) / 100);
        alert(total);
    };
};