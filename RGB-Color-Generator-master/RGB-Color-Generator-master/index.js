const redSlider = document.getElementById('redSlider');
const greenSlider = document.getElementById('GreenSlider');
const blueSlider = document.getElementById('BlueSlider');

const redValuespan = document.getElementById('redValue');
const greenValuespan = document.getElementById('GreenValue');
const blueValuespan = document.getElementById('blueValue');

const colorbox= document.getElementById('color-box');
const copyButton= document.getElementById('copyButton');
const inputTypeRGBvalue= document.getElementById('inputType');

redSlider.addEventListener('input',updateColor)
blueSlider.addEventListener('input',updateColor)
greenSlider.addEventListener('input',updateColor)
copyButton.addEventListener('click',copyRGBvalue)

function updateColor(){
    const redValue = redSlider.value;
    const bluevalue= blueSlider.value;
    const greenValue= greenSlider.value;

    // console.log(redValue,greenValue,bluevalue);

    const rgncolor = `rgb(${redValue},${greenValue},${bluevalue})`;
    colorbox.style.backgroundColor = rgncolor;
    redValuespan.textContent = redValue;
    greenValuespan.textContent = greenValue;
    blueValuespan.textContent = bluevalue;

    inputTypeRGBvalue.textContent= rgncolor;

}
function copyRGBvalue(){
    const redValue = redSlider.value;
    const bluevalue= blueSlider.value;
    const greenValue= greenSlider.value;

    const rgncolor = `rgb(${redValue},${greenValue},${bluevalue})`;
    navigator.clipboard.writeText(rgncolor)
    .then(()=>{
        alert("RGB Color value copied to Clipboard"+ rgncolor)
    })
    .catch((error)=>{
        console.error("Failed To copy RGB values",error)
    })
}
