// Function to fetch the API response
async function fetchData() {
  try {
    const response = await fetch(
      "https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=7&apikey=59ba0796152756b87b68fbf9a1c89961"
    );
    const data = await response.json();

    const elements = document.querySelectorAll(".w3-quarter");

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const heading = element.querySelector("h3");
      const image = element.querySelector("img");
      const description = element.querySelector("p");

      // Extract the data from the API response
      const article = data.articles[i];
      const articleTitle = article.title;
      const articleImage = article.image;
      const articleDescription = article.description;

      // Update the HTML content with the retrieved data
      heading.textContent = articleTitle;
      image.src = articleImage;
      description.textContent = articleDescription;
    }
  } catch (error) {
    console.log("Error fetching API data:", error);
  }
}

// Call the fetchData function when the DOM content is loaded
document.addEventListener("DOMContentLoaded", fetchData);
