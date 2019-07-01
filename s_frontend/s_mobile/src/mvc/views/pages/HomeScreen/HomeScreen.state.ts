import { Challenge } from "../../../models/Challenge"
import {LoadingStatus} from "../BaseScreen/BaseScreen";

export interface IHomeScreenState {
    challenge: Challenge | undefined
    loadingStatus: LoadingStatus
}
