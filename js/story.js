// 1. Declare variables and capture input.
const noun = prompt("Tell me a noun");
const adjective = prompt("Tell me an adjective");
const verb = prompt("Tell me a verb");
const adverb = prompt("Tell me an adverb");
const noun2 = prompt("Tell me another noun");
const adjective2 = prompt("Tell me another adjective");


console.log(adjective + ' ' + noun);

// 2. Combine the input with other words to create a story.

const story = 'There was a' + ' ' + adjective + ' ' + noun + ' ' + 'who loved to' + ' ' + verb + ' ' + adverb + ' ' + 'all over the' + ' ' + adjective2 + ' ' + noun2

console.log(story);

// 3. Display the story as a <p> inside the <main> element.

document.querySelector('p').innerHTML = '&#128514;' + ' ' + story + ' ' + '&#128514;';