console.log('threeFiveSolver Loaded in!');
// -------------------< Begin Challenge Below >---------------------


function solution(number){
  let sum = 0;

  if(number<0){
    console.log('number was less than zero');
    return 0;
  }  

  console.log('Starting "Five" loop');
  for(let i=0; i<number; i+=5){
    sum += i;
    console.log(`Five: number=${number}, i=${i}, sum is now ${sum}`);
  }

  console.log('Starting "Three" loop');
  for(let i=0; i<number; i+=3){
    if(i % 5 !=0){
      sum += i;
      console.log(`Three: number=${number}, i=${i}, sum is now ${sum}`);
    } else{
      console.log(`${i} is divisible by 5, will not add`);
    }
  }
  console.log('--------- Summation Complete!! -----------');
  return sum;
}