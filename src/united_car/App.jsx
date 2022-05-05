import Background from './Background';
import LoginForm from './LoginForm'
import CreateAcount from './CreateAcount'
import AllCarData from './AllCarData';
import React, { useState } from 'react';
sessionStorage.setItem("login", 0);
const App = function () {
  let [temp, tempchange] = useState({
    fname: "",
    lname: "",
    email: "",
    contact: "",
    comment: ""
  })
  let [check, update] = useState(0);
  let [car_separet, changeCarSeparet] = useState("");
  let [not_bying, notByingChange] = useState();

  const showForm = () => {
    let hedden = document.querySelector(".form_data");
    let hedde = document.querySelector(".span_cross");
    hedden.style.display = "block";
    hedde.style.display = "block";
  }


  let homeShow = () => {
    update(0);
    let change = document.querySelector(".Audi_car_container");
    change.style.display = "none";
    change = document.querySelector(".about_data");
    change.style.display = "block";
  }vcxv

  let showFormDataAgain = () => {
    let createaccount = document.querySelector(".main_account_create");
    createaccount.style.display = "block";
    createaccount.style.zIndex = "30";
  }

  let showCarData = () => { //show all car list 

    let change = document.querySelector(".Audi_car_container");
    change.style.display = "block";

    change = document.querySelector(".about_data");
    change.style.display = "none";

    update(1);
  }
  function showCarData1() {
    let n = parseInt(sessionStorage.getItem("login"))
    if (n == 0) {
      showFormDataAgain();
      return <CreateAcount />
    }
    else { notByingChange("bying12"); changeCarSeparet("audi"); showCarData() }
  }
  function showCarData2() {
    let n = parseInt(sessionStorage.getItem("login"))
    if (n == 0) {
      showFormDataAgain();
      return <CreateAcount />
    }
    else { notByingChange("bying12"); changeCarSeparet("teslr"); showCarData() }
  }
  function showCarData3() {
    let n = parseInt(sessionStorage.getItem("login"))
    if (n == 0) {
      showFormDataAgain();
      return <CreateAcount />
    }
    else { notByingChange("bying12"); changeCarSeparet("mercides"); showCarData() }
  }

  function showCarData4() {
    let n = parseInt(sessionStorage.getItem("login"))
    if (n == 0) {
      showFormDataAgain();
      return <CreateAcount />
    }
    else { notByingChange("bying12"); changeCarSeparet("bmw"); showCarData() }
  }
  function showCarData5() {
    let n = parseInt(sessionStorage.getItem("login"))
    if (n == 0) {
      showFormDataAgain();
      return <CreateAcount />
    }
    else { notByingChange("bying12"); changeCarSeparet("honda"); showCarData() }
  }


  // only show car list not bying
  function showCarData11() {
    notByingChange("bying");
    changeCarSeparet("audi"); showCarData();

  }
  function showCarData12() {
    notByingChange("bying");
    changeCarSeparet("teslr"); showCarData();

  }
  function showCarData13() {
    notByingChange("bying");
    changeCarSeparet("mercides"); showCarData();

  }
  function showCarData14() {
    notByingChange("bying");
    changeCarSeparet("bmw"); showCarData();
  }
  function showCarData15() {
    notByingChange("bying");
    changeCarSeparet("honda"); showCarData();
  }
  let submitFOrm = (obj) => {
    obj.preventDefault();
  }

  let data = function (obj) {

    let name = obj.target.name;
    let value = obj.target.value;

    tempchange((pre) => {
      if (name === "name1") { return { fname: value, lname: pre.lname, contact: pre.contact, email: pre.email, comment: pre.comment } }
      if (name == "name2") {
        return {
          fname: pre.fname, lname: value, contact: pre.contact, email: pre.email, comment
            : pre.comment
        }
      }
      if (name == "name3") { return { fname: pre.fname, lname: pre.lname, contact: value, email: pre.email, comment: pre.comment } }
      if (name == "name4") { return { fname: pre.fname, lname: pre.lname, contact: pre.contact, email: pre.value } }
      if (name == "name5") { return { fname: pre.fname, lname: pre.lname, contact: pre.contact, email: pre.value, comment: value } }
    });
  }

  let onclick = () => {
    if (temp.fname == "" && temp.lname == "" && temp.contact == "" && temp.email == "" && temp.comment == "") {

      alert("please fill all attribute");
    }

    else {
      tempchange((pre) => {
        alert("<-- data submitted successfully -->")
        return { fname: "", lname: "", contact: "", email: "", comment: "" }
      });
    }
  }

  return (
    <>
      <div className='main-menu-option'>
        <div className='header'>
          <img className='logo' src='logo1.png' />


          <ul className='menu_option'>
            <li onClick={homeShow}><i class="fa fa-home"></i> home</li>
            <li className='sub_menu'><i class="fa fa-credit-card-alt"></i> purchasing
              <ul>
                <li onClick={showCarData1} className='same_car_class'>Audi Car</li>
                <li onClick={showCarData2} className='same_car_class'>Teslr Car</li>
                <li onClick={showCarData3} className='same_car_class'>Mercedes Car</li>
                <li onClick={showCarData4} className='same_car_class'>BMW Car</li>
                <li onClick={showCarData5} className='same_car_class' >Lamborghini Car</li>
              </ul>
            </li>
            <li className='sub_menu'><i class="fa fa-cab"></i> item list
              <ul>
                <li onClick={showCarData11} className='same_car_class'>Audi Car</li>
                <li onClick={showCarData12} className='same_car_class'>Teslr Car</li>
                <li onClick={showCarData13} className='same_car_class'>Mercedes Car</li>
                <li onClick={showCarData14} className='same_car_class'>BMW Car</li>
                <li onClick={showCarData15} className='same_car_class' >Lamborghini Car</li>
              </ul>
            </li>
            <li><i class="fa fa-laptop"></i> <a href='#ser'>servises</a></li>
            <li><i class="fa fa-phone"></i> contact</li>
            <li><i class="fa fa-address-book-o"></i> about</li>
          </ul>

          <input type="search" className='search' placeholder='Search' />
          <div onClick={showForm} className='sign_in'>  <h1><i class="fa fa-sign-in"></i> sign in</h1> </div>

          <AllCarData showdata={car_separet} bying={not_bying} />
          {(check == 1) ? "" : <Background />}
        </div>
        <LoginForm />
        <CreateAcount />

        <div className='extra_space'></div>
      </div>
      <div className='about_data'>
        <div className='about1 sameData'>
          <div>ABOUT US</div>
          <p> we are providing different type
            vihicle such as mercides,honda,audi
            we are providing car with discount
            prices and with best condion.we have
            many model
          </p>
        </div>

        <div className='about2 sameData'>
          <div>ABOUT US</div>
          <p> Over company providing such a well
            condion cars in cheaper cost. All cars
            are in good condion.the demands of our
            brands is too much all over the world
            as compare to the other companies.
          </p>
        </div>
        <div className='about3 sameData'>
          <div>ABOUT COMPANY</div>
          <p> Our company name is united cars reffered
            by Ali hassan and Murtaza hussain. having such
            a wonderfull contact with top of the company
          </p>
        </div>


        <form onSubmit={submitFOrm} className='contact'>
          <label className='label1'>F-NAME : <input onChange={data} value={temp.fname} type='text' name="name1" /></label>
          <label className='label2'>L-NAME : <input onChange={data} value={temp.lname} type='text' name="name2" /></label> <br /><br /><br /><br />
          <label className='label3'>CONT : <input onChange={data} value={temp.contact} type='number' name="name3" /></label>
          <label className='label4'>EMAIL : <input onChange={data} value={temp.email} type='email' name="name4" /></label><br /><br />
          <label className='label5'>COMMENT : <br /><br /><br /><br /><br />
            <textarea value={temp.email} name='name5' onChange={data}>

            </textarea>
          </label>
          <button onClick={onclick} className='subit_data'>SUBMIT</button>
        </form>

        <div className='servies'>
          <h1>SERVIESES INFO</h1>
          <p className='para'>United House : village ibrahim-zai hangu city ,peshawer pakistan </p> <br />
          <p className='para'>CON:03178264005 <br /> Email:hiztaza963@gmail.com</p>
          <img className='ali' src='Murtaza.jpg' />
        </div>
        <footer> CopyRight 2021 All Right  Reserved by UNITTED MOTORS</footer>
        <a name="#ser"></a>
      </div>
    </>
  )
}


export default App;