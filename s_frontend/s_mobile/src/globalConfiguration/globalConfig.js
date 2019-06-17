"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Routes_1 = require("../mvc/views/components/system/Router/Routes");
/**
 * Which page should be shown on app startup. Please be aware that only screens which have been added to the
 * RouterController.ts can be assigned here.
 */
exports.START_PAGE = Routes_1.routes.DashboardTabScreen;
/** How do we reach our backend API/GraphQL */
exports.BACKEND_URL = "http://10.0.0.22:8090";
