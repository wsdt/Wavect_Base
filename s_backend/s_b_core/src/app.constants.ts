import * as fs from "fs"
import * as path from "path"

/**
 * Determines on which port the application can be called. Please keep in mind that maybe other
 * applications (e.g. Frontend, db, ...) run on the same machine especially during development!
 */
export const PORT = 8090

/**
 * Paths to server certificate and private key for a secure TLS connection. But keep in mind
 * that the development secrets get pushed to Github (private repo).
 */
export const HTTP2_OPTIONS = {
  cert: fs.readFileSync(
    path.resolve(__dirname, "..", "secrets", "server-cert.pem")
  ),
  key: fs.readFileSync(
    path.resolve(__dirname, "..", "secrets", "server-key.pem")
  )
}

/**
 * Used by CORS Header to only specifically allow access to our frontend accessing our services.
 */
export const CLIENT_WEB = "http://localhost:8080"
