const form = document.querySelector("#form");
const nameInput = document.querySelector("#web-name");
const urlInput = document.querySelector("#web-url");
const contentContainer = document.querySelector("#content");


function handleSubmit(e) {
    e.preventDefault();

    const bookmark = {
        id: guid(),
        name: nameInput.value,
        url: urlInput.value
    };

    // add only if validated
    if (validateInput(bookmark.name, bookmark.url)) {
        // save data
        saveBookmark(bookmark);
        // reload bookmarks
        fetchBookmarks();

        // clean input
        nameInput.value = "";
        urlInput.value = "";
    } else {
        alert("Input data is no valid");
    }
}

function validateInput(name, url) {
    const urlRegex = "https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)";
    let isValidName = (name.trim() !== "");
    let isValidUrl = (url.match(urlRegex));

    return isValidName && isValidUrl;
}

function fetchBookmarks() {
    // load stored
    const stored = localStorage.getItem("bookmarks");
    if (stored !== null) {
        // if stored exists, parse and create elements
        const savedBookmarks = JSON.parse(stored);
        createBookmarks(savedBookmarks);
    }
}

function saveBookmark(bookmark) {
    let savedBookmarks = [];
    // load stored
    const stored = localStorage.getItem("bookmarks");
    if (stored !== null) {
        // if stored exists, change the clean array for it
        savedBookmarks = JSON.parse(stored);
    }
    // add the new bookmark
    savedBookmarks.push(bookmark);
    
    // save the new list
    localStorage.setItem("bookmarks", JSON.stringify(savedBookmarks));
    createBookmarks(savedBookmarks);
}

function createBookmarks(savedBookmarks) {
    // clean container
    contentContainer.innerHTML = "";
    // map each element
    const bookmarkElements = savedBookmarks.map(e => {
        return  '<div>' +
                    '<h3 id="' + e.id + '">' + e.name + 
                        '<a href="' + e.url + '" target="_blank" class="btn">Visit</a>' +
                        '<button onclick="deleteBookmark(' + "'" + e.id + "'" +')" class="btn btn-danger">Delete</button>' +
                    '</h3>' +
                '</div>';
    });

    // add each to container
    bookmarkElements.forEach(element => contentContainer.innerHTML += element);
}

function deleteBookmark(id) {
    // load bookmarks
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

    // check selected and retrieve its index
    const selected = bookmarks.filter(e => e.id === id)[0];
    const index = bookmarks.indexOf(selected);
    
    // delete selected element
    bookmarks.splice(index, 1);
    
    // save and create bookmarks
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    createBookmarks(bookmarks);
}

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

form.addEventListener("submit", handleSubmit);
window.onload = fetchBookmarks;
