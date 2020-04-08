const express = require("express");
const items = require("./fakeDb");
const app = express();

// JSON
app.use(express.json());
// forms
app.use(express.urlencoded( { extended: true }));


app.get("/items", function(req, res){
    return res.json(items);
});

app.post("/items", function(req, res){
    let newItem = req.body;
    items.push(newItem);
    return res.json({
        "added": newItem
    })
});

app.get("/items/:name", function(req, res){
    let item = findItemName(req.params.name, items);
    return res.json(item);
});


function findItemName(name, arr){
    for(let item of arr){
        if(item.name === name){
            return item;
        }
    }
    console.log("item not found")
}

app.patch("/items/:name", function(req, res){
    let updatedItem = updateItem(req.params.name, items, req.body);
    return res.json({
        "updated": updatedItem
    });
});


function updateItem(name, arr, updater){
    for(let item of arr){
        if(item.name === name){
            for(let key in updater){
                // use key of updater in case updater only has price and no name update
                item[key] = updater[key];
            }
            return item;
        }
    }
    console.log("item not found");
}

app.delete("/items/:name", function(req, res){
    deleteItem(req.params.name, items);
    return res.json({
        "message": "Deleted"
    });
});

function deleteItem(name, arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i].name === name){
            arr.splice(i,1);
            return;
        }
    }
    console.log("item not found")
}   


app.listen(3000, function(){
    console.log("App on port 3000");
});

module.exports = {deleteItem, findItemName, updateItem}