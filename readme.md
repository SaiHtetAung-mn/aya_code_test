#Question 1

##step => 

+take an object
+loop entire input array
+if current word has not the same letter as a key in the object, object is assigned with this word as a key and assign an empty array value
+if current word has same letter as a key in the object, it is pushed into this key's value array of object
+when the loop is done, print the desired result



#Question 2

##step => 
+input string is split into array and converted to an expression array with * delimiter to evaluate reverse function
+evaluate the result expression 

eg. input = foo(foo(bar))blim
+expression array = [ "foo", "foo", "bar", "*", "*", "blim" ]
+result after evaluate expression array = ['foo', 'baroof', 'blim']
+print the result into string
