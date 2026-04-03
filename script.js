function pickMovie() {
  const movies = [
    "Interstellar 🚀",
    "La La Land 🎹",
    "Coco 🎸",
    "Inception 🌀",
    "Shrek 🐸",
    "The Notebook 💌"
  ];

  const randomIndex = Math.floor(Math.random() * movies.length);
  document.getElementById("result").innerText =
    "Tonight you should watch: " + movies[randomIndex];
}

function pickMoodMovie(mood) {
  let movie = "";

  if (mood === "happy") {
    movie = "Shrek 🐸";
  } else if (mood === "romantic") {
    movie = "The Notebook 💌";
  } else if (mood === "mindblowing") {
    movie = "Inception 🌀";
  } else if (mood === "cozy") {
    movie = "Coco 🎸";
  }

  document.getElementById("result").innerText =
    "Based on your mood, you should watch: " + movie;
}