d3.json("static/js/final.json", function(data) {
    var rType = [];
    var rPrice = [];
    var rZip = []; 

    data.forEach(function(row) {
        rType.push(row.type);
        rPrice.push(row.price);
        rZip.push(row.zip);
        rType.sort();
        rPrice.sort();
        rZip.sort();
        var uniqueType = new Set(rType);
        var uniquePrice = new Set(rPrice);
        var uniqueZip = new Set(rZip);
    })
        for (x=0; x<data.length; x++){
            for (y=0; y<restTypes.count; y++){
                if (row.type === restTypes[y]){
                    restCounts[y] = restCounts[y] +1;
                }
            }

        }
    })
 



        /*var barChart = [{
            x: data.type,
            y: data.rating,
            type: 'bar'
        }
    
        ];
        Plotly.newPlot("panel-bar", [barChart]);
        
        
        }) */

});
