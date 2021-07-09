//Day-3 JS Essentials Assignment 3 by Yash Rawat

//Print Palindrome words from a string

let str = "Madam met Naman in the noon "
let str1 = "", str2 = ""
  for (t of str) 
  {
    if (t != " ") 
    {
      str2 = str2 + t
      str1 = t + str1
    }
    else 
    {
      if (str1 == str2) console.log(str1)
      str1 = ""
      str2 = ""
    }
  }
