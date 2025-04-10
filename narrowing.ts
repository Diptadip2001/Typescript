const favhobby=(hobby: string | string[]):any => {
    if (typeof hobby === "object" && Array.isArray(hobby)) {
        return hobby.map((hobby) => hobby.toUpperCase());
    } else {
        return hobby.toUpperCase();
    }
}
const hobby1 = favhobby("Reading");
const hobby2 = favhobby(["Reading", "Traveling", "Cooking"]);
console.log(hobby1); // Output: READING
console.log(hobby2); // Output: [ 'READING', 'TRAVELING', 'COOKING' ]