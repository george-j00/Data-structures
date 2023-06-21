function greet(name) {
    console.log("Hello, " + name + "!");
  }
  
  function greetWithExcitement(name) {
    console.log("Hey " + name + ", how's it going?");
    greet(name);
    console.log("Have a great day, " + name + "!");
  }
  
  function main() {
    const name = "John";
    greetWithExcitement(name);
  }
  
  main();
  