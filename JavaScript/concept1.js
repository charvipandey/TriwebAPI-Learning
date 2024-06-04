function add()
{
  let sum = 0;
  let arr = Array.from(arguments);
  arr.forEach(element => {
      sum = sum + element;
  });
  console.log(sum);
}
add(2,3,4,5);
add(2,3);
add(1,2,3,4,5,6,7,8,9,10);