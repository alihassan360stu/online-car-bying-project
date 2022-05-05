import { useState } from "react";

let input_data = ["hassan is the best", "basit"];

const LoginForm = () => {
  let [condition, changeCon] = useState(0);
  let [data, dataChamge] = useState({
    email: "",
    password: ""
  });

  const createAccount = () => {
    cancelForm();
    let createaccount = document.querySelector(".main_account_create");
    createaccount.style.display = "block";
  }

  let cancelForm = () => {
    let span_cro = document.querySelector(".span_cross");
    let dis_hedden = document.querySelector(".form_data");
    span_cro.style.display = "none";
    dis_hedden.style.display = "none";
    changeCon(1);
  }// on click form display none//
  let getInputPasswordAndEmail = (eve) => {


    let name = eve.target.name;
    let value = eve.target.value;
    let color = document.querySelector(".email");
    color.style.color = "black";
    color = document.querySelector(".password");
    color.style.color = "black";
    changeCon(0);
    dataChamge(
      (pre) => {

        if (name == "ali1") {
          return {
            email: value,
            password: pre.password
          }
        }
        else if (name == "ali2") {
          return {
            email: pre.email,
            password: value
          }
        }

      }
    )
  }

  let submitData = () => {
    let obj = JSON.parse(localStorage.getItem("namme"))
    let n = 45;

    for (let i = 0; i < obj.length; i++) {
      if (data.email == obj[i].email && data.password == obj[i].password) {
        changeCon(1);

        let span_cro = document.querySelector(".span_cross");
        let dis_hedden = document.querySelector(".form_data");

        span_cro.style.display = "none";
        dis_hedden.style.display = "none";
        dis_hedden = document.querySelector(".sign_in h1");
        dis_hedden.style.color = "blue";
        dis_hedden = document.querySelector(".sign_in h1 .fa");
        dis_hedden.style.color = "blue";
        dis_hedden = document.querySelector(".logout");
        dis_hedden.style.display = "block";
        n = 5656;
        sessionStorage.clear();
        sessionStorage.setItem("login", 1);

        break;
      }
    }

    if (n == 45) {
      let color = document.querySelector(".email");
      color.style.color = "red";
      color = document.querySelector(".password");
      color.style.color = "red";
      alert("CHECK EMAIL OR PASSWORD ");
    }
  }


  let subMit = (obj) => {
    obj.preventDefault();
  }

  let logoutForm = () => {

    let dis_hedden = document.querySelector(".sign_in h1");
    dis_hedden.style.color = "black";
    dis_hedden = document.querySelector(".sign_in h1 .fa");
    dis_hedden.style.color = "black";
    dis_hedden = document.querySelector(".logout");
    dis_hedden.style.display = "none";
    sessionStorage.clear();
    sessionStorage.setItem("login", 0);
  }
  return (
    <>
      <form onSubmit={subMit} className="form_data">
        <span onClick={logoutForm} className="logout"><h1>LOGOUT</h1></span>
        <span onClick={cancelForm} className='span_cross' ><i class="fa fa-window-close"></i></span>
        <div className="email_pass">
          <label>USER EMAIL <input className="email" value={(condition == 1) ? "" : data.email} name="ali1" onChange={getInputPasswordAndEmail} type="email" /></label> <br />
          <label>PASSWORD :  <input className="password" value={(condition == 1) ? "" : data.password} name="ali2" onChange={getInputPasswordAndEmail} type="password" /></label>
          <span onClick={createAccount} className="create_account">CREATE ACCOUNT</span>
          <span onClick={submitData}><button>LOGIN</button></span>
        </div>
      </form>
    </>
  )
}

export default LoginForm;
export { input_data };