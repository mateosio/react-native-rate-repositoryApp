import { View, StyleSheet, ScrollView } from "react-native";
import StyledText from "./StyledText.jsx";
import Constants from "expo-constants";
import { theme } from "../theme.js";
import { Link, useLocation} from "react-router-native";

const AppBarTab = ({ children, to }) => {
    const {pathname} = useLocation();

    const active = pathname === to;
    
    const textStyles = [
    styles.text, 
    active && styles.active
];
  return (
    <Link to={to} replace>
      <StyledText fontWeight="bold" style={textStyles}>
        {children}
      </StyledText>
    </Link>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll} horizontal>
        <AppBarTab to="/">Repositories</AppBarTab>
        <AppBarTab to="/signin">Sign In</AppBarTab>
        <AppBarTab to="/register">Register</AppBarTab>
        <AppBarTab to="/signin">Sign In</AppBarTab>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight + 10,
    paddingLeft: 10,
  },
  text: {
    color: theme.appBar.textSecondary,
    paddingHorizontal: 10,
  },
  active: {
    color: theme.appBar.textPrimary,
  },
  scroll: {
    paddingBottom: 15,
  },
});

export default AppBar;