//Day-3 JS Essentials Assignment 2 By Yash Rawat

// Print Fizz Buzz Program without using mod

for (i=1; i<=100; i++)
{
  a = i / 15
  b = i / 3
  c = i / 5
  if (Number.isInteger(a))
  {
    console.log("FizzBuzz")
  }
  else if (Number.isInteger(b))
  {
    console.log("Fizz")
  }
  else if (Number.isInteger(c))
  {
    console.log("Buzz")
  }
  else
  {
    console.log(i)
  }
}
