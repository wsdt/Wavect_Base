import {Badge, Button, Footer, FooterTab, Icon, Text} from "native-base"
import * as React from "react"
import styles from "./BottomTabNavigation.css"


export class BottomTabNavigation extends React.PureComponent<any, any> {

    public render() {
        return <Footer>
            <FooterTab style={styles.footerTab}>
                <Button badge vertical active>
                    <Badge><Text>1</Text></Badge>
                    <Icon name="apps" />
                    <Text>Challenge</Text>
                </Button>

                <Button vertical>
                    <Icon name="camera" />
                    <Text>Einstellungen</Text>
                </Button>
            </FooterTab>
        </Footer>
    }
}