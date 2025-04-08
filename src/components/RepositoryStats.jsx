import { View, StyleSheet } from "react-native";
import StyledText from "./StyledText.jsx";

const ParseThousands = (value) => {
    return value >= 1000 ? `${Math.round(value / 100) / 10}k` : String(value);
}

const RepositoryStats = (props) => {
    return (
        <View style={styles.container}>
            <View>
                <StyledText align="center">{ParseThousands(props.stargazersCount)}</StyledText>
                <StyledText align="center" fontWeight={"bold"}>Stars</StyledText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
         flexDirection: "row", 
         justifyContent: "space-around"
        }
    })

export default RepositoryStats;