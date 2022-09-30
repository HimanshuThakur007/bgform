import axios from "axios";
import React, { useState,useRef,useEffect } from "react";
import NumberFormat from "react-number-format"; 
import "./AddAccountMaster.css";


const AddAccountMaster = () => {

  let one = React.createRef();
  let two = React.createRef();

  const inputRef = useRef();

  const handleKeyEnter =(e)=> {
    if (e.keyCode === 13 || e.keyCode === 40) {
      switch (e.target.id) {
        case "Distance":
          two.current.focus();
          break;
        default:
          break;
      }
    }
  }

const handleKeyUp = (e) => {
   if(e.keyCode === 38){
    switch(e.target.id){
      case "specifyType":
        one.current.focus();
        break;
        default:
        break;
    }
   }
}


  // const handleKeyUp =(e)=> {

  //   e.which = e.which || e.keyCode;
  //   if (e.which === 38) {
  //     switch (e.target.id) {
  //       case "specifyType":
  //         one.current.focus();
  //         break;
  //       // case "input-two":
  //       //   three.current.focus();
  //       //   break;
  //       // case "input-three":
  //       //   one.current.focus();
  //       //   break;

  //       default:
  //         break;
  //     }
  //   }
  // }


  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleEnter = (e) => {
    if (e.keyCode === 13||e.keyCode === 40) {
      const form = e.target.form;
      const Index = [...form].indexOf(e.target);
      form.elements[Index + 1].focus();
      e.preventDefault();
    }
  };


  const handleEnterTo = (e) => {
    if (e.keyCode === 13||e.keyCode === 40) {
      const form = e.target.form;
      const index = [...form].indexOf(e.target);
      form.elements[index + 2].focus();
      e.preventDefault();
    }
  };

  const keyupHandler = (e) => {
    if (e.keyCode === 38) {
      const form = e.target.form;
      const index = [...form].indexOf(e.target);
      form.elements[index - 1].focus();
      e.preventDefault();
    }
  };

  const keyupHandlerTo = (e) => {
    if (e.keyCode === 38) {
      const form = e.target.form;
      const index = [...form].indexOf(e.target);
      form.elements[index - 2].focus();
      e.preventDefault();
    }
  };

  const NumericOnly = (e) => {
    //angka only
    const reg = /^[0-9\b]+$/;
    let preval = e.target.value;
    if (e.target.value === "" || reg.test(e.target.value)) return true;
    else e.target.value = preval.substring(0, preval.length - 1);
    // const result = e.target.value.replace(/[^0-9]/gi, '')
    // setOpBal(result)
  };

  const handleChange = (e) => {
    const result = e.target.value.replace(/[^c-d]/gi, "");
    setDrInput(result);
  };

  const sdstChange = (e) => {
    const result = e.target.value.replace(/[^n||y]/gi, "");
    setSdstInput(result);
  };

  const sdptChange = (e) => {
    const result = e.target.value.replace(/[^n&&y]/gi, "");
    setSdptInput(result);
  };

  const crInputChange = (e) => {
    const result = e.target.value.replace(/[^c-d]/gi, "");
    setCrInput(result);
  };

  const dstInputHandler = (e) => {
    const result = e.target.value.replace(/[^n||y]/gi, "");
    setDstInput(result);
  };

  const dptInputHandler = (e) => {
    const result = e.target.value.replace(/[^n||y]/gi, "");
    setDptInput(result);
  };

  const fstInputHandler = (e) => {
    const result = e.target.value.replace(/[^n||y]/gi, "");
    setFstInput(result);
  };

  const fptInputHandler = (e) => {
    const result = e.target.value.replace(/[^n||y]/gi, "");
    setFptInput(result);
  };

  const mobileInputHandler = (e) =>{
    e.preventDefault();
    setMobileInput(e.target.value)
  }

  const saveHandler = (e) => {
    e.preventDefault();
    
    if (username.trim().length === 0) {
      alert (' cannot be blank')
     return 
   }else{
     alert ("Data saved")
   }
 const url = "https://6319899e8e51a64d2be6604f.mockapi.io/api/acc/masterform";

 const itemData = {
  name: username,
  Alias: aliasInput,
  Aadhar: aadharInput,
  group: groupInput,
  PrintName: printName,
  DrCr: drInput,
  Distance: distance,
  Address:address,
  Dealer: dealer,
  Cr: crInput,
  Tin: tinInput,
  Country: countryInput,
  state: stateInput,
  opBal,
  gstInput,
  MobileNo:mobileInput,
  SpecifyDefaultPurcType:sdptInput,
  SpecifyDefaultSaleType:sdstInput
};
 axios.post(url, itemData,{
  headers:{
    Accept: "application/json",
    "Content-Type":"application/json;charset=UTF-8",
  },
 }) 
 .then(({data}) => {
  console.log(data)
 })

    // const formData = {
    //   name: username,
    //   Alias: aliasInput,
    //   Aadhar: aadharInput,
    //   group: groupInput,
    //   PrintName: printName,
    //   DrCr: drInput,
    //   Distance: distance,
    //   Address:address,
    //   Dealer: dealer,
    //   Cr: crInput,
    //   Tin: tinInput,
    //   Country: countryInput,
    //   state: stateInput,
    //   opBal,
    //   gstInput,
    //   MobileNo:mobileInput,
    //   SpecifyDefaultPurcType:sdptInput,
    //   SpecifyDefaultSaleType:sdstInput
    // };
    // onSaveFormData(formData)
    setUserName("");
    setPrintName("");
    setAliasInput("");
    setGroupInput("");
    setAddress("");
    setDealer("");
    setDistance("");
    setCountryInput("");
    setStateInput("");
    setTinInput("");
    setMobileInput("");
    setAadharInput("");
    setGstInput("")
    // setOpBal('')
    // console.log(formData);
  };

  const handleInput = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
    setPrintName(e.target.value);
  };

  const handelAlias = (e) => {
    e.preventDefault();
    setAliasInput(e.target.value);
  };

  const groupInputHandler = (e) => {
    e.preventDefault();
    setGroupInput(e.target.value);
  };

  const addressHandler = (e) => {
    e.preventDefault();
    setAddress(e.target.value);
  };

  const distanceHandler = (e) => {
    e.preventDefault()
    setDistance(e.target.value);
  }

  const dealerHandler = (e) => {
    e.preventDefault();
    setDealer(e.target.value);
  };

  const opBalHandler = (e) => {
    e.preventDefault();
    setOpBal(e.target.value);
    // const val = e.target.value
    // setOpBal(val.toFixed(2))
    // (Math.round(num * 100) / 100).toFixed(2);
  };

  const prevBalHandler = (e) => {
    e.preventDefault();
    setPrevBal(e.target.value);
  };

  const validateGst = (e) => {
    e.preventDefault();
    console.log("Button Clicked")
  }

 const checkDistance = (e) => {
  e.preventDefault()
  console.log("Check Distance Button Clicked")
 }

 

// const handleClick = (e) => {
//   e.preventDefault()
//   if (username.trim().length === 0){
//     alert ('name cant be empty')
//   }
// }

  // const currencyFormat = (num) => {
  //   return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  // }

  // const currencyFormat = (value) =>
  //   new Intl.NumberFormat('en-IN', {
  //     style: 'currency',
  //     currency: 'INR'
  //   }).format(value);
  // console.log(currencyFormat('13'))


//   const ModifyEnterKeyPressAsTab =()=> {
//     if (window.event && window.event.keyCode === 13) {
//         window.event.keyCode = 9;
//     }
// }

//  const tabBehavior =(e)=>{
//   if (e.target.value ===13)
//   e.keyCode = 9;
//  } 

const twoCalls = (e)=>{
  NumericOnly(e)
  mobileInputHandler(e)
}

const aadharInputHandler = (e) => {
  e.preventDefault()
  setAadharInput(e.target.value)
}

const aadharOnChangeHandler = (e) => {
  NumericOnly(e)
  aadharInputHandler(e)
}

const gstInputHandler = (e) => {
  e.preventDefault()
  setGstInput(e.target.value)
}

const countryInputHandler = (e) => {
  e.preventDefault()
  setCountryInput(e.target.value)
}

const tinInputHandler = (e) => {
  e.preventDefault()
  setTinInput(e.target.value)
}

const stateInputHandler =(e)=> {
  e.preventDefault()
  setStateInput(e.target.value)
}


// const SetFocus =()=>
// {
	
// 	if (document.getElementById)
//           		document.getElementById("specifyType").focus();
             
// }



  const [username, setUserName] = useState("");
  const [aliasInput, setAliasInput] = useState("");
  const [printName, setPrintName] = useState("");
  const [groupInput, setGroupInput] = useState("Cash");
  const [address, setAddress] = useState("");
  const [countryInput, setCountryInput] = useState("")
  const [stateInput, setStateInput] = useState("")
  const [drInput, setDrInput] = useState("D");
  const [crInput, setCrInput] = useState("D");
  const [opBal, setOpBal] = useState("0.00");
  const [gstInput, setGstInput] = useState("")
  const [aadharInput, setAadharInput] = useState("")
  const [tinInput, setTinInput] = useState("")
  const [distance, setDistance] = useState("")
  const [mobileInput, setMobileInput] = useState('')
  const [prevBal, setPrevBal] = useState("0.00");
  const [dealer, setDealer] = useState("");
  const [sdstInput, setSdstInput] = useState("N");
  const [sdptInput, setSdptInput] = useState("N");
  const [dstInput, setDstInput] = useState("N");
  const [dptInput, setDptInput] = useState("N");
  const [fstInput, setFstInput] = useState("N");
  const [fptInput, setFptInput] = useState("N");

  return (

      <div className="container-fluid acc-ct "> 
        <div className="Heading-top d-flex justify-content-center pt-2 pb-2">
          <h5 className="head-txt px-4"> Add Account Master</h5>
        </div>

        <div className="row pb-5">
          {/* col-5 start..! */}
          <div className="col-lg-5 col-md-12 col-sm-12 order-lg-1 order-md-1 order-1">
            {/* General Info Box...! */}
            <div className="genral_info_box mb-5 ps-0">
              <form>
                <fieldset className="border p-2">
                  <legend className="float-none w-auto p-2">
                    General Info.
                  </legend>
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <label>Name</label>
                      <input
                        onKeyDown={handleEnter}
                        onChange={handleInput}
                        value={username}
                        ref = {inputRef}
                        className="textColor"
                        type="text"
                        name="name"
                        id="name"
                      />
                      <br></br>
                    </div>
                    <div className="col-12 pt-0">
                      <label>(Alias)</label>
                      <input
                        value={aliasInput}
                        onChange={handelAlias}
                        onKeyDown={handleEnter}
                        onKeyUp={keyupHandler}
                        className="textColor"
                        type="text"
                        name="alias"
                        id="name"
                      />
                      <br></br>
                    </div>
                    <div className="col-12 pt-0">
                      <label>Print Name</label>
                      <input
                        value={printName}
                        onChange={handleInput}
                        onKeyDown={handleEnter}
                        onKeyUp={keyupHandler}
                        className="textColor"
                        type="text"
                        name="printName"
                        id="printname"
                      />
                    </div>
                    <div className="col-12 pt-0">
                      <label>Group</label>
                      {/* <input
                        onKeyDown={handleEnter}
                        className = "textColor"
                        type="text"
                        name="GroupName"
                        id="name"
                      /> */}
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        value={groupInput}
                        onChange={groupInputHandler}
                        onKeyDown={handleEnter}
                        onKeyUp={keyupHandler}
                      >
                        <option className="textColor" value>
                          Cash
                        </option>
                        <option className="textColor" value="Cash1">
                          Cash1
                        </option>
                        <option className="textColor" value="Cash2">
                          Cash2
                        </option>
                        <option className="textColor" value="Cash3">
                          Cash3
                        </option>
                      </select>
                    </div>

                    <div className="col-12 pt-0">
                      <div className="row">
                        <div className="col-3">
                          <label>Op. Bal.</label>
                        </div>
                        <div className="col-3 d-flex justify-content-center">
                          <NumberFormat
                            value={Number(opBal).toFixed(2)}
                            // format ={currencyFormat}
                            onChange={opBalHandler}
                            onKeyDown={handleEnter}
                            onKeyUp={keyupHandler}
                            className="textColor option-bal"
                            displayType="##.##"
                            type="opBal"
                            name="OpBal"
                            id="opBal"
                            placeholder="0.00"
                          />
                        </div>
                        <div className="col-3 d-flex justify-content-end">
                          <label className="dr">(Rs.) Dr/Cr</label>
                        </div>
                        <div className="col-3 ">
                          <input
                            value={drInput}
                            onKeyDown={handleEnter}
                            onKeyUp={keyupHandler}
                            onChange={handleChange}
                            className="textColor option-bal"
                            maxLength={1}
                            type="Dr"
                            name="Dr-Cr"
                            id="Dr"
                            placeholder="D"
                          />
                        </div>

                        <div className="col-3 ">
                          <label>Prev. Year Bal.</label>
                        </div>
                        <div className="col-3 d-flex justify-content-center">
                          <input
                            value={prevBal}
                            onChange={prevBalHandler}
                            onKeyDown={handleEnter}
                            onKeyUp={keyupHandler}
                            className="textColor option-bal"
                            type="text"
                            name="PrevBal"
                            id="opBal"
                            placeholder="0.00"
                          />
                        </div>
                        <div className="col-3 d-flex justify-content-end">
                          <label className="dr">(Rs.) Dr/Cr</label>
                        </div>
                        <div className="col-3 ">
                          <input
                            value={crInput}
                            onKeyDown={handleEnter}
                            onKeyUp={keyupHandler}
                            onChange={crInputChange}
                            className="textColor option-bal"
                            maxLength={1}
                            type="text"
                            name="Dr-Cr"
                            id="Dr"
                            placeholder="D"
                          />
                        </div>
                        <div className="col-12 pt-0">
                          <label>Address</label>
                          <textarea
                            value={address}
                            onChange={addressHandler}
                            onKeyDown={handleEnter}
                            onKeyUp={keyupHandler}
                            className="textColor address"
                            type="Address"
                            name="Address"
                            id="Address"
                          />
                        </div>
                      </div>

                      <div className="col-12 pt-0">
                        <div className="row">
                          <div className="col-5">
                            <div className="row">
                              <div className="col-6">
                                <label className="country">Country</label>
                              </div>
                              <div className="col-6 d-flex justify-content-end ps-0">
                                <input
                                  value={countryInput}
                                  onChange = {countryInputHandler}
                                  onKeyDown={handleEnter}
                                  onKeyUp={keyupHandler}
                                  className="textColor country"
                                  type="text"
                                  name="country"
                                  id="country"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="row">
                              <div className="col-6">
                                <label className="d-flex justify-content-end">
                                  State/POS
                                </label>
                              </div>
                              <div className="col-6 d-flex justify-content-end">
                                <input
                                  value={stateInput}
                                  onChange = {stateInputHandler}
                                  onKeyDown={handleEnter}
                                  onKeyUp={keyupHandler}
                                  className="textColor"
                                  type="text"
                                  name="state"
                                  id="state"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-3 ">
                            <div className="d-flex justify-content-center">
                              <label className="stateCode">(Code : 07)</label>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 pt-0"></div>
                        <div className="row">
                          {/* <div className="col-3 ">
                            <label>Type Of Dealer</label>
                          </div> */}
                          <div className="col-12">
                          <label>Type Of Dealer</label>
                            <input
                              value={dealer}
                              onChange={dealerHandler}
                              onKeyDown={handleEnter}
                              onKeyUp={keyupHandler}
                              className="textColor dealer"
                              type="text"
                              name="dealer"
                              id="dealer"
                            />
                          </div>
                          {/* <div className="col-6"></div> */}
                          {/* <div className="col-3">
                            <label>GSTIN/UIN</label>
                          </div> */}
                          <div className="col-lg-6 col-md-6 col-sm-12">
                          <label>GSTIN/UIN</label>
                            <input
                              value={gstInput}
                              onChange = {gstInputHandler}
                              onKeyDown={handleEnterTo}
                              onKeyUp={keyupHandler}
                              className="textColor"
                              type="text"
                              name="dealer"
                              id="gstin"
                            />
                          </div>
                          <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="d-flex justify-content-end ">
                              <button className="gtsin_btn px-3"
                              onClick={validateGst} >
                                <b>Validate GSTIN Online</b>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 mt-4 pe-0">
                        <div className="row pe-0">
                          {/* <div className="col-3">
                            
                          </div> */}
                          <div className="col-lg-6 col-md-6 col-sm-12">
                          <label htmlFor="aadhar">Aadhar No.</label>
                            <input
                              value={aadharInput}
                              onChange ={aadharOnChangeHandler}
                              maxLength = {16}
                              onKeyDown={handleEnter}
                              onKeyUp={keyupHandlerTo}
                              className="textColor Aadhar"
                              type="num"
                              name="aadhar"
                              id="aadhar"
                            />
                          </div>
                          {/* <div className="col-3">
                            <label>
                              TIN
                            </label>
                          </div> */}
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            
                            <label>
                              TIN
                            </label>
                              <input
                                value={tinInput}
                                onChange={tinInputHandler}
                                onKeyDown={handleEnter}
                                onKeyUp={keyupHandler}
                                className="textColor"
                                type="num"
                                name="tin"
                                id="tin"
                              />
                            
                          </div>

                          {/* <div className="col-3">
                            <label>IT PAN</label>
                          </div> */}
                          <div className="col-lg-6 col-md-6 col-sm-12">
                          <label>IT PAN</label>
                            <input
                              onKeyDown={handleEnter}
                              onKeyUp={keyupHandler}
                              className="textColor"
                              type="num"
                              name="pan"
                              id="pan"
                            />
                          </div>
                          {/* <div className="col-3">
                            <label className="d-flex justify-content-center ps-3">
                              Ward
                            </label>
                          </div> */}
                          <div className="col-lg-6 col-md-6 col-sm-12">
                           
                            <label>
                              Ward
                            </label>
                              <input
                                onKeyDown={handleEnter}
                                onKeyUp={keyupHandler}
                                className="textColor"
                                type="text"
                                name="ward"
                                id="ward"
                              />
                            
                          </div>

                          {/* <div className="col-3">
                            <label>E-Mail</label>
                          </div> */}
                          <div className="col-12">
                               <label>E-Mail</label>
                            <input
                              onKeyDown={handleEnter}
                              onKeyUp={keyupHandler}
                              className="textColor"
                              type="email"
                              name="email"
                              id="email"
                            />
                          </div>

                          {/* <div className="col-3">
                            
                          </div> */}
                          <div className="col-lg-6 col-md-6 col-sm-12">
                          <label>Mobile No.</label>
                            <input
                            value={mobileInput}
                              onChange ={twoCalls}
                              onKeyDown={handleEnter}
                              onKeyUp={keyupHandler}
                              maxLength={10}
                              className="textColor"
                              type="num"
                              name="mobile"
                              id="mobile"
                            />
                          </div>
                          {/* <div className="col-3">
                            <label className="d-flex justify-content-center ps-0">
                              WhatsApp No.
                            </label>
                          </div> */}
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            {/* <div className="d-flex justify-content-start"> */}
                            <label>
                              WhatsApp No.
                            </label>
                              <input
                                onChange={NumericOnly}
                                onKeyDown={handleEnter}
                                onKeyUp={keyupHandler}
                                className="textColor"
                                maxLength={10}
                                type="num"
                                name="whatsaap"
                                id="WhatsApp"
                              />
                            {/* </div> */}
                          </div>
                          <div className="col-6"></div>
                          <div className="col-6">
                            <p className="txt2">
                              (Country code w/o'+,0'e.g.9199xxxxxx)
                            </p>
                          </div>
                          {/* <div className="col-3">
                            <label>Tel. No.</label>
                          </div> */}
                          <div className="col-lg-6 col-md-6 col-sm-12">
                          <label>Tel. No.</label>
                            <input
                              onKeyDown={handleEnter}
                              onKeyUp={keyupHandler}
                              className="textColor"
                              type="num"
                              name="tel"
                              id="tel"
                            />
                          </div>
                          {/* <div className="col-3">
                            <label className="d-flex justify-content-center ps-0 fax">
                              Fax.
                            </label>
                          </div> */}
                          <div className="col-lg-6 col-md-6 col-sm-12">
                           
                            <label>
                              Fax.
                            </label>
                              <input
                                onKeyDown={handleEnter}
                                onKeyUp={keyupHandler}
                                className="textColor"
                                type="text"
                                name="fax"
                                id="fax"
                              />
                            
                          </div>

                          {/* <div className="col-3">
                            <label>Contact Person</label>
                          </div> */}
                          <div className="col-lg-6 col-md-6 col-sm-12">
                          <label>Contact Person</label>
                            <input
                              onKeyDown={handleEnter}
                              onKeyUp={keyupHandler}
                              className="textColor"
                              type="num"
                              name="Contact person"
                              id="contactPerson"
                            />
                          </div>
                          {/* <div className="col-3">
                            <label className="d-flex justify-content-center ps-0">
                              Transport
                            </label>
                          </div> */}
                          <div className="col-lg-6 col-md-6 col-sm-12">
                      
                            <label>
                              Transport
                            </label>
                              <input
                                onKeyDown={handleEnter}
                                onKeyUp={keyupHandler}
                                className="textColor"
                                type="text"
                                name="transport"
                                id="fax"
                              />
                            
                          </div>

                          {/* <div className="col-3">
                            <label>Station</label>
                          </div> */}
                          <div className="col-lg-6 col-md-6 col-sm-12">
                          <label>Station</label>
                            <input
                              onKeyDown={handleEnter}
                              onKeyUp={keyupHandler}
                              className="textColor"
                              type="text"
                              name="station"
                              id="station"
                            />
                          </div>
                          {/* <div className="col-3">
                            <label className="d-flex justify-content-center ps-0">
                              Pin Code
                            </label>
                          </div> */}
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            
                            <label>
                              Pin Code
                            </label>
                              <input
                                onChange={NumericOnly}
                                onKeyDown={handleEnter}
                                onKeyUp={keyupHandler}
                                className="textColor"
                                type="num"
                                name="pin code"
                                id="fax"
                              />
                            
                          </div>

                          {/* <div className="col-1">
                            <label>Distance</label>
                          </div> */}
                          <div className="col-lg-5">
                          <label>Distance</label>
                            <NumberFormat
                              value={distance}
                              onChange = {distanceHandler}
                              onKeyDown={handleKeyEnter}
                              onKeyUp={keyupHandler}
                              className="textColor"
                              type="num"
                              placeholder="0"
                              name="Distance"
                              id="Distance"
                              ref={one}
                            />
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="d-flex justify-content-lg-start  justify-content-md-end justify-content-end">
                              <button className="distance_btn"  onClick={checkDistance} onKeyUp={keyupHandler}>
                                <b>Check Distance</b>
                              </button>
                            </div>
                          </div>
                          {/* <div className="col-4"></div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
            {/* General Info Box End..! */}

            <div className="row" >
              <div className="col-12">
                <button className="note-btn px-3 mx-1" >
                  <b>Notes</b>
                </button>
                <button className="note-btn px-2 mx-1" >
                  <b>Opt. Fields</b>
                </button>
                <button className="note-btn px-3 mx-1" >
                  <b>Multiple Alias</b>
                </button>
                <button className="Acc-btn px-3 mx-1">
                  <b>Acc IMAGE</b>
                </button>
              </div>
            </div>
          </div>
          {/* col-5 end..! */}

          <div className="col-lg-5 col-md-12 col-sm-12 order-lg-2 order-md-2 order-2">
            {/* Other Info Box start..! */}
            <div className="other_info_box mb-5 ps-0">
              <form>
                <fieldset className="border p-2">
                  <legend legend className="float-none w-auto p-2">
                    Other Info.
                  </legend>
                  <div className="row top-box ">
                    <div className="col-12 ">
                      <div className="row mt-5 pt-5">
                        <div className="col-4">
                          <label>Specify Default Sale Type</label>
                        </div>
                        <div className="col-1">
                          <input
                            value={sdstInput}
                            onChange={sdstChange}
                            onKeyDown={handleEnter}
                            onKeyUp={handleKeyUp}
                            maxLength={1}
                            className="textColor"
                            type="text"
                            placeholder="N"
                            name="SDsale"
                            id="specifyType"
                            ref={two}
                          />
                        </div>
                        <div className="col-4">
                          <label className="text-other">
                            Default sale type
                          </label>
                        </div>
                        <div className="col-3">
                          <input
                            value={dstInput}
                            onChange={dstInputHandler}
                            onKeyDown={handleEnter}
                            onKeyUp={keyupHandler}
                            maxLength={1}
                            type="text"
                            className="textColor"
                            name="Dsale"
                            id="defaultType"
                          />
                        </div>

                        <div className="col-4">
                          <label>Specify Default Purc Type</label>
                        </div>
                        <div className="col-1">
                          <input
                            value={sdptInput}
                            onChange={sdptChange}
                            onKeyDown={handleEnter}
                            onKeyUp={keyupHandler}
                            maxLength={1}
                            className="textColor"
                            type="text"
                            placeholder="N"
                            name="Sdpurc"
                            id="specifyType1"
                          />
                        </div>
                        <div className="col-4">
                          <label className="text-other">
                            Default pure type
                          </label>
                        </div>
                        <div className="col-3">
                          <input
                            value={dptInput}
                            onChange={dptInputHandler}
                            onKeyDown={handleEnter}
                            onKeyUp={keyupHandler}
                            maxLength={1}
                            className="textColor"
                            type="text"
                            name="Dpure"
                            id="defaultType"
                          />
                        </div>

                        <div className="col-4">
                          <label className="text-other">Freeze Sale Type</label>
                        </div>
                        <div className="col-1">
                          <input
                            value={fstInput}
                            onChange={fstInputHandler}
                            onKeyDown={handleEnter}
                            onKeyUp={keyupHandler}
                            maxLength={1}
                            className="textColor"
                            type="text"
                            name="SDsale"
                            id="specifyType2"
                          />
                        </div>
                        <div className="col-4">
                          <label className="text-other">
                            Freeze Purc. Type
                          </label>
                        </div>
                        <div className="col-3">
                          <input
                            value={fptInput}
                            onKeyUp={keyupHandler}
                            onChange={fptInputHandler}
                            onKeyDown={handleEnter}
                            maxLength={1}
                            className="textColor"
                            type="text"
                            name="Dsale"
                            id="defaultType"
                          />
                        </div>
                      </div>

                      <div className="row mt-3">
                        <div className="col-3">
                          <label>CST No.</label>
                        </div>
                        <div className="col-3">
                          <input
                            onKeyDown={handleEnter}
                            onKeyUp={keyupHandler}
                            className="textColor"
                            type="text"
                            name="cst"
                            id="cst"
                          />
                        </div>
                        <div className="col-3">
                          <label>LST No.</label>
                        </div>
                        <div className="col-3">
                          <input
                            onKeyUp={keyupHandler}
                            onKeyDown={handleEnter}
                            className="textColor"
                            type="text"
                            name="lst"
                            id="lst"
                          />
                        </div>

                        <div className="col-3">
                          <label className="other-lbl-txt textLink">
                            Service Tax No.
                          </label>
                        </div>
                        <div className="col-3"></div>
                        <div className="col-3">
                          <label className="other-lbl-txt textLink">
                            LBT No.
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="row mt-5 pt-5 mb-5 pb-4">
                        <div className="col-3">
                          <label>Bank Name</label>
                        </div>
                        <div className="col-9">
                          <input
                            onKeyDown={handleEnter}
                            onKeyUp={keyupHandler}
                            className="textColor"
                            type="text"
                            name="bankName"
                            id="Bank"
                          />
                        </div>

                        <div className="col-3">
                          <label>Bank Acc No.</label>
                        </div>
                        <div className="col-9">
                          <input
                            onKeyDown={handleEnter}
                            onKeyUp={keyupHandler}
                            className="textColor"
                            type="num"
                            name="bankAcc"
                            id="Bank"
                          />
                        </div>

                        <div className="col-3">
                          <label>IFSC Code</label>
                        </div>
                        <div className="col-9">
                          <input
                            // onKeyDown={handleEnter}
                            onKeyUp={keyupHandler}
                            className="textColor"
                            type="text"
                            name="bankAcc"
                            id="Bank"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-12 mb-5 pb-5">
                      <div className="row">
                        <div className="col-3">
                          <p className="textLink other-lbl-txt px-0">
                            Enable Email Query
                          </p>
                        </div>
                        <div className="col-3"></div>

                        <div className="col-3 other-lbl-txt  px-0">
                          <p className="textLink">Enable Sms Query</p>
                        </div>
                        <div className="col-3"></div>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
            {/* Other Info Box End..! */}
            <div className="row mt-5">
              <div className="col-6"></div>

              {/* eslint-disable-next-line no-undef */}
              <div className="col-6 d-flex justify-content-end  ">
                <button className="px-4 save-btn" onClick={saveHandler}>
                  Save
                </button>
                <button className="px-4 ms-2 quit-btn">Quit</button>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-12 col-sm-12 order-lg-3 order-md-3 order-3">
            <div className="info_box">
              <form>
                <fieldset className="border p-2">
                  <legend legend className="float-none w-auto p-2">
                    Extra Info.
                  </legend>
                  <textarea type="text" name="ExtraInfo" id="extraInfo" />
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    
  );
};


export default AddAccountMaster;
