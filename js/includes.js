document.addEventListener("DOMContentLoaded", () => {
  const components = [
    { selector: "nav", file: "/components/nav-bar.html" },
    { selector: "footer", file: "/components/footer.html" },
  ];

  components.forEach(({ selector, file }) => {
    const element = document.querySelector(selector);
    if (element) {
      fetch(file)
        .then((res) => res.text())
        .then((html) => {
          element.innerHTML = html;
        })
        .catch((err) => console.error(`Error cargando ${file}:`, err));
    }
  });
});
