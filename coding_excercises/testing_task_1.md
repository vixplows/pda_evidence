### Testing task 1 code:

  Carry out static testing on the code below.  
  Read through the code.  Comment any errors you can see without correcting them.

 
def func1 val     ## val should be parameters e.g rename to func1(val)
  if val = 1      ## = needs to be ==
  return true     ## needs to be indented
  else
  return false    ## needs to be indented
  end
end
  
dif max a b       ## a and b should be paramters e.g. rename function to def max(a,b)
  if a > b
      return a    ## too far indented
  else
  b               ## add return before b and indent
  end 
end               ## delete end
end 
  
def looper        
  for i in 1..10
  puts i          ## needs to be indented
  end
end
 
failures = 0 
 
if looper == 10 
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
                    ## add an end to the if / else statement
                    ## this will never do anything but return "looper failed" as the looper function is simply putting ints not counting them.
 
  
if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end 
 
                          
if max(100,1) == 100      
  puts "max(100,1) passed"
else
  puts "func1(3) failed"
  failrues = failures + 1 ## correct spelling of 'failrues' to 'failures'
end                       

  
if failures 
  puts "Test Failed"
else
  puts "Test Passed"
end


