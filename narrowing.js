var favhobby = function (hobby) {
    if (typeof hobby === "object" && Array.isArray(hobby)) {
        return hobby.map(function (hobby) { return hobby.toUpperCase(); });
    }
    else {
        return hobby.toUpperCase();
    }
};
var hobby1 = favhobby("Reading");
var hobby2 = favhobby(["Reading", "Traveling", "Cooking"]);
console.log(hobby1); // Output: READING
console.log(hobby2); // Output: [ 'READING', 'TRAVELING', 'COOKING' ]
