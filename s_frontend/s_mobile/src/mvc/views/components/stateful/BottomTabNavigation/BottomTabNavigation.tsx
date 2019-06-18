import {Badge, Button, Footer, FooterTab, Icon, Text} from "native-base"
import * as React from "react"
import styles from "./BottomTabNavigation.css"
import {IBottomTabNavigationState} from "./BottomTabNavigation.state"
import {routes} from "../../system/Router/Routes";
import {withNavigation} from "react-navigation";

class BottomTabNavigation extends React.PureComponent<any, IBottomTabNavigationState> {
    public state: IBottomTabNavigationState = {
        activeTab: routes.HomeScreen,
    }

    private openTab = (tab: string) => {
        this.setState(prevState => ({
            ...prevState,
            activeTab: tab,
        }))

        this.props.navigation.navigate(tab)
    }

    public render() {
        return (<>
                {this.props.children}
                <Footer>
                    <FooterTab style={styles.footerTab}>
                        <Button
                            badge
                            vertical
                            active={this.state.activeTab === routes.HomeScreen}
                            onPress={() => this.openTab(routes.HomeScreen)}>
                            <Badge>
                                <Text>1</Text>
                            </Badge>
                            <Icon type="MaterialCommunityIcons" name="bell"/>
                            <Text>Challenge</Text>
                        </Button>

                        <Button vertical active={this.state.activeTab === routes.SettingsScreen}
                                onPress={() => this.openTab(routes.SettingsScreen)}>
                            <Icon type="MaterialCommunityIcons" name="settings"/>
                            <Text>Einstellungen</Text>
                        </Button>
                    </FooterTab>
                </Footer></>
        )
    }
}

export default withNavigation(BottomTabNavigation)
