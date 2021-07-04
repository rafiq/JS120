function encodeRLE(str) {
    let result = [];
    let currLetter = "";
    let currCount = 1;

    for (let i = 0; i < str.length; i++) {
        currLetter = str[i];

        if (str[i + 1] === currLetter) {
            currCount++;

        } else {
            result.push([currLetter,currCount]);
            currCount = 1;
        }
    }
    return result.map(el => {
        if (el[1] === 1) el[1] = ""
        return el[1] + el[0]
    }).join("")
}

console.log(
    encodeRLE("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB"),//"12WB12W3B24WB"
    encodeRLE("  hsqq qww  "),//"2 hs2q q2w2 "
    encodeRLE("aabbbcccc"),//"2a3b4c"
    encodeRLE("AAA"),//"3A"
)