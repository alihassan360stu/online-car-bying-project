
import React, { useState } from 'react';
let orignal_data = [];
let CreateAcount = () => {

    let [check, checkUpdat] = useState(0)
    let closeForm = () => {

        let createaccount = document.querySelector(".main_account_create");
        createaccount.style.display = "none";
        data_collector_obj.name = "";
        let chan = document.querySelector(".change");
        chan.innerText = "ACCOUNT CREATE";
        chan.style.left = "21vw";
        chan.style.color = "white";
        checkUpdat(1);
    }

    let subMit = (obj) => {
        obj.preventDefault();
    }

    let [data_collector_obj, updateData] = useState({
        name: "",
        lname: "",
        email: "",
        contact: "",
        password: "",
        conform: "",
        gender: ""
    });

    let dataEnter = (obg) => {
        let color = document.querySelector(".same5 input");
        color.style.color = "black";
        color = document.querySelector(".same6 input");
        color.style.color = "black";
        checkUpdat(0);
        let name = obg.target.name;
        let value = obg.target.value;
        updateData((pre) => {
            if (name === "name1") {
                return {
                    name: value,
                    lname: pre.lname,
                    email: pre.email,
                    contact: pre.contact,
                    password: pre.password,
                    conform: pre.conform,
                    gender: pre.gender
                }
            }
            if (name === "name2") {
                return {
                    name: pre.name,
                    lname: value,
                    email: pre.email,
                    contact: pre.contact,
                    password: pre.password,
                    conform: pre.conform,
                    gender: pre.gender
                }
            }
            if (name === "name3") {
                return {
                    name: pre.name,
                    lname: pre.lname,
                    email: value,
                    contact: pre.contact,
                    password: pre.password,
                    conform: pre.conform,
                    gender: pre.gender
                }
            }
            if (name === "name4") {
                return {
                    name: pre.name,
                    lname: pre.lname,
                    email: pre.email,
                    contact: value,
                    password: pre.password,
                    conform: pre.conform,
                    gender: pre.gender
                }
            }
            if (name === "name5") {
                return {
                    name: pre.name,
                    lname: pre.lname,
                    email: pre.email,
                    contact: pre.contact,
                    password: value,
                    conform: pre.conform,
                    gender: pre.gender
                }
            }
            if (name === "name6") {
                return {
                    name: pre.name,
                    lname: pre.lname,
                    email: pre.email,
                    contact: pre.contact,
                    password: pre.password,
                    conform: value,
                    gender: pre.gender
                }
            }
            if (name === "name7") {
                return {
                    name: pre.name,
                    lname: pre.lname,
                    email: pre.email,
                    contact: pre.contact,
                    password: pre.password,
                    conform: pre.conform,
                    gender: value
                }
            }
        });
    }
    const submitData = () => {

        if (data_collector_obj.name == "" && data_collector_obj.lname == "" && data_collector_obj.email == "" && data_collector_obj.contact == "" && data_collector_obj.password == "" && data_collector_obj.name == "" && data_collector_obj.gender == "") {
        }
        else if (data_collector_obj.name != "" && data_collector_obj.lname != "" && data_collector_obj.email != "" && data_collector_obj.contact != "" && data_collector_obj.password != "" && data_collector_obj.name != "" && data_collector_obj.gender != "") {
            let n = 78;

            let time = new Date()
            time = time.getMinutes();

            if (time == 561) {
                localStorage.setItem("namme", JSON.stringify(data_collector_obj));
            }
            let orignal_data = [];
            let obj = JSON.parse(localStorage.getItem("namme"))

            for (let v = 0; v < obj.length; v++) {
                orignal_data.push(obj[v]);

                if (obj[v].email == data_collector_obj.email) {
                    n = 89;
                    alert("EMAIL NUMBER MUST BE UNIQE ");
                    break;
                }

            }
            if (n == 78) {

                if (data_collector_obj.password === data_collector_obj.conform) {
                    orignal_data.push(data_collector_obj);
                    localStorage.setItem("namme", JSON.stringify(orignal_data));
                    // localStorage.clear();
                    let createaccount = document.querySelector(".change");
                    sessionStorage.setItem("login", 1);
                    createaccount.innerText = "ACCOUNT CREATE SUCCESSFULLY";
                    createaccount.style.left = "14vw";
                    createaccount.style.color = "black";
                    checkUpdat(1);
                }
                else {
                    let color = document.querySelector(".same5 input");
                    color.style.color = "red";
                    color = document.querySelector(".same6 input");
                    color.style.color = "red";
                }
            }
        }
        else {
            alert("please fill the form");
        }

    }
    return (
        <>
            <form onSubmit={subMit} className="main_account_create">
                <i onClick={closeForm} class="fa fa-window-close"></i>
                <div className='change'>ACCOUNT CREATE</div>
                <div className="same "><label>NAME :  <input value={(check == 1) ? "" : data_collector_obj.name} onChange={dataEnter} name="name1" className="btn_name" type='type' />  </label></div>
                <div className=" same same1"><label>L NAME :<input value={(check == 1) ? "" : data_collector_obj.lname} onChange={dataEnter} name="name2" className="btn_name" type='type' />  </label></div>

                <div className=" same same2"><label>CON NO:<input value={(check == 1) ? "" : data_collector_obj.contact} onChange={dataEnter} name="name4" className="btn_name" type='number' />  </label></div>
                <div className=" same same4"><label>EMAIL: <input value={(check == 1) ? "" : data_collector_obj.email} onChange={dataEnter} name="name3" className="btn_name" type='email' />  </label></div>
                <div className=" same same5"><label>PASSW: <input value={(check == 1) ? "" : data_collector_obj.password} onChange={dataEnter} name="name5" className="btn_name" type='password' />  </label></div>
                <div className=" same same6"><label>CONF PA:<input value={(check == 1) ? "" : data_collector_obj.conform} onChange={dataEnter} name="name6" className="btn_name" type='password' />  </label></div>
                <div className="same same3" >
                    <label>MALE <input value={(check == 1) ? "of" : "male"} onChange={dataEnter} className="radio" name="name7" type='radio' /></label>
                    <label>FEMALE <input value={(check == 1) ? "of" : "female"} onChange={dataEnter} className="radio" name="name7" type='radio' /></label>
                    <label>OTHER <input value={(check == 1) ? "of" : "other"} onChange={dataEnter} className="radio" name="name7" type='radio' /></label>
                </div>
                <span className="new_account"> <button onClick={submitData}>SUB</button></span>
            </form>
        </>
    )
}

export default CreateAcount;
export { orignal_data };