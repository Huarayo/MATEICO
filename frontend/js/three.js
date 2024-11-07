// Mostrar detalles al hacer clic
document.querySelectorAll('.timelineImpositiva div').forEach(function(item) {
  item.addEventListener('click', () => {
      const details = item.querySelector('.detailsImpositiva');
      if (details.style.display === 'block') {
          details.style.display = 'none';
      } else {
          details.style.display = 'block';
      }
  });
});