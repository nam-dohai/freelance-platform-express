"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProjectCategoryDto = exports.CreateProjectCategoryDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class CreateProjectCategoryDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CreateProjectCategoryDto.prototype, "name", void 0);
exports.CreateProjectCategoryDto = CreateProjectCategoryDto;
class UpdateProjectCategoryDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], UpdateProjectCategoryDto.prototype, "name", void 0);
exports.UpdateProjectCategoryDto = UpdateProjectCategoryDto;
//# sourceMappingURL=projectCategories.dto.js.map