function sendQuery() {
    console.log("Button clicked!"); // Check if the function is called

    const userQuery = document.getElementById("userQuery").value;
    const responseDiv = document.getElementById("response");

    if (userQuery === "") {
        responseDiv.innerHTML = "Please enter a question.";
        return;
    }

    const apiKey = 'eb4358e9c43b4fcb819a67863019e1f4'; // Replace with your actual API key
    const url = 'https://api.aimlapi.com/v1/query'; // Replace with actual endpoint

    const payload = {
        query: userQuery,
        api_key: apiKey // Ensure the API is expecting this key format
    };

    // Log payload for debugging
    console.log("Sending payload: ", payload);

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}: ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("API Response: ", data); // Log the response from the API
        if (data && data.response) {
            responseDiv.innerHTML = `AI says: ${data.response}`;
        } else {
            responseDiv.innerHTML = "No response from AI.";
        }
    })
    .catch(error => {
        console.error("Error: ", error); // Log error details to console
        responseDiv.innerHTML = `Error: ${error.message}`;
    });
}
