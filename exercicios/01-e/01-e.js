
let array1 = [2, 4, 9, 4, 6, 1];
let len = array1.length;
let counter = 0;

for (let i = 0; i < len - 1; i++) {
  for (let j = 0; j < len - 1; j++) {
    if (array1[j] > array1[j + 1]) {
      let temp = array1[j];
      array1[j] = array1[j + 1];
      array1[j + 1] = temp;
    }
    counter++;
  }
}

console.log(array1);
console.log("O loop rodou " + counter + " vezes.");


/*
let numbers = [9,2,33,4,5,6,1 ];
numbers = bubbleSort(numbers);

function bubbleSort(items) {
    let swap;
    let last = items.length - 1;

    do {
      swap = false;
        for (let i = 0; i < last; i++) {
            if (items[i] > items[i + 1]) {
                [items[i], items[i + 1]] = [items[i + 1], items[i]];
                swap = true;
            }
          }
          last--;
        } while (swap);
        return items;
        
      }
    

console.log(numbers);
console.log(contador + " vezes");
*/