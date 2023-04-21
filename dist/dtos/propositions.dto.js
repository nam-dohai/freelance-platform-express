"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePropositionDto = exports.CreatePropositionDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class CreatePropositionDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CreatePropositionDto.prototype, "project_id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CreatePropositionDto.prototype, "proponent_id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreatePropositionDto.prototype, "message", void 0);
exports.CreatePropositionDto = CreatePropositionDto;
class UpdatePropositionDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], UpdatePropositionDto.prototype, "project_id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], UpdatePropositionDto.prototype, "proponent_id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], UpdatePropositionDto.prototype, "message", void 0);
exports.UpdatePropositionDto = UpdatePropositionDto;
//# sourceMappingURL=propositions.dto.js.map