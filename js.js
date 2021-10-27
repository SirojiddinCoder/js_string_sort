
let SIZE = 26;

function printCharWithFreq(str)
{


    let n = str.length;

    let freq = new Array(SIZE);
    for(let i = 0; i < freq.length; i++)
    {
        freq[i] = 0;
    }


    for (let i = 0; i < n; i++)
        freq[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;


    for (let i = 0; i < n; i++) {

        if (freq[str[i].charCodeAt(0) - 'a'.charCodeAt(0)] != 0) {


           console.log(str[i]+(freq[str[i].charCodeAt(0) - 'a'.charCodeAt(0)] + " "));

            freq[str[i].charCodeAt(0) - 'a'.charCodeAt(0)] = 0;
        }
    }
}

let str = "geeksforgeeks";
printCharWithFreq(str);