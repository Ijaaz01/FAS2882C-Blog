document.addEventListener('DOMContentLoaded', function () {
  var tooltips = document.querySelectorAll('.tooltip');

  tooltips.forEach(function (el) {
    el.addEventListener('click', function (e) {
      var isActive = el.classList.contains('active');

      // close any other open tooltips first
      tooltips.forEach(function (t) { t.classList.remove('active'); });

      if (!isActive) {
        el.classList.add('active');
      }

      e.stopPropagation();
    });
  });

  // tap anywhere else on the page closes open tooltips
  document.addEventListener('click', function () {
    tooltips.forEach(function (t) { t.classList.remove('active'); });
  });
});
