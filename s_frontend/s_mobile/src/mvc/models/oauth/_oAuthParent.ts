import { notImplementedAsync } from "../../controllers/WarningsController"

export abstract class _oAuthParent {
  public static authenticate = (): Promise<string> => {
    return notImplementedAsync()
  }
}
