import { IProps_Post } from "../components/Post";
export interface SSE_Post extends Event {
    data: IProps_Post;
}
