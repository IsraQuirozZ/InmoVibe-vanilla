document.addEventListener("included", () => {
  const here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".hero-nav a").forEach((a) => {
    const file = a.getAttribute("href");
    if (file === here) a.setAttribute("aria-current", "page");
  });
});
