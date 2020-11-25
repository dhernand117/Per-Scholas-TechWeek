//////////////PART 1 PRINT NUMBERS FORM 0 TO 20
console.log('PRIME NUMBERS 0 TO 20');
var x = 0;
while (x<=20) {
  if(!(x % 2==0 || x %3 ==0)){console.log(x);}
  if( x ==2 || x == 3){

  console.log(x);
}
  x++;
}

//////////////PART 2 ADD UP NUMBERS FROM 1 TO 20

var x=1;
var y=0;
while (x<=20) {
  y=y+x;
  console.log(x);
  x++;
}console.log(y);

///////////////PART 3 ALL EVEN NUMBERS FROM 1 TO 20
var i =0;
while(i <= 20){
  if(i %2==0)
  console.log(i);
i++;
}
