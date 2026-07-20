const isAnagram =(string1, string2) =>{
    console.log(string1.length,string2.length );
    
    if(string1.length!== string2.length){
        throw new Error("Length is not Matched, Is not valid anagram")
    }

    console.log(string1.split("").sort().join(""));
    console.log(string2.split("").sort().join(""));

    
    return string1.split("").sort().join("") === string2.split("").sort().join("")
}


console.log(isAnagram("listen", "silent"))