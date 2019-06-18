"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
var TabRoutes_1 = require("../mvc/views/components/system/TabRouter/TabRoutes")
/**
 * Which page should be shown on app startup. Please be aware that only screens which have been added to the
 * RouterController.ts can be assigned here.
 */
exports.START_PAGE = TabRoutes_1.tabRoutes.HomeScreen
/** How do we reach our backend API/GraphQL */
exports.BACKEND_URL = "http://10.0.0.22:8090"
