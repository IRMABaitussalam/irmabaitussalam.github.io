function alertDanger(message) {
    return `
                <div class="alert alert-danger alert-dismissible alert-icon mt-2 fade show" role="alert">
                    <i class="ti ti-info-triangle"></i>
                    ${message}
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
    `;
}

function alertSuccess(message) {
    return `
                <div class="alert alert-success alert-dismissible alert-icon mt-2 fade show" role="alert">
                    <i class="ti ti-check"></i>
                    ${message}
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
    `;
}

function checkEmail(inputText) {
    return new RegExp("^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$", "g").test(inputText);
}

function validName(name) {
    return new RegExp("^[\\p{L}\\s'\\-]+$", "u").test(name);
}

function validUsername(user) {
    return new RegExp("^@?(?!\\.)(?![a-z0-9\\._]{1,30}\\.+$)((?!.*[\\.]{2})[a-z0-9\\._]{1,30})$", "g").test(user);
}

function validSchoolName(name) {
    return new RegExp("^[\\p{L}\\s0-9&'\\-]+$", "u").test(name);
}

function showPeriod(period) {
    var team2023 = document.getElementById("team-2023");
    var team2024 = document.getElementById("team-2024");

    if (period === "2023") {
        team2023.style.display = "flex";
        team2024.style.display = "none";
    } else {
        team2023.style.display = "none";
        team2024.style.display = "flex";
    }
}

/**
 * Get current year for footer
 */
$('#currentYear').text(new Date().getFullYear());

/**
 * Navbar menu
 */
$(document).ready(function() {
    const excludedFiles = [
        "syarat-ketentuan.html", "pedoman-komunitas.html", "kebijakan-privasi.html",
        "syarat-ketentuan", "pedoman-komunitas", "kebijakan-privasi",
    ];

    const currentFileName = window.location.pathname.split('/').pop();

    $('#menu-icon').on('click', function() {
        $(this).toggleClass('active');
        $('#navbar-background').toggleClass('active');
    });

    if (!excludedFiles.includes(currentFileName)) {
        $('#submenu').on('click', function() {
            const $submenuContent = $('#submenu-content');

            if ($submenuContent.hasClass('show')) {
                $submenuContent.removeClass('show').addClass('hide');
                $submenuContent.one('animationend', function() {
                    $submenuContent.removeClass('hide');
                });
                $('#submenu').removeClass('active');
            } else {
                $submenuContent.removeClass('hide').addClass('show');
                $('#submenu').addClass('active');
            }
        });

        $('#menu-icon').on('click', function() {
            if ($('#submenu').hasClass('active')) {
                const $submenuContent = $('#submenu-content');
                if ($submenuContent.hasClass('show')) {
                    $submenuContent.removeClass('show').addClass('hide');
                    $submenuContent.one('animationend', function() {
                        $submenuContent.removeClass('hide');
                    });
                    $('#submenu').removeClass('active');
                }
            }
        });
    }
});