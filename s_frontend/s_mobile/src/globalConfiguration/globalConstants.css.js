"use strict"
/**
 * IMPORTANT: Encapsulate all styles into components itself. As components are modular too, we do not need to
 * make styles there modular too! This would only have the drawback that we might get styling bugs when changing it
 * for a components.
 *
 * Therefore, only place really universal variables here but not one single class or id!
 * E.g. Colors might be a good choice, everything else should be discussed!
 *
 * Please be aware that no or an empty typescript-declaration file might be generated for this stylesheet as it should not contain
 * any classes or other explicit definitions (only variables).
 */
Object.defineProperty(exports, "__esModule", { value: true })
/** Primary color of application */
exports.primaryColor = "#0275d8"
exports.primaryBackgroundColor = "#fff"
/** E.g. used by nav bar. */
exports.secondaryColor = "#fff"
exports.secondaryBackgroundColor = exports.primaryColor
/** E.g. used by tab bar. */
exports.inactiveColor = exports.secondaryColor
exports.inactiveBackgroundColor = "#46a9fb"
