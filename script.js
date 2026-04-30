// Convert all <li> with data-markdown="true" using Marked.js
document.querySelectorAll('li[data-markdown="true"]').forEach(item => {
    const markdownText = item.textContent;
    item.innerHTML = marked.parse(markdownText);
});