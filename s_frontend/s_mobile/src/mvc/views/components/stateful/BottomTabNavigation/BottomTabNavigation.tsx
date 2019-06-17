import {Badge, Button, Container, Content, Footer, FooterTab, Icon, Text} from "native-base"
import * as React from "react"
import styles from "./BottomTabNavigation.css"
import {IBottomTabNavigationState} from "./BottomTabNavigation.state"

export enum BottomTabs {
    TAB_CHALLENGE = "challenge",
    TAB_SETTINGS = "settings",
}

export class BottomTabNavigation extends React.PureComponent<any, IBottomTabNavigationState> {
    public state: IBottomTabNavigationState = {
        activeTab: BottomTabs.TAB_CHALLENGE,
    }

    private openTab = (tab: BottomTabs) => {
        this.setState(prevState => ({
            ...prevState,
            activeTab: tab,
        }))
    }

    public render() {
        return <Footer>
            <FooterTab style={styles.footerTab}>
                <Button
                    badge
                    vertical
                    active={this.state.activeTab === BottomTabs.TAB_CHALLENGE}
                    onPress={() => this.openTab(BottomTabs.TAB_CHALLENGE)}
                >
                    <Badge>
                        <Text>1</Text>
                    </Badge>
                    <Icon type="MaterialCommunityIcons" name="bell"/>
                    <Text>Challenge</Text>
                </Button>

                <Button vertical active={this.state.activeTab === BottomTabs.TAB_SETTINGS}
                        onPress={() => this.openTab(BottomTabs.TAB_SETTINGS)}>
                    <Icon type="MaterialCommunityIcons" name="settings"/>
                    <Text>Einstellungen</Text>
                </Button>
            </FooterTab>
        </Footer>
    }
}
