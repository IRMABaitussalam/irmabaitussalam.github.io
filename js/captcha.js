function generateCaptcha(element) {
    const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$@#*:;!?&-+()/=';

    let captcha = '';
    for (let i = 0; i < 6; i++) {
        captcha += alpha[Math.floor(Math.random() * alpha.length)];
    }

    $(element).html(`<h1 class="text-center captcha">${captcha}</h1>`); 
    $(element).val(captcha);

    return false;
};