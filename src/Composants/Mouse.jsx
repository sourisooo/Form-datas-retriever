import {useEffect, useState} from 'react';


export default function Mouse() {


    const [test,setTest] = useState("");
    const [param1,setParam1] = useState("");
    const [param2,setParam2] = useState("");
    const [param3,setParam3] = useState("");
    const [time,setTime]= useState("");
    const [result,setResult] = useState("");
    let data = "";
 
  

window.addEventListener('mouseover', e => {setTest((e.target))});


useEffect(() => {

    const date = new Date();

    setTime(date);
  setParam1(test.type);
  setParam2(test.value);
  setParam3(test.id);

data = {type: param1, value: param2, idi: param3, Date: time};
// console.log(data);
// console.log(param1, typeof param1!=="undefined");

   
 if((typeof param1!=="undefined")&&(param1!="")) fetch
    
  (
      
      "http://localhost:3000/datas", {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)}
      
  )


  setResult(data);
  console.log(result);


},[test]);


/////////////////////////////////////////////////////////////////////////////////////////////////

// Mouse Events: click, dblclick, mousedown, mouseup, contextmenu, mouseout, mousewheel, mouseover
// Touch Events: touchstart, touchend, touchmove, touchcancel
// Keyboard Events: keydown, keyup, keypress
// Form Events: focus, blur, change, submit
// Window Events: resize, scroll, load, unload, hashchange

//////////////////////////////////////////////////////////////////////////////////////////////////


    
    // console.log( "type is: "+test.type,"/value is: /"+test.value,"id is: "+test.id);

return (

    <div>
<form>
  <label for="sexe1"> M. </label>
  <input type= "radio" id="sexe1" value="M" /> 
  
  <label for="sexe2"> Mme. </label> 
  <input type= "radio" id="sexe2" value="F"/> <br />
  
<label for="nom"> </label>
<input type="text" id="nom" placeholder="Votre nom " required/> <br /> <br /> 

<label for="Fréquence"> Combien de fois par mois allez vous au cinéma?</label>
<select id="Fréquence"  required> Fréquence
<option value=">1">Moins de 1 fois </option>
<option value="1"> 1 fois </option>
<option value="2"> 2 fois </option>
<option value="2<"> + de 2 fois </option>
</select>
<br /> <br /> 

<label for="Theme"> Préciser vos thèmes préférés </label> <br /> 
<input type="radio" id="op1" value="Passion" size="30" /> 
<label for="op1"> "Passion" </label> <br /> 
<input type="radio" id="op2"  value="Policier" size="30" /> 
<label for="op2"> "Policier" </label> <br /> 
<input type="radio" id="op3"  value="Fiction" size="30" /> 
<label for="op3"> "Fiction" </label> <br /> 
<input type="radio" id="op4"  value="Aventure" size="30" /> 
<label for="op4"> "Aventure" </label> <br /> 
<input type="radio" id="op5"  value="Autres" size="30" /> 
<label for="op5"> "Autres" </label> <br /> <br /> 

<label for="opinion"> Que pensez-vous du cinéma? </label><br /> 
  <textarea id="opinion" rows="6" cols="80" required></textarea>
  <br /> <br /> 


<button type="reset"> 
RESET ALL FORMS
</button>
</form>
<br /> <br /> 
<form>
  <label for="opinion"> MouseWheel Anything in the DOM</label><br /> 
  <textarea id="opinion" rows="8" cols="80" value={JSON.stringify(result)} disabled="true"></textarea>
  <br /> <br /> 
  
  </form>



    </div>



)













}