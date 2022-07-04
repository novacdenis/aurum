const URI = "http://localhost:3000/api/token";

async function generateToken() {
  try {
    const response = await fetch(URI, {
      method: "POST",
      body: JSON.stringify({
        email: "gob@bluth.com",
        firstName: "Gob",
        lastName: "Bluth",
      }),
      headers: {
        Accept: "aplication/json",
        "Content-Type": "aplication/json",
      },
    });

    const data = await response.json();

    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
}

async function onConversationsAPIReady() {
  try {
    const response = await generateToken();

    if (response.token) {
      window.hsConversationsSettings = {
        identificationEmail: "gob@bluth.com",
        identificationToken: response.token,
      };
    }
  } catch (error) {
    console.log(error, "Could not indentify user");
  }
}

window.hsConversationsSettings = {};

if (window.HubSpotConversations) {
  onConversationsAPIReady();
} else {
  window.hsConversationsOnReady = [onConversationsAPIReady];
}
