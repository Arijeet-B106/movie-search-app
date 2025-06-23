
const apiKey = "*************************************";// Replace with your actual API key

function searchMovie() {
  const movieName = document.getElementById("movieInput").value.trim();
  const resultDiv = document.getElementById("result");

  if (movieName === "") {
    resultDiv.innerHTML = "<p>Please enter a movie name.</p>";
    return;
  }

  fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(movieName)}&apikey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      if (data.Response === "False") {
        resultDiv.innerHTML = `<p>❌ Movie not found!</p>`;
      } else {
        resultDiv.innerHTML = `
          <h2>${data.Title} (${data.Year})</h2>
          <img src="${data.Poster}" alt="Poster">
          <p><strong>Genre:</strong> ${data.Genre}</p>
          <p><strong>IMDb Rating:</strong> ⭐ ${data.imdbRating}</p>
          <p><strong>Plot:</strong> ${data.Plot}</p>
        `;
      }
    })
    .catch(error => {
      resultDiv.innerHTML = `<p>⚠️ Error fetching data.</p>`;
      console.error("Error:", error);
    });
}
