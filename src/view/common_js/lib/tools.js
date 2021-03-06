"use strict";

exports.initialize_firebase = function () {
  firebase.initializeApp(firebaseConfig);
};

exports.login = function (_email, _psw) {
  return firebase.auth().signInWithEmailAndPassword(_email, _psw);
};

exports.err_log_in = function (err) {
  if (err.message.includes('TOKEN_EXPIRED')) console.log('Error A3, custom token expired:', err);else console.log('Error A2, error in credential from custom token:', err);
};

exports._user_not_valid = function () {
  document.cookie = '__session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/dashboard; sameSite=Strict;';
  window.location.href = '/';
};

exports.retry_fb_db_once = function (num_retry, ms, query, cb, cont, err) {
  if (num_retry === void 0) {
    num_retry = 1;
  }

  if (cont === void 0) {
    cont = 0;
  }

  console.log('c_tools::retry_fb_db_once:', num_retry, ms, query, cb, cont, err);
  var db = firebase.database();
  if (cont >= num_retry) return cb(['reach to limit num_retry', err]);
  db.ref(query).once('value').then(function (snap) {
    if (snap.exists()) {
      return cb([snap, undefined]);
    } else {
      return cb(['not exists', undefined]);
    }
  })["catch"](function (_err) {
    if (typeof ms !== 'undefined') {
      if (ms > 0) setTimeout(function () {
        retry_fb_db_once(num_retry, ms, query, cb, ++cont, _err);
      }, ms);else retry_fb_db_once(num_retry, ms, query, cb, ++cont, _err);
    } else retry_fb_db_once(num_retry, ms, query, cb, ++cont, _err);
  });
};

exports.retry_fb_fr = function (num_retry, ms, promise, callback) {
  promise.then(function (x) {
    if (typeof x.docs !== 'undefined') {
      if (x.docs.length > 0) {
        console.log('retry_fb_fr (if x.docs.length > 0) => x,undefined:', x, undefined);
        callback([x, undefined]);
      } else {
        console.log('retry_fb_fr (if !x.docs.length > 0) => not exists, undefined');
        callback(['not exists', undefined]);
      }
    } else if (typeof x.docs === 'undefined') {
      if (x.exists) {
        console.log('retry_fb_fr (if x.exists) => x, undefined:', x, undefined);
        callback([x, undefined]);
      } else {
        console.log('retry_fb_fr (etc) => exists, undefined');
        callback(['not exists', undefined]);
      }
    }
  })["catch"](function (err) {
    if (num_retry <= 0) {
      console.log('retry_fb_fr (num_retry <= 0) => num_retry, err:', num_retry, err);
      callback(['it can\'t read data from db', err]);
    } else if (typeof ms !== 'undefined' && typeof ms === 'number') {
      console.log('retry_fb_fr (typeof ms !== \'undefined\' && typeof ms === \'number\') => num_retry, err:', num_retry, err);
      setTimeout(function () {
        return retry_fb_fr(--num_retry, ms, promise, callback);
      }, ms);
    } else {
      console.log('retry_fb_fr (etc) => num_retry, err:', num_retry, err);
      retry_fb_fr(--num_retry, ms, promise, callback);
    }
  });
};

var patternSubject2 = /^(?!.*[^0-9a-z\s\!\¡\[\]\*\{\}\^\:\;\#\(\)\\\/\-\.\,\¿\?\"\'\<\>\%\=\á\é\í\ó\ú\ñ\à\è\ì\ò\ù\ü]).{4,280}$/i;
exports.patternSubject = patternSubject2;
var patternNum_ref2 = /^(?!.*[^0-9a-z\s\!\¡\[\]\*\{\}\^\:\;\#\(\)\\\/\-\.\,\¿\?\"\'\<\>\%\=\á\é\í\ó\ú\ñ\à\è\ì\ò\ù\ü]).{4,50}$/i;
exports.patternNum_ref = patternNum_ref2;
var pattern_key2 = /^[a-z0-9\-\_\.]{15,128}$/i;
exports.pattern_key = pattern_key2;
var patternTk2 = /^(?!.*[^0-9a-z\-\_]).{36}$/i;
exports.patternTk = patternTk2;

exports.subject_verf = function (_subject, _limit_min, _limit_max) {
  if (_limit_min === void 0) {
    _limit_min = 4;
  }

  if (_limit_max === void 0) {
    _limit_max = 280;
  }

  return validator.matches(_subject, "^(?!.*[^0-9a-z\\s\\!\\\xA1\\[\\]\\*\\{\\}\\^\\:\\;\\#\\(\\)\\\\\\/\\-\\.\\,\\\xBF\\?\\\"\\'\\<\\>\\%\\=\\\xE1\\\xE9\\\xED\\\xF3\\\xFA\\\xF1\\\xE0\\\xE8\\\xEC\\\xF2\\\xF9\\\xFC]).{" + _limit_min + "," + _limit_max + "}$", 'i');
};

exports.amount_verf = function (_amount) {
  return validator.isCurrency(_amount, {
    allow_negatives: false,
    thousands_separator: '.',
    decimal_separator: ',',
    allow_decimal: true,
    digits_after_decimal: [1, 2]
  });
};

exports.int_verf = function (_amount, _integers) {
  if (_integers === void 0) {
    _integers = 4;
  }

  return validator.whitelist(_amount, '0-9,').split(',')[0].length >= _integers;
};

exports.tk_verf = function (_token) {
  return validator.matches(_token, /^(?!.*[^0-9a-z\-\_]).{36}$/i);
};

exports.key_verf = function (_key) {
  return validator.matches(_key, /^[a-z0-9\-\_\.]{15,128}$/i);
};

exports.cookie_session_verf = function (_session_cookie) {
  return validator.isJWT(_session_cookie);
};

exports.objId = function (rnd) {
  if (rnd === void 0) {
    rnd = function rnd(r16) {
      return Math.floor(r16).toString(16);
    };
  }

  return rnd(Date.now() / 1000) + ' '.repeat(16).replace(/./g, function () {
    return rnd(Math.random() * 16);
  });
};

exports.psw_verf = function (_psw) {
  return validator.matches(_psw, /^(?!.*[^0-9a-z\~\`\!\@\#\$\%\^\&\*\(\)\-\_\+\=\|\}\]\{\[\"\'\:\;\?\/\>\.\<\,\ñ\á\é\í\ó\ú\\]).{16,1024}$/i);
};

exports.login_types = ['login', 'logging', 'login_ok'];