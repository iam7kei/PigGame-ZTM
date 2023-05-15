
function challenge1(a, b, c, d)
{
    const GRAVITY = 9.8;

    let markWeight = a;
    let markHeight =b;
    
    let johnWeight = c;
    let johnHeightt = d;

    let markMass = (markWeight / GRAVITY);
    let johnMass = (johnWeight / GRAVITY);
    
    let markBMI = markMass / markHeight ** 2;
    let johnBMI = johnMass / johnHeightt ** 2;
    
    let markHigherBMI = markBMI > johnBMI
    
    challenge2(markHigherBMI);
}



function challenge2(BMIStatus)
{
    let high = 'John';
    let low = 'Mark'
    
    if (BMIStatus) {
        high = 'Mark';
        low = 'John';
    }

    let output = `${high}'s BMI is higher than ${low}'s!`
    console.log(output);
}

//challenge1(95,1.88,85,1.76);

/* 
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
console.log(21 - 7 + '2'); 
*/

function challenge3(d1,d2,d3,k1,k2,k3)
{
    let dolphinsAverage = (d1 + d2 + d3) / 3
    let koalasAverage = (k1 + k2 + k3) / 3

    dolphinsAverage = Number(dolphinsAverage);
    koalasAverage = Number(koalasAverage);
    let winner = '';
    let output = '';

    if (dolphinsAverage >= 100 && koalasAverage >= 100) 
    {
        if (dolphinsAverage > koalasAverage)
        {
            winner = 'Dolphins';
        } 
        else if (koalasAverage > dolphinsAverage)
        {
            winner = 'Koalas';
        }

        output = `${winner} is the winner`;

        if (koalasAverage === dolphinsAverage)
        {
            output = "It's a draw!";
        }
    }
    else
    {
        output = 'Teams must have have at least 100 score';
    }

    console.log(output);
}

//challenge3(97,112,101,109,95,106);

/* 
const age = 32;
age >= 18 ? console.log('Legal age') : console.log('Underage')

console.log(`My age is ${age >= 18 ? 'Legal age' : 'Underage'}`); 
*/

function challenge4(bill)
{
    let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    
    console.log(`The bill was ${bill}, and the tip was ${tip}, and the total value is ${bill + tip}`);
}

//challenge4(430);