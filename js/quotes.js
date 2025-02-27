$(document).ready(function () {
  $('#navbarNav').on('show.bs.collapse', function () {
    $('#hamburger').addClass('open');
  });
  $('#navbarNav').on('hide.bs.collapse', function () {
    $('#hamburger').removeClass('open');
  });

  $('#search-input').on('keyup', function () {
    let value = $(this).val().toLowerCase();
    let $results = $('#search-results');
    $results.empty();

    if (value.length > 0) {
      $('#clearSearch').show();
    } else {
      $('#clearSearch').hide();
      $results.hide();
      return;
    }

    let filtered = quotes.filter(q =>
      q.title.toLowerCase().includes(value) || q.text.toLowerCase().includes(value) || q.author.toLowerCase().includes(value)
    );
    if (filtered.length === 0) {
      $results.append('<div class="list-group-item">Tidak ditemukan quotes.</div>');
    } else {
      filtered.forEach(item => {
        $results.append(`
          <a href="${item.url}" class="list-group-item list-group-item-action">
            <div>
              <h6 class="mb-1 item-title">${item.title}</h6>
              <p class="mb-1 item-text">${item.text}</p>
              <p class="mb-1 item-author"><i class="ti ti-user"></i> ${item.author}</p>
            </div>
          </a>
        `);
      });
    }
    $results.show();
  });

  $('#clearSearch').on('click', function () {
    $('#search-input').val('');
    $(this).hide();
    $('#search-results').hide();
  });

  $(document).click(function(e) {
    if (!$(e.target).closest('#search-form, #search-results').length) {
      $('#search-results').hide();
    }
  });

});

$('#search-form').on('submit', function(e) {
  e.preventDefault();
});

$('#currentYear').text(new Date().getFullYear());

function getFileSize(url, elementId) {
  $.ajax({
    url: url,
    type: "HEAD",
    success: function(data, textStatus, xhr) {
      let fileSize = xhr.getResponseHeader('Content-Length');
      if (fileSize) {
        let sizeText = formatBytes(fileSize);
        $('#' + elementId).text(sizeText);
      } else {
        $('#' + elementId).text('(Unknown)');
      }
    },
    error: function() {
      $('#' + elementId).text('(Error)');
    }
  });
}

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + " B";
  else if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + " KB";
  else return (bytes / (1024 * 1024)).toFixed(2) + " MB";
}

function closeErrorAlert() {
  $("#error-download").fadeOut();
}