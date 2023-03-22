import React, {useState} from 'react';
import './App.css';
import logo from "./assets/screenshot-logo.png";
import FruitCounter from "./Components/FruitCounters";
import FormInput from "./Components/Form";
import FormDropdown from "./Components/FormDropdown";


function App() {

    const [strawberryValue, setStrawberryValue] = useState(0);
    const [bananaValue, setBananaValue] = useState(0);
    const [appleValue, setAppleValue] = useState(0);
    const [kiwiValue, setKiwiValue] = useState(0);

    const [valueFrontName, setFrontNameValue] = useState("");
    const [valueLastName, setLastNameValue] = useState("");
    const [valueAge, setAgeValue] = useState(0);
    const [valueZipCode, setZipCodeValue] = useState("");
    const [valueDropdown, setValueDropdown] = useState("");
    const [valueCheckBox, setValueCheckBox] = useState("");
    const [valueTextInputField, setValueTextInputField] = useState("");
    const [termsAndConditionsValue, toggleTermsAndConditionsValue] = useState("");

    function resetFunction() {
        return setStrawberryValue(0), setBananaValue(0), setAppleValue(0), setKiwiValue(0);
    }

    function submitFunction(e) {
        e.preventDefault()
        let result = ["Bestelling is: " + strawberryValue + " aardbeien, " + bananaValue + " bananen, " + appleValue + " appels, " + kiwiValue + " kiwi`s",
                      "Voornaam is " + valueFrontName,
                      "Achternaam is " + valueLastName,
                      "Leeftijd is " + valueAge,
                      "Postcode is " + valueZipCode,
                      "Bezorgfrequentie is " + valueDropdown,
                      "Bezorgmoment is " + valueCheckBox,
                      "Commentaar is " + valueTextInputField,
                      "Voorwaarden geaccepteerd is " + termsAndConditionsValue,
        ];
        console.log(result)
    }

  return (
    <>
      <img src={logo} alt="logo fruitmand"/>
        <FruitCounter
            classWrapperAttribute="fruit-counter"
            classAttribute="fruit-item"
            valueAttribute="&#127827; Aardbeien"
            counterValue={strawberryValue}
            setCounterValue={setStrawberryValue}
        />
        <FruitCounter
            classWrapperAttribute="fruit-counter"
            classAttribute="fruit-item"
            valueAttribute="&#127820; Bananen"
            counterValue={bananaValue}
            setCounterValue={setBananaValue}
        />
        <FruitCounter
            classWrapperAttribute="fruit-counter"
            classAttribute="fruit-item"
            valueAttribute="&#127823; Appels"
            counterValue={appleValue}
            setCounterValue={setAppleValue}
        />
        <FruitCounter
            classWrapperAttribute="fruit-counter"
            classAttribute="fruit-item"
            valueAttribute="&#129373; Kiwi's"
            counterValue={kiwiValue}
            setCounterValue={setKiwiValue}
        />
        <button className="reset-button" type="button" onClick={resetFunction}>Reset</button>


        <form onSubmit={submitFunction}>
         <fieldset>
             <legend>Bestel gegevens</legend>
             <FormInput
                labelFor="name"
                labelName="Voornaam"
                inputType="text"
                inputId="name"
                inputName="name"
                massageValue={valueFrontName}
                setMassageValue={setFrontNameValue}
             />
             <br/>
             <FormInput
                 labelFor="lastName"
                 labelName="Achternaam"
                 inputType="text"
                 inputId="lastName"
                 inputName="lastName"
                 massageValue={valueLastName}
                 setMassageValue={setLastNameValue}
             />
             <br/>
             <FormInput
                 labelFor="age"
                 labelName="Leeftijd"
                 inputType="number"
                 inputId="age"
                 inputName="age"
                 massageValue={valueAge}
                 setMassageValue={setAgeValue}
             />
             <br/>
             <FormInput
                 labelFor="zip-code"
                 labelName="Postcode"
                 inputType="text"
                 inputId="zip-code"
                 inputName="zip-code"
                 massageValue={valueZipCode}
                 setMassageValue={setZipCodeValue}
             />
             <br/>
             <FormDropdown
                dropdownLabelFor="deliver"
                dropdownLabelName="Bezorging"
                dropdownName="deliver"
                dropdownId="deliver"
                dropdownOptionValueOne="iedere week"
                dropdownOptionNameOne="iedere week"
                dropdownOptionValueTwo="om de week"
                dropdownOptionNameTwo="om de week"
                dropdownOptionValueThree="iedere maand"
                dropdownOptionNameThree="iedere maand"
                setValueDropdown={setValueDropdown}
             />
             <br/>
             <input type="radio" id="day" name="time" onChange={() => setValueCheckBox("Overdag")}/>
             <label htmlFor="day">Overdag</label>
             <input type="radio" id="night" name="time" onChange={() => setValueCheckBox("'s avonds")}/>
             <label htmlFor="night">'s avonds</label><br/>
             <label htmlFor="comments">Opmerkingen</label><br/>
             <textarea name="comments" id="comments" cols="30" rows="10" onChange={(e) => setValueTextInputField(e.target.value)}/><br/>
             <input type="checkbox" id="conditions" name="conditions" onChange={() => toggleTermsAndConditionsValue(!termsAndConditionsValue)}/>
             <label htmlFor="conditions">Ik ga akkoord met de voorwaarden</label><br/>
             <button type="submit">Verzend</button>
         </fieldset>
     </form>
    </>
  );
}

export default App;
