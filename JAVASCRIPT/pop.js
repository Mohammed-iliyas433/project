async function fetchData() {
    try {
        const response = await fetch('https://dummyjson.com/posts');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to render data in cards
async function renderData() {
    const container = document.querySelector('.container');
    const data = await fetchData();

    if (!data) {
        return;
    }

   /* data.foreach(item => {*/
   
        const card = document.createElement('div');
        card.classList.add('card');

        

        const body = document.createElement('p');
        body.textContent = item.body;

        
        card.appendChild(body);
        container.appendChild(card);
   /* });*/
}

// Call the renderData function to display data
renderData();
