import { btns } from "./headerBtns.js";

const elements = btns.map(e => 
    `<li class="nav-item">
        <a class="nav-link text-dark" href="${e.url}">
            <button class="btn">  
                <i class="fas fa-${e.icon}"></i>${e.name}
            </button>
        </a>
    </li>`
);

const header = 
    `<header>
        <nav style="display: flex; justify-content:space-between;" class="navbar navbar-expand-lg navbar-dark bg-primary">
            <h1><a class="navbar-brand" href="index.html">Posts App with Fetch</a></h1>
            <ul class="nav row justify-content-end">
                ${elements.join(" ")}
            </ul>
        </nav>
    </header>`;

export default header;
