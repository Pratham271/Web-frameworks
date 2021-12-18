function find_duplicate_in_arraay(array1){
    var object = {};
    var result = {};

    array1.forEach(function(item){
        if(!object[item])
              object[item] = 0;
        object[item]+=1;
    })
        for(var prop in object){
            if(object[prop]>=2){
                // result.Push(prop);                
            }     
            
        }
    return result;
}