console.log("Medical Store Website Loaded");

{
  /* <script>
  
</script> */
}
const navLinks = document.querySelectorAll(".nav-link");
const currentPage = window.location.pathname.split("/").pop() || "index.html";

navLinks.forEach((link) => {
  const rawHref = link.getAttribute("href") || "";
  const linkPage = rawHref.replace(/^\/+/, "");

  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});
