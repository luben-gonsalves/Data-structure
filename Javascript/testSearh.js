export default function textSearch(string, query) {
  if (string.trim() === "" || query.trim() === "") return string;
  const boldChars = Array.from({ length: string.length }, () => 0);

  for (let i = 0; i < string.length; ) {
    const substr = string.slice(i, i + query.length);
    if (substr.toLowerCase() === query.toLowerCase()) {
      boldChars.fill(1, i, i + query.length);
      // Start from next character if there's a match since one
      // character cannot match the same query more than once.
      i = i + query.length;
    } else {
      i++;
    }
  }

  let highlightedString = "";
  for (let i = 0; i < string.length; i++) {
    // When the current character should be bolded
    // and the previous character should not be bolded,
    // append an opening tag to the final string.
    const shouldAddOpeningTag = boldChars[i] === 1 && boldChars[i - 1] !== 1;
    // When the current character should be bolded
    // and the next character should not be bolded,
    // append a closing tag to the final string.
    const shouldCloseOpeningTag = boldChars[i] === 1 && boldChars[i + 1] !== 1;
    let char = string[i];
    if (shouldAddOpeningTag) char = "<b>" + char;
    if (shouldCloseOpeningTag) char = char + "</b>";
    highlightedString += char;
  }

  return highlightedString;
}

textSearch("The Quick Brown Fox Jumps Over The Lazy Dog", "fox");
// 'The Quick Brown <b>Fox</b> Jumps Over The Lazy Dog'
textSearch("The hardworking Dog overtakes the lazy dog", "dog");
// 'The hardworking <b>Dog</b> overtakes the lazy <b>dog</b>'
