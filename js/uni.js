
function changeLanguage(action, val) {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $(document).on('click', action, function () {
        var language = val;
        $.ajax({

            type: 'POST',

            url: '/language',

            data: { language: language },

            success: function (data) {
                window.location.reload(true);

            }
        });
    });
}

changeLanguage(".eng", "en");
changeLanguage(".thai", "th");

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
