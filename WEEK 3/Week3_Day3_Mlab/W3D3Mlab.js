//CREATING A VENDING MACHINE THAT IS AN OBJECT WITH THE FOLLOWING CHARACTERISTICS:
// a vending machine is an object
// it has an array of snacks (make 3 snacks)
// snacks are objects that have a name and a price
// a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
// Be able to call vendingMachine.vend() with a valid integer to return a snack

var VendingMachine = {
  snacks: [//THIS IS OUR ARRAY CONSTRUCTOR THAT HAS 3 DIFFERENT ITEMS, AN ARRAY INSIDE AN OBJECT MUST HAVE [{I1},{I2}] TO PULL MULTIPLE DATA ON SAME INDEX
      { name: 'Doritos Diablo',
        price: 1.50,
      },
      { name: 'Takis',
        price: 1.75,
      },
      { name: 'Cheetos',
        price: 0.25
      }
    ],
vend(indexPosition){//THIS FUNCTION VEND WILL CALL THE CONSTRUCTOR SNACK INSIDE OUR VENDING MACHINE
console.log(this.snacks[indexPosition]);
}
}
VendingMachine.vend(0); //THIS WILL CALL THE INDEX NUMBER THAT HAS OUR SNACK
