const API_URL ="https://efkxfholvuobcwnoibii.supabase.co/rest/v1/allpost?select=*&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVma3hmaG9sdnVvYmN3bm9pYmlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY2OTA2OTEsImV4cCI6MjA0MjI2NjY5MX0.pKPzriTg9s6bJHbBsgjMYaKtEhVQS1JcXyXeObKTUD4";
const postEl = document.querySelector(`#posts`);

fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach(item => showPostsWebView(item))
    })
function showPostsWebView(item = { }){
    const div = document.createElement(`Div`);
    div.innerHTML = `
<div class="card bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h3 class="card-title">${item['Tittle']}</h3>
                        <p class="text-gray-600">Published on: ${item['publishedOn']} by ${item['publishedBy']}</p>
                        <p>${item['content']}</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>
`
    postEl.appendChild(div);
}
