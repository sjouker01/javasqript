async function postData() {
    console.log("postData function called");
    const Url = "https://my-json-server.typicode.com/sjouker01/javasqript/posts";
    const title = document.getElementById("title").value;
    const body = document.getElementById("text-klacht").value;

    console.log("Title:", title);
    console.log("Body:", body);

    const data = {
        title: title,
        body: body
    };

    try {
        const response = await fetch(Url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Success:', result);
        alert('Data successfully sent!');
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to send data.');
    }
}

document.getElementById("sendButton").addEventListener("click", postData);