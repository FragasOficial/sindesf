
  // Mostra o modal ao carregar a página
  window.onload = function () {
    document.getElementById("modal-construcao").style.display = "flex";
  };

  // Fecha o modal ao clicar no botão
  document.getElementById("fechar-modal").onclick = function () {
    document.getElementById("modal-construcao").style.display = "none";
  };