document.addEventListener('DOMContentLoaded', loadLinks);
document.getElementById('linkForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const linkInput = document.getElementById('linkInput');
    const linkValue = linkInput.value;
    
    if (linkValue) {
        addLink(linkValue);
        saveLink(linkValue);
        linkInput.value = '';
    }
});

function addLink(link) {
    const linksList = document.getElementById('linksList');
    const listItem = document.createElement('li');
    const linkElement = document.createElement('a');
    const deleteButton = document.createElement('button');

    linkElement.href = link;
    linkElement.textContent = link;
    linkElement.target = '_blank';
    
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.addEventListener('click', function() {
        removeLink(link);
        linksList.removeChild(listItem);
    });
    
    listItem.appendChild(linkElement);
    listItem.appendChild(deleteButton);
    linksList.appendChild(listItem);
}

function saveLink(link) {
    let links = JSON.parse(localStorage.getItem('links')) || [];
    links.push(link);
    localStorage.setItem('links', JSON.stringify(links));
}

function loadLinks() {
    let links = JSON.parse(localStorage.getItem('links')) || [];
    links.forEach(link => addLink(link));
}

function removeLink(link) {
    let links = JSON.parse(localStorage.getItem('links')) || [];
    links = links.filter(l => l !== link);
    localStorage.setItem('links', JSON.stringify(links));
}
