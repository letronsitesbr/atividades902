document.addEventListener("DOMContentLoaded", function() {
    // Adicionar evento de clique para títulos principais
    const titles = document.querySelectorAll('.titulo');
    titles.forEach(title => {
        title.addEventListener('click', function() {
            const tarefas = this.nextElementSibling;
            if (tarefas.style.display === "none" || tarefas.style.display === "") {
                tarefas.style.display = "block";
            } else {
                tarefas.style.display = "none";
            }
        });
    });

    // Adicionar evento de clique para cabecários das tarefas
    const cabecarios = document.querySelectorAll(".cabecario");
    cabecarios.forEach(cabecario => {
        cabecario.addEventListener("click", function() {
            const conteudo = this.nextElementSibling;
            if (conteudo.style.display === "none" || conteudo.style.display === "") {
                conteudo.style.display = "block";
            } else {
                conteudo.style.display = "none";
            }
        });
    });
});
