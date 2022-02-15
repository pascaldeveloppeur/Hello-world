"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TableComponent = void 0;
var core_1 = require("@angular/core");
var TableComponent = /** @class */ (function () {
    function TableComponent(fileService) {
        this.fileService = fileService;
        this.title = 'Liste de fichiers';
        this.totalPage = 0;
        this.pageSizes = [5, 10, 20, 40];
        this.filter = {
            pageSize: 5,
            page: 0
        };
        this.items = [];
    }
    TableComponent.prototype.ngOnInit = function () {
        this.fetchDataPage();
    };
    TableComponent.prototype.fetchDataPage = function () {
        var _this = this;
        this.fileService.fetchPage(this.filter)
            .subscribe(function (data) {
            _this.items = data.items;
            _this.totalPage = data.totalItems / data.pageSize;
            console.log(data);
        });
    };
    TableComponent.prototype.handlePageChange = function (event) {
        this.filter.page = event;
        this.fetchDataPage();
    };
    TableComponent.prototype.handlePageSizeChange = function (event) {
        this.filter.pageSize = event;
        this.fetchDataPage();
    };
    TableComponent = __decorate([
        core_1.Component({
            selector: 'app-file-table',
            templateUrl: './table.component.html',
            styleUrls: ['./table.component.css']
        })
    ], TableComponent);
    return TableComponent;
}());
exports.TableComponent = TableComponent;
