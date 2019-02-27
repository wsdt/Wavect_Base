/**
 * This minimal function was made for better readability.
 *
 * Scss is imported like this:
 *      import * as styleBase from "../../scss/base.scss"
 *
 * Style params of react native props require an object of type StyleProps<ViewStyle>.
 * As our scss parser generates a defintion file for each scss-file (but with strings)
 * we get a warning when assigning a value to the style property like this:
 *
 *      <View style={styleBase.container}>
 *
 * The styling works despite the warning. To remove the warning we have to cast the style each time, like this:
 *      <View style={(styleBase.container as StyleProp<ViewStyle>)}>
 *
 * To avoid such long unnecessary castings I made this function (with a short name). So, we can do this:
 *      <View style={p(styleBase.container)}>
 */
import { StyleProp, ViewStyle } from "react-native"

function p(parseableStyle: string): StyleProp<ViewStyle> {
  return parseableStyle as StyleProp<ViewStyle>
}

export default p
