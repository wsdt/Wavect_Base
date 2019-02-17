import * as React from "react"
import { Text, View } from "react-native"

// @ts-ignore
import * as styles from "./src/scss/style.scss"

// TODO: https://jaredpalmer.com/formik/docs/overview --> TO MAKE EASY VALIDATING FORMS

export default class App extends React.Component {
  public render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    )
  }
}
