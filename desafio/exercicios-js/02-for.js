var s = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
    var newArray = [];
    // Add your code below this line

    this.forEach(xuxa => {
        if (callback(xuxa)) {
            newArray.push(xuxa)
        }
    });
    return newArray;
};

var new_s = s.myFilter(function (item) {
    return item % 2 === 1;
});

console.log(new_s)