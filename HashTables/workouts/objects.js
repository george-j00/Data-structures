// **** print the values ***** 
// const car = {
//     color: "red",
//     brand: "ford",
//     seats: "5"
// }


// for (const key in car) {
//     console.log(car[key]);
// }



// ***** mul by two **** 
// const values = {
//     a: 10,
//     b: 20,
//     c: "hello"
// }

// for (const key in values) {
//     if (typeof values[key] === "number") {
//        values[key] *= 2 ;
//     }
// }
// console.log(values);


// **** accessing the radius ****

// const radius = {
//     radius: 10,

//     //normla function where `this` pointer points to radius 
//     // diameter(){
//     //     return this.radius * 2;
//     // }

//     diameter: () => {
//         return radius * 2;
//     }

// }
// console.log(radius.diameter());


// ****** destructuring ******* 

// const objects = {
//     name: "george",
//     age: 20,
//     place: "kannur",
//     fullname: {
//         first: "subin",
//         last: "george"
//     }
// }

// ### giving simply fullname : <some name> will change the values in fullname
// ### giving fullname : { first} ie within the curly brackets will again destructure.
// const { fullname:{first} } = objects;

// console.log(first);



