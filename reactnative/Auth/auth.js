import React from "react";
import { AsyncStorage } from "react-native";
import { login } from "../Servises/ApiServices";
import * as validator from "validator";
// import ProtectedRoute from '../auth/ProtectedRoute';
import firebase from "firebase";
const AuthContext = React.createContext();

class AuthProvider extends React.Component {
  //token=localStorage.getItem('token');

  //   state = { isAuth: localStorage.getItem('token') !== null }; //true }

  componentDidMount() {
    // const token = localStorage.getItem('token')
    // console.log("Auth token",token)
    // if (token !== "null"){
    //     console.log('token exists')
    //     this.setState({isAuth : true})
    // }
  }

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.signup = this.signup.bind(this);
  }
  async login(email, password, callback) {
    console.log("HAI");
    if (!validator.isEmail(email) && !validator.isMobilePhone(email)) {
      return callback("Please enter a valid email / phone number.", false);
    }

    if (password == "") {
      console.log("password");
      return callback("Please enter a password.", false);
    }

    let result;
    try {
      result = await login(email, password);
    } catch (e) {
      console.log(e.message);
    }

    if (result.success) {
      console.log("RESULT", result);

      this.setState({ isAuth: true });
      var user = result.user;
      await AsyncStorage.setItem("name", JSON.stringify(user.displayName));
      await AsyncStorage.setItem("email", JSON.stringify(user.email));
      await AsyncStorage.setItem(
        "phoneNumber",
        JSON.stringify(user.phoneNumber)
      );
      await AsyncStorage.setItem("photoURL", JSON.stringify(user.photoURL));

      // localStorage.setItem('loginType', result);

      return callback(result.message, true);
    } else {
      //   this.setState({ isAuth: false });
      return callback(result.error, false);
    }
  }

  async signup(
    name,
    email,
    phone,
    password,
    confirmPassword,
    agreeTerms,
    type,
    emailVerify,
    organization,
    referal,
    callback
  ) {
    if (name.length < 3 || name.length > 30) {
      {
        return callback("Name should be at least 3 characters ", false);
      }
    }
    if (!validator.isEmail(email)) {
      return callback("Please enter a valid email", false);
    }

    if (!validator.isMobilePhone(phone)) {
      return callback("Please enter a valid phone number", false);
    }

    if (password !== "") {
      console.log("password No Match");
      if (
        !password.match(/^[A-Za-z0-9\s$&+,:;=?@#|'<>.^*()%!-]{6,160}$/)
        // !password.match(
        //   /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/,
        // )
      ) {
        return callback("Please enter secure and strong password.", false);
      }
    }

    if (password !== confirmPassword) {
      return callback("Passwords does not match.", false);
    }

    console.log("agreeTerms", agreeTerms);

    if (!agreeTerms) {
      return callback("Please agree to the terms and conditions.", false);
    }

    let result;
    try {
      result = await signUp(
        name,
        email,
        phone,
        password,
        type,
        organization,
        emailVerify,
        referal
      );
    } catch (e) {
      console.log(e.message);
      callback(e.message, false);
    }

    if (result.success) {
      return callback(result.message, true, result.user);
    } else {
      this.setState({ isAuth: false });
      return callback(result.error, false, null, result.code);
    }
  }

  async logout() {
    this.setState({ isAuth: false });
    localStorage.setItem("userId", null);
    localStorage.setItem("role", null);
    localStorage.setItem("admin", null);
    localStorage.setItem("token", null);
    localStorage.setItem("organization", null);
    firebase
      .auth()
      .signOut()
      .then((result) => {
        console.log("firebase user logged out");
      })
      .catch((error) => {
        console.log("firebase logout error", error);
      });

    // localStorage.setItem('firebaseUserToken', null);
    return true;

    // localStorage.clear();
    // let path = `/login`;
    // this.props.history.push(path);
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          //   isAuth: this.state.isAuth,
          login: this.login,
          signup: this.signup,
          logout: this.logout,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

String.prototype.capitalize = function () {
  var text = this.toLowerCase();
  return text.replace(/(^|\s)([a-z])/g, function (m, p1, p2) {
    return p1 + p2.toUpperCase();
  });
};

const AuthConsumer = AuthContext.Consumer;
export { AuthProvider, AuthConsumer, AuthContext };
