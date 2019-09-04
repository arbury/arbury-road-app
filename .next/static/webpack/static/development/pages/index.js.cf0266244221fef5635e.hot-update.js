webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! evergreen-ui */ "./node_modules/evergreen-ui/esm/index.js");
/* harmony import */ var date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/formatDistance */ "./node_modules/date-fns/esm/formatDistance/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "/Users/eoinmurray/arbury/website/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





var client = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/contentful.js").createClient({
  space: "f78m0ezx9pll",
  accessToken: "5QaldVkC4h06im_z0xcaj-IQgAkqYohCVGPEv14fqrU"
});

function HomePage() {
  function fetchContentTypes() {
    return _fetchContentTypes.apply(this, arguments);
  }

  function _fetchContentTypes() {
    _fetchContentTypes = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var types;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return client.getContentTypes();

            case 2:
              types = _context2.sent;

              if (!types.items) {
                _context2.next = 5;
                break;
              }

              return _context2.abrupt("return", types.items);

            case 5:
              console.log('Error getting Content Types.');

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _fetchContentTypes.apply(this, arguments);
  }

  function fetchEntriesForContentType(_x) {
    return _fetchEntriesForContentType.apply(this, arguments);
  }

  function _fetchEntriesForContentType() {
    _fetchEntriesForContentType = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(contentType) {
      var entries;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return client.getEntries({
                content_type: contentType.sys.id
              });

            case 2:
              entries = _context3.sent;

              if (!entries.items) {
                _context3.next = 5;
                break;
              }

              return _context3.abrupt("return", entries.items);

            case 5:
              console.log("Error getting Entries for ".concat(contentType.name, "."));

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _fetchEntriesForContentType.apply(this, arguments);
  }

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      posts = _useState[0],
      setPosts = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    function getPosts() {
      return _getPosts.apply(this, arguments);
    }

    function _getPosts() {
      _getPosts = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var contentTypes, allPosts;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetchContentTypes();

              case 2:
                contentTypes = _context.sent;
                _context.next = 5;
                return fetchEntriesForContentType(contentTypes[0]);

              case 5:
                allPosts = _context.sent;
                setPosts(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(allPosts));

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _getPosts.apply(this, arguments);
    }

    getPosts();
  }, []);
  if (posts.length > 0) console.log(posts[0].fields);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Next.js + Contentful"), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=EB+Garamond&display=swap",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })), __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_4__["Pane"], {
    padding: 40,
    marginX: "auto",
    maxWidth: 600,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_4__["Heading"], {
    marginY: 32,
    color: "black",
    fontSize: 45,
    fontFamily: "EB Garamond",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "The Arburian"), __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_4__["Heading"], {
    marginY: 32,
    color: "black",
    fontSize: 45,
    fontFamily: "EB Garamond",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "A magazine of wealth and taste."), posts.length > 0 ? posts.map(function (p) {
    return __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_4__["Pane"], {
      marginBottom: 40,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_4__["Pane"], {
      width: 600,
      height: 200,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "50% 50%;",
      backgroundImage: "url(".concat(p.fields.heroImage.fields.file.url, ")"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }), __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_4__["Heading"], {
      marginTop: 16,
      color: "black",
      size: 800,
      fontFamily: "EB Garamond",
      fontWeight: 600,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, p.fields.title), __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_4__["Paragraph"], {
      marginY: 16,
      fontFamily: "EB Garamond",
      fontSize: 20,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, p.fields.description), __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_4__["Pane"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_4__["Paragraph"], {
      fontFamily: "EB Garamond",
      fontSize: 16,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, "by ", p.fields.author.fields.name, " ", Object(date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(p.fields.publishDate), new Date(), {
      addSuffix: true
    }))));
  }) : null));
}

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ })

})
//# sourceMappingURL=index.js.cf0266244221fef5635e.hot-update.js.map