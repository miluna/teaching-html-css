import header from "./header.js";
import footer from "./footer.js";

const fetchUrl = "https://jsonplaceholder.typicode.com/posts";

function createBody(fetchedContent) {
    
    const mapedContent = fetchedContent.map(e => `   
        <div style="margin-top: 1.5rem; padding: 2rem" class="card">
            <a href="post.html?postId=${e.id}">
                <h2>${e.title}</h2>
            </a>
            <p>${e.body}</p>
        </div>
        
    `);

    const index = `
        <div style="margin-top: 2rem" class="container">
            <h1>Posts</h1>
            ${mapedContent.join(" ")}
        </div>
    `;

    document.body.innerHTML = header + index + footer;
}

function fetchPosts() {
    fetch(fetchUrl)
    .then(res => res.json()
        .then(data => createBody(data)))
    .catch(err => console.log(err))
}

fetchPosts();
