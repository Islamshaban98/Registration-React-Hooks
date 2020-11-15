import React ,{useEffect, useState}from "react";

import PasswordStrengthBar from "react-password-strength-bar";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";

import "./style.css";
import Back from "../../Components/Back";
import Input from "../../Components/Input";
import Checkbox from "../../Components/Checkbox";
import Button from "../../Components/Button";
import Or from "../../Components/Orgroup";
import SignUpSchema, { fieldSchema } from "../SignUp/SignUpValidation";

 const Form =(props)=>{

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [repassword,setrePassword] = useState("");
  const [checked,setChecked] = useState("");
  const [passwordShown,setPasswordShown] = useState(false);
  const [repasswordShown,setrePasswordShown] = useState(false);
  const [errors,setErrors] = useState({});
  const [error,setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
   
   
    const validate = () => {
      fieldSchema(name)
        .validate(value)
        .then(() => {
            setErrors((prevState) => {
              const { errors } = prevState;
              return { errors: { ...errors, [name]: "" } };
            })    
        })
        .catch((err) => {
         setErrors((prevState) => {
            const { errors } = prevState;
            return { errors: { ...errors, [name]: err.message } };
          });
        });
    };
  };

  const validateForm = (data) => {
    SignUpSchema.validate(data, { abortEarly: false })
      .then(() => {
        setError( "" );
        setErrors( {});
      })
      .catch((err) => {
        const errors = {};
        err.inner.forEach(({ message, params }) => {
          errors[params.path] = message;
          setError( "check the fields above" );
          setErrors( errors);
        });
      });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    validateForm({ email, password, repassword });
    if (!error) {
      //post data to api with axios
      axios
        .post("https://fake-api-ahmed.herokuapp.com/v1/auth/signup", {
          email,
          password,
        })
        .then((res) => {
          props.handelLogin();
          props.history.push("/SignInIndex");
        })
        .catch((err) => {
          console.log(err.response.data.error);
          let error = err.response.data.error;
          if (error.includes("duplicate")) {
            error = "Email is already exist";
          }
         setError( error );
        });
    }
  };
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true );
  };
  const togglerePasswordVisiblity = () => {
   
    setrePasswordShown( repasswordShown ? false : true );
  };
 
    
    return (
      <div className="form">
        <Link to="/SignInIndex">
          <Back />
        </Link>
        <div className="text_div">
          <h1 className="h1">Register Individual Account!</h1>
          <p className="p">
            For the purpose of gamers regulation, your details are required.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="inputs-div">
          <Input
            type="email"
            lable="Email address*"
            placeholder="Enter email address"
            id="email"
            name="email"
            handleChange={(e)=>{handleChange(e); setEmail(e.target.value)}}
            value={email}
            error={errors.email}
          />
          <Input
            type={passwordShown ? "text" : "password"}
            lable="Create password*"
            placeholder="Password"
            id="password"
            name="password"
            handleChange={(e)=>{handleChange(e); setPassword(e.target.value)}}
            value={password}
            toggleShow={togglePasswordVisiblity}
            error={errors.password}
          />
          <PasswordStrengthBar password={password} />
          <Input
            type={repasswordShown ? "text" : "password"}
            lable="Repeat password*"
            placeholder="Repeat password"
            id="repassword"
            name="repassword"
            handleChange={(e)=>{handleChange(e); setrePassword(e.target.value)}}
            value={repassword}
            toggleShow={togglerePasswordVisiblity}
            error={errors.repassword}
          />
          <PasswordStrengthBar password={repassword} />
          <Checkbox
            type="checkbox"
            id="checked"
            name="checked"
            label={["I agree to ", <Link to="">terms & conditions</Link>]}
            checked={checked}
            handleChange={(e)=>{handleChange(e); setChecked(e.target.checked)}}
          />
          <div className="register-button-div">
            <Button name="Register" title="Register Account" type="submit" />
            {error && <span>{error}</span>}
            <Or />
            <Button
              name="byGoogle"
              title="Register with Google"
              type="submit"
            />
            <div className="LoginText">
              Do you already have an account?{" "}
              <Link to="/SignInIndex"> Log in</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
export default withRouter(Form);
