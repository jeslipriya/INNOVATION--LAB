const para = "Iron Man's earliest stories were published in the monster-themed anthology series Tales of Suspense. Marvel premiered several superheroes this way in the 1960s as superhero comics became more popular than traditional science-fiction and horror comics."
const textmatch = para.match(/\bI\w+a\b/g);
console.log(textmatch);

const mobilenumber=8015677176;
const nummatch=/^[0-9]\d{9}/g;
if(nummatch.test(mobilenumber.toString())){
    console.log("Successfully Matched")
}
else{
    console.log("Mismacth Pattern")
}