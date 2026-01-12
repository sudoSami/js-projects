const text = document.getElementById('text-input');
const count = document.getElementById('char-count');

text.addEventListener('input', () => {
    if (text.value.length > 50) {
        text.value = text.value.slice(0, 50);
    }

    count.innerText = `Character Count: ${text.value.length}/50`;

    count.style.color = text.value.length >= 50 ? 'red' : 'black';
});
