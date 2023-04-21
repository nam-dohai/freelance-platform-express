"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOfferDto = exports.CreateOfferDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class CreateOfferDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CreateOfferDto.prototype, "project_id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CreateOfferDto.prototype, "proponent_id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateOfferDto.prototype, "message", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CreateOfferDto.prototype, "price", void 0);
exports.CreateOfferDto = CreateOfferDto;
class UpdateOfferDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], UpdateOfferDto.prototype, "project_id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], UpdateOfferDto.prototype, "proponent_id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], UpdateOfferDto.prototype, "message", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], UpdateOfferDto.prototype, "price", void 0);
exports.UpdateOfferDto = UpdateOfferDto;
//# sourceMappingURL=offers.dto.js.map