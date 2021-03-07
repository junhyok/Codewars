/*
Personalized greeting
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case                 	return
----------------------------------------
name equals owner	 'Hello boss'
otherwise	         'Hello guest'

*/

// My Solution
function greet(name, owner) {
   // Add code here
   if (name === owner) {
      return "Hello boss";
   } else {
      return "Hello guest";
   }
}

//Better Solution
function greet(name, owner) {
   return name === owner ? "Hello boss" : "Hello guest";
}

/* 
    
    ? 은 조건부(삼항)연산자를 의미한다.

    condition ? exprIfTrue : exprIfFalse
    condition : 값이 조건으로 사용되는 표현식입니다.
    exprIfTrue : condition 가 진실 값으로 평가되면 평가되는 표현식입니다 (같거나로 변환 될 수있는 값 true).
    exprIfFalse : condition가 거짓 인 경우 (즉,로 변환 할 수있는 값 이 있음) 실행되는 표현식입니다 false.

 */
