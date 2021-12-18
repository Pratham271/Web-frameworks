function addRecord(){
    var item = new Item();

    for(let i in item){
        item[i]=document.querySelector("#"+i).value;
    }
    itemOperations.add(item);
    printTable();
}
function printTable(){
    console.log(itemOperations.items);
    var tbd = document.querySelector("#tbd");
    for(let j = 0; j<itemOperations.items.length;j++){
        var trow = tbd.insertRow();
        for(let key in itemOperations.items[j]){
            var cell = trow.insertCell();
            cell.innerText = itemOperations.items[j][key];
        }
    }  
}