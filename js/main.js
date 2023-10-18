//task 1

var name = prompt("What is your name?");

name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

alert("Hello " + name);


//task2

var year = prompt("Enter a year:");

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    alert("Leap year.");
} else {
    alert("Not Leap year.");
}

//task 3
    function chooseLunchBuyer(names) {
        const randomIndex = Math.floor(Math.random() * names.length);
    
        const selectedName = names[randomIndex];
    
        return `${selectedName} is going to buy lunch today.`;
    }
    
    const names = ["Aidana", "Bekbolat", "Mariya", "Aleksandr", "Diana"];
    
    
    const lunchBuyer = chooseLunchBuyer(names);
    

    console.log(lunchBuyer);    

  //task4
    function fibonacci(n) {
        
        var sequence = [0, 1];
    
        for (var i = 2; i < n; i++) {
        var nextNumber = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextNumber);
        }
        return sequence;
    }
    
    var result = fibonacci(8);
    console.log(result); 

