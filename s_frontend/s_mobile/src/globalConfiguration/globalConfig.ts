import { tabRoutes } from "../mvc/views/components/system/TabRouter/TabRoutes"

/**
 * Which page should be shown on app startup. Please be aware that only screens which have been added to the
 * RouterController.ts can be assigned here.
 */
export const START_PAGE = tabRoutes.HomeScreen

/** How do we reach our backend API/GraphQL */
export const BACKEND_URL = "http://10.0.0.22:8090"
