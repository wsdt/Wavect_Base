import * as express from "express"

import {SSEvent} from "../../models/SSEvent";
import {Post} from "../../models/Post";
const router = express.Router();


router.route("/newsfeed/:userId")
    .get((req, res) => {
        // For testing: User automatically chosen (client submitted id == user.class ID) deswegen users[0]
        setInterval(() => {
                let sse = new SSEvent("new_post",req.params.userId,JSON.stringify(new Post("New post!","descr of new post","31.1.2019","v","noLink"))); // TODO: put here only single post!
                res.write(sse.toString());
        }, 4000);

        /*
        let userId = req.params.userId;
        let count = 0;

        setInterval(() => {
            res.write("event: new_post\n"+
                `id: ${userId}\n`+
                `data: ${JSON.stringify(
                    {
                        title: "Post "+ (count++) +" for "+userId,
                        descr: "This is a description.",
                        media_type: "p",
                        media_url: "http://kevin.com/pic.jpg",
                        upload_datetime: new Date()
                    }
                )}
                \n\n`);
        }, 4000); // send event all x seconds*/

});

export = router