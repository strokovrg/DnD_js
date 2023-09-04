const tokens = document.querySelectorAll('.token');
const cells = document.querySelectorAll('.table td');

let isDragging = false;
let currentToken = null;

tokens.forEach((token) => {
    token.addEventListener('dragstart', (e) => {
        isDragging = true;
        currentToken = e.target;
        e.dataTransfer.setData('text/plain', e.target.id);
        e.target.classList.add('dragging');
    });

    token.addEventListener('dragend', () => {
        isDragging = false;
        currentToken = null;
        token.classList.remove('dragging');
    });
});

cells.forEach((cell) => {
    cell.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    cell.addEventListener('drop', (e) => {
        e.preventDefault();
        if (isDragging) {
            const tokenId = e.dataTransfer.getData('text/plain');
            const token = document.getElementById(tokenId);
            cell.appendChild(token);
            token.style.left = '0';
            token.style.top = '0';
        }
    });
});
