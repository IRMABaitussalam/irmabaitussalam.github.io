const root = $(document.documentElement);

$('#themeToggle').on('click', function() {
    const themeIcon = $('#themeIcon');

    if (root.attr('dark-theme') !== undefined) {
        root.removeAttr('dark-theme');
        root.attr('light-theme', '');
        themeIcon.removeClass('ti-sun-filled').addClass('ti-moon-filled');
        localStorage.setItem('irmabaitussalam-theme', 'light');
    } else {
        root.removeAttr('light-theme');
        root.attr('dark-theme', '');
        themeIcon.removeClass('ti-moon-filled').addClass('ti-sun-filled');
        localStorage.setItem('irmabaitussalam-theme', 'dark');
    }
});

$(document).ready(function() {
    const themeIcon = $('#themeIcon');
    const savedTheme = localStorage.getItem('irmabaitussalam-theme');

    if (savedTheme === 'dark') {
        root.attr('dark-theme', '');
        themeIcon.removeClass('ti-moon-filled').addClass('ti-sun-filled');
    } else {
        root.attr('light-theme', '');
        themeIcon.removeClass('ti-sun-filled').addClass('ti-moon-filled');
    }

    $('img').on('contextmenu', function(e) {
        e.preventDefault();
    });
});