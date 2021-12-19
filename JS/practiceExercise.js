function stringConcat (separator,...strings)
{
    let returnVal = ' '
    strings.forEach((string,i) => {
         if(i == strings.length-1) {
            returnVal += string;
        }
        else {
            returnVal += string + separator;  
         }
    
    })
    return returnVal;
}



 
console.log(stringConcat('+','this','is','string'));