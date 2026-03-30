// Constant values
const fuel_gal = 4;
// Initial values
let total = 0;
let maxLoad = 0;
let rent = 0;
let mpg = 0;
// Asked values
let truckType = "";
let distance = "";
let weight = "";

// Counts the total cost based on chosen truck type, distance of the route, and weight of the cargo
function count(){
    truckType = document.getElementById("truckType").value;
    distance = document.getElementById("distance").value;
    weight = document.getElementById("weight").value;

    if(truckType == "" || distance == "" || weight == ""){
        alert("Please, fill out all of these fields!");
    } else {
        if(truckType == "pickup"){
            maxLoad = 1500;
            rent = 20; mpg = 20;
        } else if(truckType == "minivan"){
            maxLoad = 1600;
            rent = 30; mpg = 20;
        } else if(truckType == "van"){
            maxLoad = 2000;
            rent = 45; mpg = 15;
        } else if(truckType == "semi-truck"){
            maxLoad = 100000;
            rent = 70; mpg = 6;
        };

        if(weight > maxLoad){
            alert("Caution! The given weight exceeds the maximum weight that the chosen type could carry!");
        } else {
            total = rent + Math.round((distance / mpg * fuel_gal + weight / 100) * 100) / 100;
            if(total == Math.round(total)){
                alert("$" + total + ".00");
            } else {
                alert("$" + total);
            }
        }
    };
};