import * as React from "react"
import {GetStreamParent} from "../components/stateful/GetStreamParent/GetStreamParent"
import {BaseScreen} from "./BaseScreen/BaseScreen"

// <Header leftComponent={<BeKindIcon width={30} height={30} />} centerComponent={{text: "Authentication", style: {color: "#fff"}}} containerStyle={p(styleBase.header)}/>

export class ProfileScreen extends React.Component<any, any> {

    // TODO: Create top nav navigator (tabbed activity)
    public render(): React.ReactNode {
        /* Pass all props down to child component (e.g. navigation props! as screen is rendered)! */
        /* TODO: Real ID from our db*/
        return (
            <BaseScreen>
                <GetStreamParent {...this.props} userId="ERROR"/>
            </BaseScreen>
        )
    }
}
