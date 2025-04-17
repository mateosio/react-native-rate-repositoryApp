import { Formik, useField } from "formik";
import { StyleSheet, View, Button } from "react-native";
import StyledTextInput from "../components/StyledTextInput.jsx";
import StyledText from "../components/StyledText.jsx";
import { loginValidationSchema } from "../validationSchemas/login.js";

const initialValues = {
  email: "",
  password: "",
};

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
    let firstTime = false;
  return (
    <>
    <StyledTextInput
      value={field.value}
      onChangeText={ value => {
        helpers.setValue(value)
        firstTime = true;
    } }
      error = {meta.error}
      {...props}
    />
    {firstTime && meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>} 
    </>
  );
};

export default function LogIn() {
  return (
    <Formik initialValues={initialValues} validationSchema={loginValidationSchema} onSubmit={(values => console.log(values))}>
      {({ handleSubmit }) => (
        <View style={styles.form}>
          <FormikInputValue placeholder="Email" name={"email"} />
          <FormikInputValue placeholder="Password" name={"password"} secureTextEntry/>
          <Button onPress={handleSubmit} title="Log In" />
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
    error: {
        color: "red",
        fontSize: 10,
        marginBottom: 20,
        marginTop: -5
    },
    form: {
        margin: 12,
  },
});
