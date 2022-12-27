const removeFromArray = function(workingArray, ...toRemove) {
    let loopArray = workingArray;

for (const args of toRemove)
{
    for(let i = 0; i < workingArray.length; i++)
    {
        if (workingArray[i] === args)
        {
            loopArray.splice(i,1);
        }
    }
}
    return loopArray;

};

// Do not edit below this line
module.exports = removeFromArray;
