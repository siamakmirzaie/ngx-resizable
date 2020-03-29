(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/ngx-resizable/package.json":
/*!*****************************************!*\
  !*** ./dist/ngx-resizable/package.json ***!
  \*****************************************/
/*! exports provided: name, version, description, repository, keywords, author, license, bugs, homepage, main, module, es2015, esm5, esm2015, fesm5, fesm2015, typings, metadata, sideEffects, dependencies, default */
/***/ (function(module) {

module.exports = {"name":"@3dgenomes/ngx-resizable","version":"1.8.1","description":"A Resizable Split-Pane Layout for Angular6+","repository":{"type":"git","url":"git+https://github.com/3DGenomes/ngx-resizable.git"},"keywords":["angular","javascript","typescript","resizable","layout","split","3dgenomes"],"author":"Mike Goodstadt <mikegoodstadt@gmail.com> (http://mikegoodstadt.com)","license":"MIT","bugs":{"url":"https://github.com/3DGenomes/ngx-resizable/issues"},"homepage":"https://3dgenomes.github.io/ngx-resizable/","main":"bundles/3dgenomes-ngx-resizable.umd.js","module":"fesm5/3dgenomes-ngx-resizable.js","es2015":"fesm2015/3dgenomes-ngx-resizable.js","esm5":"esm5/3dgenomes-ngx-resizable.js","esm2015":"esm2015/3dgenomes-ngx-resizable.js","fesm5":"fesm5/3dgenomes-ngx-resizable.js","fesm2015":"fesm2015/3dgenomes-ngx-resizable.js","typings":"3dgenomes-ngx-resizable.d.ts","metadata":"3dgenomes-ngx-resizable.metadata.json","sideEffects":false,"dependencies":{"tslib":"^1.9.0"}};

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" [ngClass]=\"{'cols': cols}\">\r\n  <rsz-layout class=\"row\" [directions]=\"[cells.a]\" [rFlex]=\"true\">\r\n    <rsz-layout class=\"cell one\" [directions]=\"[cells.a1]\" [rFlex]=\"true\">\r\n      <span class=\"icon-big icon_expand-1\"></span>\r\n      <h1>\r\n        <a href=\"https://3dgenomes.github.io/ngx-resizable/\">{{ title }}</a>\r\n      </h1>\r\n      <h4>Version {{version}}</h4>\r\n      <img width=\"150\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\r\n    </rsz-layout>\r\n    <rsz-layout class=\"cell two\" [directions]=\"[cells.a2]\" [rFlex]=\"false\">\r\n      <h3>NGX-Resizable is a slit-pane layout component for workspaces.</h3>\r\n      <p>\r\n        This has been adapted from the <a href=\"https://github.com/11mb/angular-resizable\" target=\"_blank\">@11mb/angular-resizable</a>, itself an Angular2 version of  <a href=\"https://github.com/Reklino/angular-resizable\" target=\"_blank\">@reklino/angular-resizable</a> for AngularJS.\r\n        Similar designs in vanilla JavaScript are <a href=\"https://github.com/RickStrahl/jquery-resizable\" target=\"_blank\">@RickStrahl/jquery-resizable</a> and <a href=\"https://split.js.org/\" target=\"_blank\">Split.js</a> by <a href=\"https://github.com/nathancahill/split/\" target=\"_blank\">@nathancahill</a>.\r\n      </p>\r\n      <p>\r\n        At <a href=\"http://3dgenomes.org\" target=\"_blank\">3DGenomes.org</a> we use NGX-Resizable as one of the layout options for our 3D genomics browser TADkit.\r\n      </p>   \r\n    </rsz-layout>\r\n  </rsz-layout>\r\n  <rsz-layout class=\"row\" [directions]=\"[cells.b]\" [rFlex]=\"false\">\r\n    <rsz-layout class=\"cell three\" [directions]=\"[cells.b1]\" [rFlex]=\"true\">\r\n      <p>An Angular 7+ directive for creating resizable containers.</p>\r\n      <p><a href=\"https://github.com/3dgenomes/ngx-resizable\" target=\"_blank\">GitHub Repo</a></p>\r\n      <button class=\"btn\" (click)=\"toggleDirection()\">Changle Direction</button>\r\n      <p><a href=\"https://stackblitz.com/edit/3dgenomes-ngx-resizable-181\" target=\"_blank\">Stackblitz Demo (horizontal)</a></p>\r\n      <p><a href=\"https://stackblitz.com/edit/3dgenomes-ngx-resizable-vert-181\" target=\"_blank\">Stackblitz Demo (vertical)</a></p>\r\n    </rsz-layout>\r\n    <rsz-layout class=\"cell four\" [directions]=\"[cells.b2]\" [rFlex]=\"false\">\r\n    </rsz-layout>\r\n  </rsz-layout>\r\n  <a href=\"https://github.com/3dgenomes/ngx-resizable\" target=\"_blank\"><img style=\"position: absolute; top: 0; right: 0; border: 0;\" src=\"https://s3.amazonaws.com/github/ribbons/forkme_right_green_007200.png\" alt=\"Fork me on GitHub\"></a>\r\n</div>"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Varela+Round\");\n:host {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n  min-height: 100vh;\n  font-family: \"Varela Round\", \"Helvetica\", sans-serif;\n  color: #343e3d;\n}\nh1 {\n  margin: 0.6em 0;\n}\nh1 a {\n  color: #343e3d;\n  text-decoration: none;\n}\nh2, h3, h4, h5 {\n  margin: 0 0 0.6em;\n}\np {\n  margin: 0.6em 0;\n}\n/* Button reset */\nbutton {\n  padding: 0;\n  border: none;\n  font: inherit;\n  color: inherit;\n  background-color: transparent;\n  /* show a hand cursor on hover; some argue that we\n  should keep the default arrow cursor for buttons */\n  cursor: pointer;\n}\n/* Button component */\n.btn {\n  /* default for <button>, but needed for <a> */\n  display: inline-block;\n  text-align: center;\n  text-decoration: none;\n  font-size: 0.8em;\n  /* create a small space when buttons wrap on 2 lines */\n  margin: 2px 0;\n  /* invisible border (will be colored on hover/focus) */\n  border: solid 1px #607466;\n  border-radius: 4px;\n  /* button size comes from text + padding, avoid height */\n  padding: 0.2em;\n  /* make sure colors have enough contrast! */\n  color: #607466;\n  background-color: white;\n}\n/* old-school \"down\" effect on clic + color tweak */\n.btn:active {\n  -webkit-transform: translateY(1px);\n          transform: translateY(1px);\n  -webkit-filter: saturate(150%);\n          filter: saturate(150%);\n}\n/* inverse colors on hover */\n.btn:hover {\n  color: #7bd389;\n  border-color: currentColor;\n  background-color: #607466;\n}\n/* Firefox: remove the inner border shown on focus */\n.btn::-moz-focus-inner {\n  border: none;\n}\n/* make sure we have a visible focus ring */\n.btn:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px #607466, 0 0 0 1.5px #607466;\n}\n/* hide focus style if not from keyboard navigation */\n.js-focus-visible .btn:focus:not(.focus-visible) {\n  box-shadow: none;\n}\n.icon-big {\n  font-size: 32px;\n  border: 2px dashed #7bd389;\n  color: #7bd389;\n  padding: 10px 11px 10px 10px;\n}\nrsz-layout.cell {\n  padding: 1em 1.75em;\n}\nrsz-layout.cell.one {\n  text-align: center;\n}\nrsz-layout.cell.two {\n  background: #7bd389;\n}\nrsz-layout.cell.three {\n  background: #38e4ae;\n}\nrsz-layout.cell.four {\n  padding: 0;\n  background: no-repeat url(\"https://www.designrush.com/resources/publicdomainarchive//wp-content/uploads/2014/12/public-domain-images-free-stock-photos-high-quality-resolution-downloads-public-domain-archive-7-1000x665.jpg\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXGRldlxcbmd4LXJlc2l6YWJsZS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsbUVBQUE7QUFRUjtFQUNFLGFBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvREFBQTtFQUNBLGNBWk87QUNNVDtBRFFBO0VBQ0UsZUFBQTtBQ0xGO0FET0E7RUFDRSxjQWxCTztFQW1CUCxxQkFBQTtBQ0pGO0FETUE7RUFDRSxpQkFBQTtBQ0hGO0FES0E7RUFDRSxlQUFBO0FDRkY7QURLQSxpQkFBQTtBQUNBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0E7b0RBQUE7RUFFQSxlQUFBO0FDRkY7QURJQSxxQkFBQTtBQUNBO0VBQ0UsNkNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNEQUFBO0VBQ0EsYUFBQTtFQUNBLHNEQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdEQUFBO0VBQ0EsY0FBQTtFQUNBLDJDQUFBO0VBQ0EsY0FyRE87RUFzRFAsdUJBQUE7QUNERjtBREdBLG1EQUFBO0FBQ0E7RUFDRSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtBQ0FGO0FERUEsNEJBQUE7QUFDQTtFQUNFLGNBN0RPO0VBOERQLDBCQUFBO0VBQ0EseUJBakVPO0FDa0VUO0FEQ0Esb0RBQUE7QUFDQTtFQUNFLFlBQUE7QUNFRjtBREFBLDJDQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esa0RBQUE7QUNHRjtBREFBLHFEQUFBO0FBQ0E7RUFDRSxnQkFBQTtBQ0dGO0FEQUE7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQW5GTztFQW9GUCw0QkFBQTtBQ0dGO0FEREE7RUFDRSxtQkFBQTtBQ0lGO0FESEU7RUFDRSxrQkFBQTtBQ0tKO0FESEU7RUFDRSxtQkE1Rks7QUNpR1Q7QURIRTtFQUNFLG1CQTlGSztBQ21HVDtBREhFO0VBQ0UsVUFBQTtFQUNBLCtOQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVZhcmVsYStSb3VuZCcpO1xyXG5cclxuJGNvbG9yMTogIzM0M2UzZDtcclxuJGNvbG9yMjogIzYwNzQ2NjtcclxuJGNvbG9yMzogI2FlZGNjMDtcclxuJGNvbG9yNDogIzdiZDM4OTtcclxuJGNvbG9yNTogIzM4ZTRhZTtcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGZvbnQtZmFtaWx5OiAnVmFyZWxhIFJvdW5kJywgJ0hlbHZldGljYScsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICRjb2xvcjE7XHJcbn1cclxuaDEge1xyXG4gIG1hcmdpbjogMC42ZW0gMDtcclxufVxyXG5oMSBhIHtcclxuICBjb2xvcjogJGNvbG9yMTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuaDIsIGgzLCBoNCwgaDUge1xyXG4gIG1hcmdpbjogMCAwIDAuNmVtO1xyXG59XHJcbnAge1xyXG4gIG1hcmdpbjogMC42ZW0gMDtcclxufVxyXG5cclxuLyogQnV0dG9uIHJlc2V0ICovXHJcbmJ1dHRvbiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udDogaW5oZXJpdDtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAvKiBzaG93IGEgaGFuZCBjdXJzb3Igb24gaG92ZXI7IHNvbWUgYXJndWUgdGhhdCB3ZVxyXG4gIHNob3VsZCBrZWVwIHRoZSBkZWZhdWx0IGFycm93IGN1cnNvciBmb3IgYnV0dG9ucyAqL1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4vKiBCdXR0b24gY29tcG9uZW50ICovXHJcbi5idG4ge1xyXG4gIC8qIGRlZmF1bHQgZm9yIDxidXR0b24+LCBidXQgbmVlZGVkIGZvciA8YT4gKi9cclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDAuOGVtO1xyXG4gIC8qIGNyZWF0ZSBhIHNtYWxsIHNwYWNlIHdoZW4gYnV0dG9ucyB3cmFwIG9uIDIgbGluZXMgKi9cclxuICBtYXJnaW46IDJweCAwO1xyXG4gIC8qIGludmlzaWJsZSBib3JkZXIgKHdpbGwgYmUgY29sb3JlZCBvbiBob3Zlci9mb2N1cykgKi9cclxuICBib3JkZXI6IHNvbGlkIDFweCAkY29sb3IyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAvKiBidXR0b24gc2l6ZSBjb21lcyBmcm9tIHRleHQgKyBwYWRkaW5nLCBhdm9pZCBoZWlnaHQgKi9cclxuICBwYWRkaW5nOiAwLjJlbTtcclxuICAvKiBtYWtlIHN1cmUgY29sb3JzIGhhdmUgZW5vdWdoIGNvbnRyYXN0ISAqL1xyXG4gIGNvbG9yOiAkY29sb3IyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi8qIG9sZC1zY2hvb2wgXCJkb3duXCIgZWZmZWN0IG9uIGNsaWMgKyBjb2xvciB0d2VhayAqL1xyXG4uYnRuOmFjdGl2ZSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XHJcbiAgZmlsdGVyOiBzYXR1cmF0ZSgxNTAlKTtcclxufVxyXG4vKiBpbnZlcnNlIGNvbG9ycyBvbiBob3ZlciAqL1xyXG4uYnRuOmhvdmVyIHtcclxuICBjb2xvcjogJGNvbG9yNDtcclxuICBib3JkZXItY29sb3I6IGN1cnJlbnRDb2xvcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IyO1xyXG59XHJcbi8qIEZpcmVmb3g6IHJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIHNob3duIG9uIGZvY3VzICovXHJcbi5idG46Oi1tb3otZm9jdXMtaW5uZXIge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4vKiBtYWtlIHN1cmUgd2UgaGF2ZSBhIHZpc2libGUgZm9jdXMgcmluZyAqL1xyXG4uYnRuOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCAkY29sb3IyLFxyXG4gICAgMCAwIDAgMS41cHggJGNvbG9yMjtcclxufVxyXG4vKiBoaWRlIGZvY3VzIHN0eWxlIGlmIG5vdCBmcm9tIGtleWJvYXJkIG5hdmlnYXRpb24gKi9cclxuLmpzLWZvY3VzLXZpc2libGUgLmJ0bjpmb2N1czpub3QoLmZvY3VzLXZpc2libGUpIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uaWNvbi1iaWcge1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBib3JkZXI6IDJweCBkYXNoZWQgJGNvbG9yNDtcclxuICBjb2xvcjogJGNvbG9yNDtcclxuICBwYWRkaW5nOiAxMHB4IDExcHggMTBweCAxMHB4O1xyXG59XHJcbnJzei1sYXlvdXQuY2VsbCB7XHJcbiAgcGFkZGluZzogMWVtIDEuNzVlbTtcclxuICAmLm9uZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gICYudHdvIHtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvcjQ7XHJcbiAgfVxyXG4gICYudGhyZWUge1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yNTtcclxuICB9XHJcbiAgJi5mb3VyIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgdXJsKCdodHRwczovL3d3dy5kZXNpZ25ydXNoLmNvbS9yZXNvdXJjZXMvcHVibGljZG9tYWluYXJjaGl2ZS8vd3AtY29udGVudC91cGxvYWRzLzIwMTQvMTIvcHVibGljLWRvbWFpbi1pbWFnZXMtZnJlZS1zdG9jay1waG90b3MtaGlnaC1xdWFsaXR5LXJlc29sdXRpb24tZG93bmxvYWRzLXB1YmxpYy1kb21haW4tYXJjaGl2ZS03LTEwMDB4NjY1LmpwZycpO1xyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1WYXJlbGErUm91bmRcIik7XG46aG9zdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGZvbnQtZmFtaWx5OiBcIlZhcmVsYSBSb3VuZFwiLCBcIkhlbHZldGljYVwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzM0M2UzZDtcbn1cblxuaDEge1xuICBtYXJnaW46IDAuNmVtIDA7XG59XG5cbmgxIGEge1xuICBjb2xvcjogIzM0M2UzZDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5oMiwgaDMsIGg0LCBoNSB7XG4gIG1hcmdpbjogMCAwIDAuNmVtO1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwLjZlbSAwO1xufVxuXG4vKiBCdXR0b24gcmVzZXQgKi9cbmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udDogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAvKiBzaG93IGEgaGFuZCBjdXJzb3Igb24gaG92ZXI7IHNvbWUgYXJndWUgdGhhdCB3ZVxuICBzaG91bGQga2VlcCB0aGUgZGVmYXVsdCBhcnJvdyBjdXJzb3IgZm9yIGJ1dHRvbnMgKi9cbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBCdXR0b24gY29tcG9uZW50ICovXG4uYnRuIHtcbiAgLyogZGVmYXVsdCBmb3IgPGJ1dHRvbj4sIGJ1dCBuZWVkZWQgZm9yIDxhPiAqL1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDAuOGVtO1xuICAvKiBjcmVhdGUgYSBzbWFsbCBzcGFjZSB3aGVuIGJ1dHRvbnMgd3JhcCBvbiAyIGxpbmVzICovXG4gIG1hcmdpbjogMnB4IDA7XG4gIC8qIGludmlzaWJsZSBib3JkZXIgKHdpbGwgYmUgY29sb3JlZCBvbiBob3Zlci9mb2N1cykgKi9cbiAgYm9yZGVyOiBzb2xpZCAxcHggIzYwNzQ2NjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAvKiBidXR0b24gc2l6ZSBjb21lcyBmcm9tIHRleHQgKyBwYWRkaW5nLCBhdm9pZCBoZWlnaHQgKi9cbiAgcGFkZGluZzogMC4yZW07XG4gIC8qIG1ha2Ugc3VyZSBjb2xvcnMgaGF2ZSBlbm91Z2ggY29udHJhc3QhICovXG4gIGNvbG9yOiAjNjA3NDY2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLyogb2xkLXNjaG9vbCBcImRvd25cIiBlZmZlY3Qgb24gY2xpYyArIGNvbG9yIHR3ZWFrICovXG4uYnRuOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xuICBmaWx0ZXI6IHNhdHVyYXRlKDE1MCUpO1xufVxuXG4vKiBpbnZlcnNlIGNvbG9ycyBvbiBob3ZlciAqL1xuLmJ0bjpob3ZlciB7XG4gIGNvbG9yOiAjN2JkMzg5O1xuICBib3JkZXItY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwNzQ2Njtcbn1cblxuLyogRmlyZWZveDogcmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgc2hvd24gb24gZm9jdXMgKi9cbi5idG46Oi1tb3otZm9jdXMtaW5uZXIge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi8qIG1ha2Ugc3VyZSB3ZSBoYXZlIGEgdmlzaWJsZSBmb2N1cyByaW5nICovXG4uYnRuOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4ICM2MDc0NjYsIDAgMCAwIDEuNXB4ICM2MDc0NjY7XG59XG5cbi8qIGhpZGUgZm9jdXMgc3R5bGUgaWYgbm90IGZyb20ga2V5Ym9hcmQgbmF2aWdhdGlvbiAqL1xuLmpzLWZvY3VzLXZpc2libGUgLmJ0bjpmb2N1czpub3QoLmZvY3VzLXZpc2libGUpIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmljb24tYmlnIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBib3JkZXI6IDJweCBkYXNoZWQgIzdiZDM4OTtcbiAgY29sb3I6ICM3YmQzODk7XG4gIHBhZGRpbmc6IDEwcHggMTFweCAxMHB4IDEwcHg7XG59XG5cbnJzei1sYXlvdXQuY2VsbCB7XG4gIHBhZGRpbmc6IDFlbSAxLjc1ZW07XG59XG5yc3otbGF5b3V0LmNlbGwub25lIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxucnN6LWxheW91dC5jZWxsLnR3byB7XG4gIGJhY2tncm91bmQ6ICM3YmQzODk7XG59XG5yc3otbGF5b3V0LmNlbGwudGhyZWUge1xuICBiYWNrZ3JvdW5kOiAjMzhlNGFlO1xufVxucnN6LWxheW91dC5jZWxsLmZvdXIge1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgdXJsKFwiaHR0cHM6Ly93d3cuZGVzaWducnVzaC5jb20vcmVzb3VyY2VzL3B1YmxpY2RvbWFpbmFyY2hpdmUvL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE0LzEyL3B1YmxpYy1kb21haW4taW1hZ2VzLWZyZWUtc3RvY2stcGhvdG9zLWhpZ2gtcXVhbGl0eS1yZXNvbHV0aW9uLWRvd25sb2Fkcy1wdWJsaWMtZG9tYWluLWFyY2hpdmUtNy0xMDAweDY2NS5qcGdcIik7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let AppComponent = class AppComponent {
    constructor() {
        this.cols = false;
        this.cells = {
            a: 'bottom',
            a1: 'right',
            a2: 'right',
            b: 'none',
            b1: 'right',
            b2: 'none'
        };
        this.app = __webpack_require__(/*! ngx-resizable/package.json */ "./dist/ngx-resizable/package.json");
        this.title = this.app.name;
        this.version = this.app.version;
        console.log('Demo of ngx-resizable:', this.version);
    }
    toggleDirection() {
        this.cols = !this.cols;
        if (this.cols) {
            this.cells.a = 'right';
            this.cells.a1 = 'bottom';
            this.cells.b1 = 'bottom';
        }
        else {
            this.cells.a = 'bottom';
            this.cells.a1 = 'right';
            this.cells.b1 = 'right';
        }
    }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _3dgenomes_ngx_resizable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @3dgenomes/ngx-resizable */ "./node_modules/@3dgenomes/ngx-resizable/fesm2015/3dgenomes-ngx-resizable.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _3dgenomes_ngx_resizable__WEBPACK_IMPORTED_MODULE_3__["NgxResizableModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\dev\ngx-resizable\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map