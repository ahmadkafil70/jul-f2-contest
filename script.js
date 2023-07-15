let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
    console.log("All the employees which have the profession of developer using the map function");
    arr.map((element) => {
        if (element.profession === "developer") {
            console.log(element);
        }
    })
}

function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    console.log("All the employees which have the profession of developer using the for each function");
    let ans = [];
    arr.forEach((element) => {
        if (element.profession === "developer") {
            ans.push(element)
        }
    })
    
    ans.forEach((element) => {
        console.log(element)
    })
}

function addData() {
    //Write your code here, just console.log
    console.log("Appended data");
    let newEmployee = {id:4,name:"susan",age:"20",profession:"intern"} ;
    arr.push(newEmployee);

    arr.forEach((element) => {
        console.log(element)
    })
}

function removeAdmin() {
    //Write your code here, just console.log
    console.log("Remove the object where the profession is admin");
    let filteredEmployees = arr.filter(employee => employee.profession !== "admin");
    arr = filteredEmployees;

    arr.forEach((element) => {
        console.log(element)
    })
}

function concatenateArray() {
    //Write your code here, just console.log
    console.log("Concatinated array");
    let newArray = [
        { id: 5, name: "nagesh", age: 28, profession: "admin" },
        { id: 6, name: "shiva", age: 32, profession: "intern" },
        { id: 7, name: "tarun", age: 23, profession: "developer" }
    ];

    const combinedArray = arr.concat(newArray);
    arr = combinedArray;

    arr.forEach((element) => {
        console.log(element)
    })
}