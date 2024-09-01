function isplaindore(str){
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g,'');
    console.log(cleanStr)
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr
}

function plaindoer(){
    const inputText = document.getElementById('inputText');
    const result= document.getElementById('result')

    if(isplaindore(inputText.value)){
        result.textContent =`${inputText.value} is a palindrome` ;

    }else{
        result.textContent = `"${inputText.value}" is Not a Paindrome`;
    }
    result.classList.add('fedIn');
    inputText.value = "";
}

document.getElementById('checkbutton').addEventListener("click",plaindoer);

