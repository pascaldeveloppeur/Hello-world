"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FileService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var FileService = /** @class */ (function () {
    function FileService(httpClient) {
        this.httpClient = httpClient;
        this.httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa('sergeyAlfresco:sergeyAlfresco')
            })
        };
    }
    FileService.prototype.getItems = function () {
        return this.httpClient.get("http://localhost:9194/bcephal-file-manager/browser", this.httpOptions);
    };
    FileService.prototype.fetchPage = function (filter) {
        return this.httpClient.post("http://localhost:9194/bcephal-file-manager/browser-items", filter, this.httpOptions);
    };
    FileService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], FileService);
    return FileService;
}());
exports.FileService = FileService;
