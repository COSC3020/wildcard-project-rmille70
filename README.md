[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/tTztJ7yI)
# Wildcard Project

You have a cool idea for an algorithms project? Use this repository. Make sure
to explain what problem you're solving, how you're doing it, and that you test
your code.

## Dijkstra's Approach to Finding Prime Numbers
My older brother Vernon is a computer engineer and programmer with a Ph.D. in physics; he also has a particular fascination with algorithms (needless to say he monopolized all the mathy/brainy genetics). He actually attended UT Austin when Edsger Dijkstra was working as a professor there! Earlier in the semester he introduced me to an algorithm for prime number generation that Dijkstra came up with to balance memory consumption and time complexity. The two most common methods of finding prime numbers is by using the Sieve of Eratosthenes method or Trial Division method, which both have their own tradeoffs. The Sieve of Eratosthenes uses more memory but works quickly; whereas the Trial Division method doesnt use much memory, but works more slowly. This algorithm was Dijkstra's attempt at finding a middle ground between memory consumtion and computation time. 

1) In The Sieve of Eratosthenes method, we create a boolean array of size $n$ where in is our input. Then for numbers greater than 1, if the numbers corresponding boolean value is true, then we add it to our prime numbers array and mark all booleans corresponding to multiples of that number as false. Since no prime numbers are composite numbers, marking multiples as false increasingly narrows the boolean array until it only contains true values corresponding to prime numbers. 

2) In the Trial Division method, we only use $p$ memory space since we dont need store any non-prime numbers. However, we have a linear number of operations $n$. Essentially we must test every number up to $n$ rather than identifying prime numbers based on properties of composite numbers as we did in the Sieve of Eratosthenes method. 

3) In Dijkstra's Method, we use a similar logic to the Sieve of Eratosthenes method. We identify prime numbers based off of properties of composite numbers, but this time we store one value for prime multiples. I recommend watching the youtube video I have linked below for a more detailed description of how this algorithm works, but essentially it only needs $2p$ memory space ( $p$ space for the prime numbers + $p$ space for the prime multiples ). Because of how we are continually updating the prime multiples, we dont need to store all prime multiples up to $n.$

Functionally speaking, Dijkstra's method has a very close runtime to that of Sieve of Eratosthenes. Even though it runs slightly slower, it has a much more reasonable memory complexity and it still runs much faster then the Trial Division method. This is not to say that Dijkstras method of prime number generation is the best; each of these methods have situations where they would be the most efficient. However this is a great example of how to bridge the gap between a fast memory intensive algorithm and a slow memory light algorithm.

Dijkstra's Hidden Prime Finding Algorithm: (https://www.youtube.com/watch?v=fwxjMKBMR7s)