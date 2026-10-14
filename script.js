const itens = document.querySelectorAll('.item');
const mochila = document.getElementById('completo');
const statusText = document.getElementById('status');

//Inicio dragstart

itens.forEach(item => {
    item.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
    });
});

//Inicio dragover
mochila.addEventListener('dragover', (e) => {
    e.preventDefault();
    mochila.classList.add('over');
});

//dragleave
mochila.addEventListener('dragleave', () => {
    mochila.classList.remove('over');
});

//Inicio do drop
mochila.addEventListener('drop', (e) => {
    e.preventDefault();
    mochila.classList.remove('over');

    const id = e.dataTransfer.getData('text/plain');
    const itemMovido = document.getElementById(id);

    if (itemMovido) {
        mochila.appendChild(itemMovido);
        statusText.textContent = `Equipado: ${itemMovido.innerText}`;
    }
});