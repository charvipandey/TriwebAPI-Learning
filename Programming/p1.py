# basic calculator

c=input("enter the operation")
if(c not in {'+', '-', '*', '/'}):
  print("invalid")
else:
  a=int(input("enter first number"))
  b=int(input("enter second number"))
  if(c=='+'):
    print(a+b)
  elif(c=='-'):
    print(a-b)
  elif(c=='*'):
    print(a*b)
  else:
    print(a/b)