function ChallengeBanner(a){
console.log ("############# " + 'ChallengeBanner' + a + " #############")
}


function challenge1(){
let num = 1
while (num <=5){
    console.log(num)
    num = num + 1
}
}

ChallengeBanner(1);
challenge1();




function challenge2(){
let num = 2
while(num <7 ){
    console.log(num)
    num = num + 1
}
}
ChallengeBanner(2)
challenge2(2, 6)



function challenge3(num1, num2){
    while (num1 <= num2){ 
        if(num1 % 2 !== 0)
        console.log(num1 + ' Odd')
        
        if( num1 % 2 === 0)
        console.log( num1 + ' Even')
        
        num1 = num1 + 1    
    }
}

ChallengeBanner(3)
challenge3(1,7)




function challenge5(){
    let num = 1
    while (num <= 11){
    if(num % 2 === 0){ 
    console.log(num)}
    num = num + 1
    }
}
ChallengeBanner(5)
challenge5()
    


    
function challenge6(){
    let num = 10
    while (num >= 1){
        console.log (num)
        num = num - 1
    }
}
ChallengeBanner(6)
challenge6()




function challenge7(){
    num = 10
    while(num >=1){
        console.log(num + ' Blast off!')
        num = num - 1
    }
}
ChallengeBanner(7)
challenge7()




function challenge8(a){
    while(a > 1){
        console.log(a)
        a = a - 3
    }
}
ChallengeBanner(8)
challenge8(20)




function challenge9(){
    let num =1
    while (num <=7){ 
        console.log(num + '.' + ' Hello!')
        num = num + 1
    }     
}
ChallengeBanner(9)
challenge9(7)




function challenge10(str, num){ 
    while ( num <= 7){
        console.log( num + '. ' + str)
        num = num + 1
    } 
}
ChallengeBanner(10)
challenge10('Something', 1)



function challenge11(str, num){
    let a = 1
    while( a <= num){
        console.log(a + ". " + str)
        a = a + 1
    }
}
ChallengeBanner(11)
//challenge11('Good-bye', 4)
challenge11('Get Out', 6)



function challenge12(str){
    let num = 0
    while ( num <= str.length){
        console.log(str[num])
        num = num + 1
    }
}
ChallengeBanner(12)
challenge12("think")



function challenge13(str){
    num = 1
    while ( num <= str.length){
        console.log(str[num])
        num = num + 2
    }
}
ChallengeBanner(13)
challenge13('Nobody')


function challenge14(str){
    num = str.length
    while( num >= 0){
        console.log(str[num])
        num = num - 1
    }
}
ChallengeBanner(14)
challenge14('Backward')



function challenge15(a){
    num = 1
    while(num <= a){
        console.log(num)
        if (num % 3 === 0 ){ console.log('Fizz')
    }   if (num % 5 === 0 ){ console.log("Buzz")
    }   if (num % 5 === 0 && num % 3 === 0){ console.log('FizzBuzz')
    }
    num = num + 1 
    }
}
ChallengeBanner(15) 
challenge15(15)




function challenge16(n){
   let num1 = 1
   let num2 = 1
   let num = num1 + num2
   console.log(num1)
   console.log(num2)
while( num <= n ){
    console.log(num) 
    num1 = num2
    num2 = num
    num = num1 + num2
}
}
ChallengeBanner(16) 
challenge16(15)




// function replaceChar2(a){ return a.replace( 1 , 'h' ) }
// let resultXO = replaceChar2('1linh')
// console.log(resultXO); hinh

