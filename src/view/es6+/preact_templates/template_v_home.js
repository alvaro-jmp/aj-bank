exports.print = (csrf_tk) => { return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>aj-bank</title><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="calipso" content="${csrf_tk}"><link rel="manifest" href="/manifest.json"><link rel="shortcut icon" href="/assets/img/favicon.ico"><link rel="stylesheet" href="/assets/css/font_manjari.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"><link rel="stylesheet" href="/assets/css/w3.css"><link rel="stylesheet" href="/assets/css/home_style.css"><!-- <link rel="stylesheet" href="/assets/c/loader_spinner.c"> --><!--<script src="https://cdnjs.cloudflare.com/ajax/libs/validator/10.11.0/validator.min.js"></script>--><script src="/assets/js/config_fb.js"></script><script src="/assets/js/fallback.min.js"></script></head><body><div id="div_cont_mini_login" class="w3-display-container" style="margin-top: 16px;"><div id="div_login" class="w3-display-topmiddle w3-card w3-padding custom-card2 w3-margin-top"><form id="form_mini_login" noValidate><h1 class="w3-jumbo w3-center" style="font-family: 'Manjari', sans-serif;">aj-bank</h1><h1>Email</h1><input id="i_email" class="w3-input" type="text" placeholder="Type your email here" name="email" autocomplete="email" maxlength="50" /><h1>Password</h1><input id="i_psw" class="w3-input" type="password" placeholder="Type your password here" name="psw" autocomplete="current-password" maxlength="1024" /><button class="w3-button w3-center w3-block w3-blue w3-hover-teal w3-section w3-padding w3-large" type="button">Log in</button></form></div></div><script defer="defer" src="/assets/js/bundle.e8922.js"></script><script>window.fetch||document.write('<script src="/assets/js/polyfills.c32d0.js"><\\\/script>')</script></body></html>` }