
init();
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");



button.on("click", handleClick);

// function to handle button click
function handleClick(){
    // prevent console and page reload
    d3.event.preventDefault();
    // clear existing records
    tbody.html("");

    var inputType = d3.select("#selectType");
    var inputPrice = d3.select("#selectPrice");
    var inputZip = d3.select("#selectZip")
    var filterType=inputType.property("value");
    var filterPrice = inputPrice.property("value");
    var filterZip = inputZip.property("value");
    console.log(filterType);
    d3.json("static/js/final.json", function(data) {
        var filterRest = data;
        console.log(filterRest);
       if(filterType){
            filterRest = filterRest.filter(rest => rest.type === filterType);
            console.log(filterRest);
        }

        if (filterPrice){
            filterRest = filterRest.filter(rest => rest.price === filterPrice);
            console.log(filterRest);
        }/*
        if (filterZip){
            filterRest = filterRest.filter(rest => rest.zip === filterZip);
            console.log(filterRest);
        }*/
        console.log(filterRest);
        filterRest.forEach(function(row) {
            var restRow = tbody.append("tr");
            var restName = restRow.append("td").text(row.name);
            var restType = restRow.append("td").text(row.type);
            var restRating = restRow.append("td").text(row.rating);
            var restPrice = restRow.append("td").text(row.price);
            var restAddress = restRow.append("td").text(row.address);
            var restCity    =restRow.append("td").text(row.city);
            var restZip = restRow.append("td").text(row.zip);
            
            })     
        
        
        
            }) 

}

function init(){
    var rType = [];
    var rPrice = [];
    var rZip = [];

    var selectType = d3.select("#selectType");
    var selectPrice = d3.select("#selectPrice");
    var selectZip = d3.select("#selectZip");

    d3.json("static/js/final.json", function(data) {
        console.log(data);
        data.forEach(function(row) {
            rType.push(row.type);
            rPrice.push(row.price);
            rZip.push(row.zip);
            rType.sort();
            rPrice.sort();
            rZip.sort();
            
            }) 
            var uniqueType = new Set(rType);
            var uniquePrice = new Set(rPrice);
            var uniqueZip = new Set(rZip);
            console.log(uniquePrice);
            console.log(uniqueZip);
            uniqueType.forEach((kind)=>{
                selectType
                .append("option")
                .text(kind)
                .property("value", kind);
            });
            uniquePrice.forEach((dollar)=>{
                selectPrice
                .append("option")
                .text(dollar)
                .property("value", dollar);
            });

            uniqueZip.forEach((zips)=>{
                selectZip
                .append("option")
                .text(zips)
                .property("value", zips);
            });

    });
    d3.json("static/js/final.json", function(data) {
        data.forEach(function(row) {
            var restRow = tbody.append("tr");
            var restName = restRow.append("td").text(row.name);
            var restType = restRow.append("td").text(row.type);
            var restRating = restRow.append("td").text(row.rating);
            var restPrice = restRow.append("td").text(row.price);
            var restAddress = restRow.append("td").text(row.address);
            var restCity    =restRow.append("td").text(row.city);
            var restZip = restRow.append("td").text(row.zip);
            
            }) 

    });
}

