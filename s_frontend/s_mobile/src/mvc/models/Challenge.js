"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
var Challenge = /** @class */ (function() {
    function Challenge(headline, subline, companyLogoUri, majorCategory, bgImage) {
        this.bgImage = bgImage
        this.majorCategory = majorCategory
        this.companyLogoUri = companyLogoUri
        this.subline = subline
        this.headline = headline
    }
    Object.defineProperty(Challenge.prototype, "bgImage", {
        get: function() {
            return this._bgImage
        },
        set: function(value) {
            this._bgImage = value
        },
        enumerable: true,
        configurable: true,
    })
    Object.defineProperty(Challenge.prototype, "majorCategory", {
        get: function() {
            return this._majorCategory
        },
        set: function(value) {
            this._majorCategory = value
        },
        enumerable: true,
        configurable: true,
    })
    Object.defineProperty(Challenge.prototype, "companyLogoUri", {
        get: function() {
            return this._companyLogoUri
        },
        set: function(value) {
            this._companyLogoUri = value
        },
        enumerable: true,
        configurable: true,
    })
    Object.defineProperty(Challenge.prototype, "subline", {
        get: function() {
            return this._subline
        },
        set: function(value) {
            this._subline = value
        },
        enumerable: true,
        configurable: true,
    })
    Object.defineProperty(Challenge.prototype, "headline", {
        get: function() {
            return this._headline
        },
        set: function(value) {
            this._headline = value
        },
        enumerable: true,
        configurable: true,
    })
    return Challenge
})()
exports.Challenge = Challenge
