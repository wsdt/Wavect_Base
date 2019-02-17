"use strict";
exports.__esModule = true;
/**
 * Server-Url, port and Api-Version (presumably only https supported as we use http2!)
 * https://{SERVER_URL}:{SERVER_PORT}/{API_VERSION}
 *
 * Following API is used by normal REST queries.
 */
exports.API_URL = "https://localhost:8090/api/v1";
exports.SSE_URL = "https://localhost:8090/sse/v1";
