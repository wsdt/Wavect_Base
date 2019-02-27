import * as React from "react"
import { View } from "react-native"
import * as styleBase from "../../../scss/base.scss"
import p from "../../../scss/parseScss"
import { LoginForm } from "../components/LoginForm/LoginForm"
import { OAuth } from "../components/OAuth/OAuth"

// <Header leftComponent={<BeKindIcon width={30} height={30} />} centerComponent={{text: "Authentication", style: {color: "#fff"}}} containerStyle={p(styleBase.header)}/>

export class LoginScreen extends React.Component<any, any> {
  public static navigationOptions = {
    title: "Login"
  }

  public render() {
    /* Pass all props down to child component (e.g. navigation props! as screen is rendered)! */
    return (
      <View style={p(styleBase.page)}>
        <View style={p(styleBase.center)}>
          <LoginForm {...this.props} />
          <OAuth {...this.props} />
        </View>
      </View>
    )
  }
}
