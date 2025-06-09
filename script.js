function rolarParaSecao() {
  const secao = document.getElementById("minha-secao");
  if (secao) {
    secao.scrollIntoView({ behavior: "smooth" });
  }
}
