const removeFromArray = function(array, ...toRemove) {

    return array.filter((number) => !toRemove.includes(number));
};

// Do not edit below this line
module.exports = removeFromArray;
