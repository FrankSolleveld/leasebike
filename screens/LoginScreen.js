import * as React from "react"
import { StyleSheet, Text, View } from "react-native"

class LoginScreen extends React.Component {

    render() {

        return (
            <View style={StyleSheet.container}>
                <Text>Welcome to the login screen.</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({

    container: {

        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"

    }

})

export default LoginScreen