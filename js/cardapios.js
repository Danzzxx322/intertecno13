// Esconde todos os dias
function esconderTodosDias() {
  const dias = document.querySelectorAll('.day-menu');
  dias.forEach(dia => dia.style.display = 'none');
}

// Mostra o dia selecionado
function mostrarDia(diaId) {
  esconderTodosDias();
  const dia = document.getElementById(diaId);
  if(dia) {
    dia.style.display = 'block';
  }
}

// Inicializa com nenhum dia visível
document.addEventListener('DOMContentLoaded', () => {
  esconderTodosDias();
});

