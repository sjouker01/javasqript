async function getData() {
    const Url = "https://my-json-server.typicode.com/sjouker01/javasqript/posts";
    
    try {
        const response = await fetch(Url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const posts = await response.json();

        // Loop maken voor post te laten zien
        let htmlContent = '';
        for (let post of posts) {
            htmlContent += `<section>
                                <h2>${post.title}</h2>
                                <p>${post.body}</p>
                            </section>`;
        }
        document.getElementById("data").innerHTML = htmlContent;

    } catch (error) {
        console.log(error.message);
    }
}

getData();