function countWords()
{
    let input=document.getElementById("inputfield").value
    let stt = input.trim()
    let str = stt.split(" ")
    let srr = str.length
    document.getElementById("show").innerHTML = srr + " words";
}