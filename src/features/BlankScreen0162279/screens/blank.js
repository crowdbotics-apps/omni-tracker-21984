import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  state = {}
  render = () => (
    <View style={styles.View_1}>
      <View style={styles.View_3}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("")}>
          <Icon name="align-justify" style={styles.Icon_6} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, marginHorizontal: 16 },
  View_1: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignContent: "flex-start"
  },
  View_3: {
    width: 0,
    height: 40,
    flexDirection: "row",
    flexWrap: "nowrap",
    alignContent: "flex-start",
    borderWidth: 2,
    borderRadius: 1
  },
  Icon_6: { marginLeft: 5, alignSelf: "flex-start", fontSize: 14 }
})

function mapStateToProps(state) {
  return { state: state.apiReducer }
}
const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(Blank)
