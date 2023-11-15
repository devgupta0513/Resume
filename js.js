function AddNewskills() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('skFIeld');
    newNode.classList.add('mt-2');
    newNode.setAttribute('placeholder', 'ENTER YOUR SKILLS');
    newNode.setAttribute("rows", 3);


    // newNode.setAttribute("cols",90);

    let skob = document.getElementById('sk');
    let AddSkillsob = document.getElementById('AddSkills');
    skob.insertBefore(newNode, AddSkillsob);

}



function AddNewWE() {

    let newNode2 = document.createElement('textarea');
    newNode2.classList.add('form-control');
    newNode2.classList.add('weFIeld');
    newNode2.classList.add('mt-2');
    newNode2.setAttribute('placeholder', 'ENTER YOUR EXPERIENCE');
    newNode2.setAttribute("rows", 3);
    // newNode2.setAttribute("cols",90);

    let WEob = document.getElementById('WE');
    let addweob = document.getElementById('addwe');
    WEob.insertBefore(newNode2, addweob);
}


function AddNewAca() {

    let newNode3 = document.createElement('textarea');
    newNode3.classList.add('form-control');
    newNode3.classList.add('acadFIeld');
    newNode3.setAttribute('placeholder', 'ENTER YOUR ACADEMICS');
    newNode3.setAttribute("rows", 3);
    newNode3.classList.add('mt-2');
    // newNode3.setAttribute("cols",90);

    let acadob = document.getElementById('acad');
    let addaqob = document.getElementById('addaq');
    acadob.insertBefore(newNode3, addaqob);
}


function ResumeDone() {


    document.getElementById('name1').innerHTML = document.getElementById('nameField').value;
    document.getElementById('name2').innerHTML = document.getElementById('nameField').value;

    document.getElementById('number1').innerHTML = document.getElementById('phoneField').value;

    document.getElementById('address1').innerHTML = document.getElementById('addField').value;

    document.getElementById('intro2').innerHTML = document.getElementById('introField').value;

    document.getElementById('gt').innerHTML = document.getElementById('gitField').value;
    document.getElementById('ldin').innerHTML = document.getElementById('linkedField').value;
    document.getElementById('ccf').innerHTML = document.getElementById('cchefField').value;
    document.getElementById('31').innerHTML = document.getElementById('13').value;


    let wes = document.getElementsByClassName("weFIeld");
    let str = "";
    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;

    } document.getElementById('work1').innerHTML = str;




    let sks = document.getElementsByClassName("skFIeld");
    let str2 = "";
    for (let i = 0; i < sks.length; i++) {
        str2 = str2 + `<li> ${sks[i].value} </li>`;

    } document.getElementById('skill1').innerHTML = str2;
    console.log(str2);


    let aqs = document.getElementsByClassName("acadFIeld");
    let str3 = "";
    for (let e of aqs) {
        str3 = str3 + `<li> ${e.value} </li>`;

    } document.getElementById('aca1').innerHTML = str3;
    console.log(str);

    let file = document.getElementById("imgField").files[0];

    console.log(file);
  
    let reader = new FileReader();
  
    reader.readAsDataURL(file);
  
    console.log(reader.result);
  
    //set the image to template
  
    reader.onloadend = function () {
      document.getElementById("imgTemplate").src = reader.result;
    };
  
  


      

    document.getElementById('resume-form').style.display = 'none';
    document.getElementById('resume-template').style.display = 'block';

}

function printing() {
    window.print();

}