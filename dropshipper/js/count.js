// Constant values
const tax = 1.1;
// Initial values
let total = 0;
let maxWeight = 0;
let rent = 0;
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
        alert("Please, fill all of these fields!");
    } else {
        if(truckType == "pickup"){
            maxWeight = 1000;
            rent = 20;
        } else if(truckType == "minivan"){
            maxWeight = 1500;
            rent = 30;
        } else if(truckType == "van"){
            maxWeight = 4000;
            rent = 50;
        } else if(truckType == "semi-truck"){
            maxWeight = 80000;
            rent = 80;
        } else if(truckType == "truck"){
            maxWeight = 250000;
            rent = 100;
        };

        total = rent + (Math.round(weight * distance * tax)) / 100;
        alert(total);
    };
};