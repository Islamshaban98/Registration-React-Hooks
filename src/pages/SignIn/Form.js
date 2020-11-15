import React ,{useState}from "react";

import * as yup from "yup";
import axios from "axios";

import "./style.css";
import ListIcon from "../../Components/ListIcon";
import Orgroup from "../../Components/Orgroup";
import Input from "../../Components/Input";
import Checkbox from "../../Components/Checkbox";
import Button from "../../Components/Button";
import { Link, withRouter } from "react-router-dom";


const Form = (props) => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [checked1,setChecked1] = useState("");
  const [checked2,setChecked2] = useState("");
  const [passwordShown,setPasswordShown] = useState(false);
  const [errors,setErrors] = useState({});
  const [error,setError] = useState("");



  const handleSubmit = (event) => {
    event.preventDefault();
    const signInSchema = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required(),
    });
    signInSchema
      .validate({ email, password }, { abortEarly: false })
      .then((data) => {
        console.log("valid");
        console.log(data);
      })
      .catch((err) => {
        const errors = {};
        err.inner.forEach(({ message, params }) => {
          errors[params.path] = message;
        });
        setError("check the field above");
        setErrors(errors);
      });
    if (!error) {
      axios
        .post("https://fake-api-ahmed.herokuapp.com/v1/auth/login", {
          email,
          password,
        })
        .then((res) => {
          // const user = res.data;
          props.handelLogin();
          props.history.push("/Home");
        })
        .catch((err) => {
          console.log(err.response);
          let error = err.response.data.error;
          setError(error );
        });
    }
  };

const togglePasswordVisiblity =()=> { 
   setPasswordShown(passwordShown ? false : true );
  };

    
    return (
      <div className="signInForm">
        <div className="title-div">
          <h1 className="h1Text">Join the game!</h1>
          <p className="pText">Go inside the best gamers social network!</p>
        </div>
        <div className="component">
          <ListIcon />
          <Orgroup />
          <form onSubmit={handleSubmit}>
            <Input
              value={email}
              name="email"
              id="Email"
              lable="Your email"
              handleChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Write your email"
              error={errors.email}
            />
            <Input
              value={password}
              id="pass"
              name="password"
              type={passwordShown ? "text" : "password"}
              handleChange={(e) => {
                setPassword(e.target.value );}}
              lable="Choose a password"
              placeholder="Write your password"
              toggleShow={togglePasswordVisiblity}
              error={errors.password}
            />
            <Checkbox
              type="checkbox"
              label={["I agree to ", <Link to="#">terms & conditions</Link>]}
              name="checked1"
              handleChange={(e) => {
                setChecked1 (e.target.checked );
              }}
              checked={checked1}
            />
            <Checkbox
              type="checkbox"
              label="I’d like being informed about latest news and tips"
              name="checked2"
              handleChange={(e) => {
                setChecked2 (e.target.checked );
              }}
              checked={checked2}
            />
            <div className="signup-button-div">
              <Button name="Register" title="Login" type="submit" />
            </div>
          </form>
        </div>
        <div className="RegisterText">
          Don't have an account? <Link to="/"> Register</Link>
        </div>
        {error && <span>{error}</span>}
      </div>
    );
  }

export default withRouter(Form);
