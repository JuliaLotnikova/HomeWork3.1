function printNumbers(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || a > b) {
      console.log("Некорректные значения a и b");
      return;
    }
    
    for (let i = a; i <= b; i++) {
      console.log(i);
    }
  }
  
  printNumbers(3, 5);
  