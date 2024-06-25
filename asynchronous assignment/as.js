document.getElementById('fetchButton').addEventListener('click', 'fetchData');

async function fetchData() {
    const dataBox = document.getElementById('dataBox');
    dataBox.textContent = 'Loading...';

    try {
        const response = await fetch('https://dummyjson.com/posts'); // Replace with your API URL
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        displayData(data);
    } catch (error) {
        dataBox.textContent = 'Error fetching data: ' + error.message;
    }
}

function displayData(data) {
    const dataBox = document.getElementById('dataBox');
    dataBox.innerHTML='';                 // Format data as JSON string
    data.posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        const postTitle = document.createElement('div');
        postTitle.classList.add('post-title');
        postTitle.textContent = `Title: ${post.title}`;

        const postBody = document.createElement('div');
        postBody.classList.add('post-body');
        postBody.textContent = `Body: ${post.body}`;

        postDiv.appendChild(postTitle);
        postDiv.appendChild(postBody);
        dataBox.appendChild(postDiv)
    });
}