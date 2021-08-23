module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/SettingsPage */ "flarum/forum/components/SettingsPage");
/* harmony import */ var flarum_forum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_components_PostUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/components/PostUser */ "flarum/forum/components/PostUser");
/* harmony import */ var flarum_forum_components_PostUser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_PostUser__WEBPACK_IMPORTED_MODULE_3__);




var ccode2 = JSON.parse(localStorage.getItem('codeCountry'));
var fullurl = 'http://purecatamphetamine.github.io/country-flag-icons/3x2/' + ccode2 + '.svg';
flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('justoverclock/country-flags', function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_forum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'settingsItems', function (items) {
    items.add('CountryFlagItem', m('div', {
      className: 'countryItem',
      id: 'inputCcode'
    }, m('label', {
      "for": 'countryCode'
    }, [flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('justoverclock-country-flags.forum.inputCountryCode') + ':', m('select', {
      className: 'FormControl ccode',
      id: 'countryValue'
    }, [m('option', flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('justoverclock-country-flags.forum.clickToSelectCountry') + '  🔽'), m('option', {
      value: 'AF'
    }, 'Afghanistan'), m('option', {
      value: 'AX'
    }, 'Åland Islands'), m('option', {
      value: 'AL'
    }, 'Albania'), m('option', {
      value: 'DZ'
    }, 'Algeria'), m('option', {
      value: 'AS'
    }, 'American Samoa'), m('option', {
      value: 'AD'
    }, 'Andorra'), m('option', {
      value: 'AO'
    }, 'Angola'), m('option', {
      value: 'AI'
    }, 'Anguilla'), m('option', {
      value: 'AQ'
    }, 'Antarctica'), m('option', {
      value: 'AG'
    }, 'Antigua and Barbuda'), m('option', {
      value: 'AR'
    }, 'Argentina'), m('option', {
      value: 'AM'
    }, 'Armenia'), m('option', {
      value: 'AW'
    }, 'Aruba'), m('option', {
      value: 'AU'
    }, 'Australia'), m('option', {
      value: 'AT'
    }, 'Austria'), m('option', {
      value: 'AZ'
    }, 'Azerbaijan'), m('option', {
      value: 'BS'
    }, 'Bahamas'), m('option', {
      value: 'BH'
    }, 'Bahrain'), m('option', {
      value: 'BD'
    }, 'Bangladesh'), m('option', {
      value: 'BB'
    }, 'Barbados'), m('option', {
      value: 'BY'
    }, 'Belarus'), m('option', {
      value: 'BE'
    }, 'Belgium'), m('option', {
      value: 'BZ'
    }, 'Belize'), m('option', {
      value: 'BJ'
    }, 'Benin'), m('option', {
      value: 'BM'
    }, 'Bermuda'), m('option', {
      value: 'BT'
    }, 'Bhutan'), m('option', {
      value: 'BO'
    }, 'Bolivia, Plurinational State of'), m('option', {
      value: 'BQ'
    }, 'Bonaire, Sint Eustatius and Saba'), m('option', {
      value: 'BA'
    }, 'Bosnia and Herzegovina'), m('option', {
      value: 'BW'
    }, 'Botswana'), m('option', {
      value: 'BV'
    }, 'Bouvet Island'), m('option', {
      value: 'BR'
    }, 'Brazil'), m('option', {
      value: 'IO'
    }, 'British Indian Ocean Territory'), m('option', {
      value: 'BN'
    }, 'Brunei Darussalam'), m('option', {
      value: 'BG'
    }, 'Bulgaria'), m('option', {
      value: 'BF'
    }, 'Burkina Faso'), m('option', {
      value: 'BI'
    }, 'Burundi'), m('option', {
      value: 'KH'
    }, 'Cambodia'), m('option', {
      value: 'CM'
    }, 'Cameroon'), m('option', {
      value: 'CA'
    }, 'Canada'), m('option', {
      value: 'CV'
    }, 'Cape Verde'), m('option', {
      value: 'KY'
    }, 'Cayman Islands'), m('option', {
      value: 'CF'
    }, 'Central African Republic'), m('option', {
      value: 'TD'
    }, 'Chad'), m('option', {
      value: 'CL'
    }, 'Chile'), m('option', {
      value: 'CN'
    }, 'China'), m('option', {
      value: 'CX'
    }, 'Christmas Island'), m('option', {
      value: 'CC'
    }, 'Cocos (Keeling) Islands'), m('option', {
      value: 'CO'
    }, 'Colombia'), m('option', {
      value: 'KM'
    }, 'Comoros'), m('option', {
      value: 'CG'
    }, 'Congo'), m('option', {
      value: 'CD'
    }, 'Congo, the Democratic Republic of the'), m('option', {
      value: 'CK'
    }, 'Cook Islands'), m('option', {
      value: 'CR'
    }, 'Costa Rica'), m('option', {
      value: 'CI'
    }, "Côte d'Ivoire"), m('option', {
      value: 'HR'
    }, 'Croatia'), m('option', {
      value: 'CU'
    }, 'Cuba'), m('option', {
      value: 'CW'
    }, 'Curaçao'), m('option', {
      value: 'CY'
    }, 'Cyprus'), m('option', {
      value: 'CZ'
    }, 'Czech Republic'), m('option', {
      value: 'DK'
    }, 'Denmark'), m('option', {
      value: 'DJ'
    }, 'Djibouti'), m('option', {
      value: 'DM'
    }, 'Dominica'), m('option', {
      value: 'DO'
    }, 'Dominican Republic'), m('option', {
      value: 'EC'
    }, 'Ecuador'), m('option', {
      value: 'EG'
    }, 'Egypt'), m('option', {
      value: 'SV'
    }, 'El Salvador'), m('option', {
      value: 'GQ'
    }, 'Equatorial Guinea'), m('option', {
      value: 'ER'
    }, 'Eritrea'), m('option', {
      value: 'EE'
    }, 'Estonia'), m('option', {
      value: 'ET'
    }, 'Ethiopia'), m('option', {
      value: 'FK'
    }, 'Falkland Islands (Malvinas)'), m('option', {
      value: 'FO'
    }, 'Faroe Islands'), m('option', {
      value: 'FJ'
    }, 'Fiji'), m('option', {
      value: 'FI'
    }, 'Finland'), m('option', {
      value: 'FR'
    }, 'France'), m('option', {
      value: 'GF'
    }, 'French Guiana'), m('option', {
      value: 'PF'
    }, 'French Polynesia'), m('option', {
      value: 'TF'
    }, 'French Southern Territories'), m('option', {
      value: 'GA'
    }, 'Gabon'), m('option', {
      value: 'GM'
    }, 'Gambia'), m('option', {
      value: 'GE'
    }, 'Georgia'), m('option', {
      value: 'DE'
    }, 'Germany'), m('option', {
      value: 'GH'
    }, 'Ghana'), m('option', {
      value: 'GI'
    }, 'Gibraltar'), m('option', {
      value: 'GR'
    }, 'Greece'), m('option', {
      value: 'GL'
    }, 'Greenland'), m('option', {
      value: 'GD'
    }, 'Grenada'), m('option', {
      value: 'GP'
    }, 'Guadeloupe'), m('option', {
      value: 'GU'
    }, 'Guam'), m('option', {
      value: 'GT'
    }, 'Guatemala'), m('option', {
      value: 'GG'
    }, 'Guernsey'), m('option', {
      value: 'GN'
    }, 'Guinea'), m('option', {
      value: 'GW'
    }, 'Guinea-Bissau'), m('option', {
      value: 'GY'
    }, 'Guyana'), m('option', {
      value: 'HT'
    }, 'Haiti'), m('option', {
      value: 'HM'
    }, 'Heard Island and McDonald Islands'), m('option', {
      value: 'VA'
    }, 'Holy See (Vatican City State)'), m('option', {
      value: 'HN'
    }, 'Honduras'), m('option', {
      value: 'HK'
    }, 'Hong Kong'), m('option', {
      value: 'HU'
    }, 'Hungary'), m('option', {
      value: 'IS'
    }, 'Iceland'), m('option', {
      value: 'IN'
    }, 'India'), m('option', {
      value: 'ID'
    }, 'Indonesia'), m('option', {
      value: 'IR'
    }, 'Iran, Islamic Republic of'), m('option', {
      value: 'IQ'
    }, 'Iraq'), m('option', {
      value: 'IE'
    }, 'Ireland'), m('option', {
      value: 'IM'
    }, 'Isle of Man'), m('option', {
      value: 'IL'
    }, 'Israel'), m('option', {
      value: 'IT'
    }, 'Italy'), m('option', {
      value: 'JM'
    }, 'Jamaica'), m('option', {
      value: 'JP'
    }, 'Japan'), m('option', {
      value: 'JE'
    }, 'Jersey'), m('option', {
      value: 'JO'
    }, 'Jordan'), m('option', {
      value: 'KZ'
    }, 'Kazakhstan'), m('option', {
      value: 'KE'
    }, 'Kenya'), m('option', {
      value: 'KI'
    }, 'Kiribati'), m('option', {
      value: 'KP'
    }, "Korea, Democratic People's Republic of"), m('option', {
      value: 'KR'
    }, 'Korea, Republic of'), m('option', {
      value: 'KW'
    }, 'Kuwait'), m('option', {
      value: 'KG'
    }, 'Kyrgyzstan'), m('option', {
      value: 'LA'
    }, "Lao People's Democratic Republic"), m('option', {
      value: 'LV'
    }, 'Latvia'), m('option', {
      value: 'LB'
    }, 'Lebanon'), m('option', {
      value: 'LS'
    }, 'Lesotho'), m('option', {
      value: 'LR'
    }, 'Liberia'), m('option', {
      value: 'LY'
    }, 'Libya'), m('option', {
      value: 'LI'
    }, 'Liechtenstein'), m('option', {
      value: 'LT'
    }, 'Lithuania'), m('option', {
      value: 'LU'
    }, 'Luxembourg'), m('option', {
      value: 'MO'
    }, 'Macao'), m('option', {
      value: 'MK'
    }, 'Macedonia, the former Yugoslav Republic of'), m('option', {
      value: 'MG'
    }, 'Madagascar'), m('option', {
      value: 'MW'
    }, 'Malawi'), m('option', {
      value: 'MY'
    }, 'Malaysia'), m('option', {
      value: 'MV'
    }, 'Maldives'), m('option', {
      value: 'ML'
    }, 'Mali'), m('option', {
      value: 'MT'
    }, 'Malta'), m('option', {
      value: 'MH'
    }, 'Marshall Islands'), m('option', {
      value: 'MQ'
    }, 'Martinique'), m('option', {
      value: 'MR'
    }, 'Mauritania'), m('option', {
      value: 'MU'
    }, 'Mauritius'), m('option', {
      value: 'YT'
    }, 'Mayotte'), m('option', {
      value: 'MX'
    }, 'Mexico'), m('option', {
      value: 'FM'
    }, 'Micronesia, Federated States of'), m('option', {
      value: 'MD'
    }, 'Moldova, Republic of'), m('option', {
      value: 'MC'
    }, 'Monaco'), m('option', {
      value: 'MN'
    }, 'Mongolia'), m('option', {
      value: 'ME'
    }, 'Montenegro'), m('option', {
      value: 'MS'
    }, 'Montserrat'), m('option', {
      value: 'MA'
    }, 'Morocco'), m('option', {
      value: 'MZ'
    }, 'Mozambique'), m('option', {
      value: 'MM'
    }, 'Myanmar'), m('option', {
      value: 'NA'
    }, 'Namibia'), m('option', {
      value: 'NR'
    }, 'Nauru'), m('option', {
      value: 'NP'
    }, 'Nepal'), m('option', {
      value: 'NL'
    }, 'Netherlands'), m('option', {
      value: 'NC'
    }, 'New Caledonia'), m('option', {
      value: 'NZ'
    }, 'New Zealand'), m('option', {
      value: 'NI'
    }, 'Nicaragua'), m('option', {
      value: 'NE'
    }, 'Niger'), m('option', {
      value: 'NG'
    }, 'Nigeria'), m('option', {
      value: 'NU'
    }, 'Niue'), m('option', {
      value: 'NF'
    }, 'Norfolk Island'), m('option', {
      value: 'MP'
    }, 'Northern Mariana Islands'), m('option', {
      value: 'NO'
    }, 'Norway'), m('option', {
      value: 'OM'
    }, 'Oman'), m('option', {
      value: 'PK'
    }, 'Pakistan'), m('option', {
      value: 'PW'
    }, 'Palau'), m('option', {
      value: 'PS'
    }, 'Palestinian Territory, Occupied'), m('option', {
      value: 'PA'
    }, 'Panama'), m('option', {
      value: 'PG'
    }, 'Papua New Guinea'), m('option', {
      value: 'PY'
    }, 'Paraguay'), m('option', {
      value: 'PE'
    }, 'Peru'), m('option', {
      value: 'PH'
    }, 'Philippines'), m('option', {
      value: 'PN'
    }, 'Pitcairn'), m('option', {
      value: 'PL'
    }, 'Poland'), m('option', {
      value: 'PT'
    }, 'Portugal'), m('option', {
      value: 'PR'
    }, 'Puerto Rico'), m('option', {
      value: 'QA'
    }, 'Qatar'), m('option', {
      value: 'RE'
    }, 'Réunion'), m('option', {
      value: 'RO'
    }, 'Romania'), m('option', {
      value: 'RU'
    }, 'Russian Federation'), m('option', {
      value: 'RW'
    }, 'Rwanda'), m('option', {
      value: 'BL'
    }, 'Saint Barthélemy'), m('option', {
      value: 'SH'
    }, 'Saint Helena, Ascension and Tristan da Cunha'), m('option', {
      value: 'KN'
    }, 'Saint Kitts and Nevis'), m('option', {
      value: 'LC'
    }, 'Saint Lucia'), m('option', {
      value: 'MF'
    }, 'Saint Martin (French part)'), m('option', {
      value: 'PM'
    }, 'Saint Pierre and Miquelon'), m('option', {
      value: 'VC'
    }, 'Saint Vincent and the Grenadines'), m('option', {
      value: 'WS'
    }, 'Samoa'), m('option', {
      value: 'SM'
    }, 'San Marino'), m('option', {
      value: 'ST'
    }, 'Sao Tome and Principe'), m('option', {
      value: 'SA'
    }, 'Saudi Arabia'), m('option', {
      value: 'SN'
    }, 'Senegal'), m('option', {
      value: 'RS'
    }, 'Serbia'), m('option', {
      value: 'SC'
    }, 'Seychelles'), m('option', {
      value: 'SL'
    }, 'Sierra Leone'), m('option', {
      value: 'SG'
    }, 'Singapore'), m('option', {
      value: 'SX'
    }, 'Sint Maarten (Dutch part)'), m('option', {
      value: 'SK'
    }, 'Slovakia'), m('option', {
      value: 'SI'
    }, 'Slovenia'), m('option', {
      value: 'SB'
    }, 'Solomon Islands'), m('option', {
      value: 'SO'
    }, 'Somalia'), m('option', {
      value: 'ZA'
    }, 'South Africa'), m('option', {
      value: 'GS'
    }, 'South Georgia and the South Sandwich Islands'), m('option', {
      value: 'SS'
    }, 'South Sudan'), m('option', {
      value: 'ES'
    }, 'Spain'), m('option', {
      value: 'LK'
    }, 'Sri Lanka'), m('option', {
      value: 'SD'
    }, 'Sudan'), m('option', {
      value: 'SR'
    }, 'Suriname'), m('option', {
      value: 'SJ'
    }, 'Svalbard and Jan Mayen'), m('option', {
      value: 'SZ'
    }, 'Swaziland'), m('option', {
      value: 'SE'
    }, 'Sweden'), m('option', {
      value: 'CH'
    }, 'Switzerland'), m('option', {
      value: 'SY'
    }, 'Syrian Arab Republic'), m('option', {
      value: 'TW'
    }, 'Taiwan, Province of China'), m('option', {
      value: 'TJ'
    }, 'Tajikistan'), m('option', {
      value: 'TZ'
    }, 'Tanzania, United Republic of'), m('option', {
      value: 'TH'
    }, 'Thailand'), m('option', {
      value: 'TL'
    }, 'Timor-Leste'), m('option', {
      value: 'TG'
    }, 'Togo'), m('option', {
      value: 'TK'
    }, 'Tokelau'), m('option', {
      value: 'TO'
    }, 'Tonga'), m('option', {
      value: 'TT'
    }, 'Trinidad and Tobago'), m('option', {
      value: 'TN'
    }, 'Tunisia'), m('option', {
      value: 'TR'
    }, 'Turkey'), m('option', {
      value: 'TM'
    }, 'Turkmenistan'), m('option', {
      value: 'TC'
    }, 'Turks and Caicos Islands'), m('option', {
      value: 'TV'
    }, 'Tuvalu'), m('option', {
      value: 'UG'
    }, 'Uganda'), m('option', {
      value: 'UA'
    }, 'Ukraine'), m('option', {
      value: 'AE'
    }, 'United Arab Emirates'), m('option', {
      value: 'GB'
    }, 'United Kingdom'), m('option', {
      value: 'US'
    }, 'United States'), m('option', {
      value: 'UM'
    }, 'United States Minor Outlying Islands'), m('option', {
      value: 'UY'
    }, 'Uruguay'), m('option', {
      value: 'UZ'
    }, 'Uzbekistan'), m('option', {
      value: 'VU'
    }, 'Vanuatu'), m('option', {
      value: 'VE'
    }, 'Venezuela, Bolivarian Republic of'), m('option', {
      value: 'VN'
    }, 'Viet Nam'), m('option', {
      value: 'VG'
    }, 'Virgin Islands, British'), m('option', {
      value: 'VI'
    }, 'Virgin Islands, U.S.'), m('option', {
      value: 'WF'
    }, 'Wallis and Futuna'), m('option', {
      value: 'EH'
    }, 'Western Sahara'), m('option', {
      value: 'YE'
    }, 'Yemen'), m('option', {
      value: 'ZM'
    }, 'Zambia'), m('option', {
      value: 'ZW'
    }, 'Zimbabwe')]), m('button', {
      className: 'Button Button--primary ccodebutton',
      id: 'saveCountryCode',
      type: 'submit'
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('justoverclock-country-flags.forum.saveButton'))])) // 10 is the item priority
    );
    items.add('ImgContainerFlag', m('img', {
      className: 'cflag',
      id: 'imgflag',
      src: fullurl,
      width: '50'
    }, 'sdfsdf'));
  });
});
Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_forum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, ['oncreate', 'onupdate'], function () {
  var save_button = document.getElementById('saveCountryCode');
  save_button.onclick = saveCountryCode;

  function saveCountryCode() {
    var input = document.getElementById('countryValue').value;
    localStorage.setItem('codeCountry', JSON.stringify(input));
    var storedValue = localStorage.getItem('codeCountry');
    console.log(JSON.parse(storedValue));
  }
});
Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_forum_components_PostUser__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'view', function (vnode) {
  vnode.children.push(m('img', {
    className: 'cflagPost',
    id: 'imgflag',
    src: fullurl,
    width: '30'
  }, 'sdfsdf'));
});

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/PostUser":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['forum/components/PostUser']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/PostUser'];

/***/ }),

/***/ "flarum/forum/components/SettingsPage":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/SettingsPage']" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/SettingsPage'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map