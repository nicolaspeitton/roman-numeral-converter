const button = document.getElementById("convert-btn");
const input = document.getElementById("number");
const output = document.getElementById("output")
input.value="";



function romanConverter (number){
    let arabicNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let romanNumbers= ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    let units=[]
    let resto = number
    for (let i=0; i<13; i++){
        units.push(Math.floor(resto/arabicNumbers[i]))
        resto = resto%arabicNumbers[i]
    }
    let romanNumber=""
    let i = 0
    units.forEach(unit=>{
        romanNumber+=romanNumbers[i].repeat(unit)
        i+=1
    })
    return romanNumber
}



button.onclick = () => {
    if (input.value==="") {
        output.innerHTML="Please enter a valid number"
    } else if (input.value<1) {
        output.innerHTML="Please enter a number greater than or equal to 1"
    } else if (input.value>=4000) {
        output.innerHTML="Please enter a number less than or equal to 3999"
    } else {
        output.innerHTML=romanConverter(input.value);
    }
}



// function romanConverter(number){
//     let romanNumber=""
//     if (number<4){
//         for (let i = 1; i <=number; i++){
//             romanNumber+="I"
//         }
//         return romanNumber;
//     } else if (number=4) {
//         return "IV"
//     }  else if (number=5) {
//         return "V"
//     }  else if (number<9) {
//         for (let i = 6; i <=number; i++){
//             romanNumber+="I"
//         }
//         return romanNumber;

//     }
// }