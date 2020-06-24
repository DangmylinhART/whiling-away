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




function challenge2(start, end){
    while(start <= end){
      console.log(start)
      start = start + 1
    }
}
    ChallengeBanner(2)
    challenge2(2, 6)
    challenge2(-2, 1)

    



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
challenge3(-2,1)




function challenge5(){
    let num = 1
    while (num <= 11){
    if(num % 2 === 0){ 
    console.log(num)}
    num = num + 1
    // or num += 1 
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
        console.log(num)
        num = num - 1
        console.log('Blast off!')
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
    let i = 0
    while ( i<= str.length){
        console.log(str[i])
        // OR const currentCharacter = str[1]
        //    console.log(currentCharacter)
        i++ 
        // OR i = i + 1
    }
}
ChallengeBanner(12)
challenge12("think")



function challenge13(str){
    let i = 1                   // --> use 'Let' NOT 'const' cause challenge12 also has 'i'
    while ( i <= str.length){
        console.log(str[i])
        // OR const currentCharacter = str[1]       // --> 'const' is ok, even challenge12 also has "currentCharacter"
        //    console.log(currentCharacter)
        i = i + 2
    }
}
ChallengeBanner(13)
challenge13('Nobody')


function challenge14(str){
   let i= str.length-1
    while( i >= 0){
        console.log(str[i])
        i --
        // or i = i - 1
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




// function challenge16(n){
//    let num1 = 1
//    let num2 = 1
//    let num = num1 + num2
//    console.log(num1)
//    console.log(num2)
// while( num <= n ){
//     console.log(num) 
//     num1 = num2
//     num2 = num
//     num = num1 + num2
// }
// }
// ChallengeBanner(16) 
// challenge16(15)

function fibonacci(end){
    let current =1
    let previous =1
    console.log ( current);
    while (current<= end){
        console.log(current)
        const temp = current;
        current = current + previous
        previous = temp
    }
}
ChallengeBanner(17) 
fibonacci(17)

// 1,1,2,3,5,8,13,21


// [master eb69870]  finish T_T
//  1 file changed, 213 insertions(+)
