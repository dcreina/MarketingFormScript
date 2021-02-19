MsCrmMkt.MsCrmFormLoader.on('formSubmit', function(event) {
   
  var firstName = document.getElementById('3f746946-34b4-442c-a677-e232cdd2bc40').value;
  //  lastName = document.getElementById('e1dfc514-f301-4cb2-855a-4c8fa8331207').value;
  // var businessEmail = document.getElementById('7f685ebb-7c54-4cff-a1bc-772562d25c38').value;
  // var phoneNumber = document.getElementById('6934c560-14d2-ea11-a812-000d3a315106').value;
  // var region = document.getElementById('3931c4cc-83d7-ea11-a813-000d3a3155c1').value;
  // var companyName = document.getElementById('ac9ddb60-616f-4f12-b4e2-9202f688ed2f').value;
  // var jobTitle = document.getElementById('7646c7aa-3a6d-4b55-9a82-4d7a255a7eb3').value;
  // var howCanWeHelp = document.getElementById('317450f3-14d2-ea11-a812-000d3a315106').value;
  // var letterNumber = /^\w+[-\.\w]*@(?!(?:icertis|ibbaka|smgknowledge|getpaulford|barnsandnobles|apttus|vendavo|hotmail|gmail|yahoo|outlook|icloud|sympatico|aol|technologyinstalls|technicalbin|qualityguestpost|vistex|enable|approject|technology-desk|techtimesco|exceedra)\.com$)\w+[-\.\w]*?\.\w{2,4}$/;

  if (firstName.value.length >= 3) {
  alert("First Name must contain 3 or more letters");
  event.preventDefault();
});

/*
&& businessEmail.value.match(letterNumber)

function isValidMailAddress(email) {
    var match = /^\w+[-\.\w]*@(\w+[-\.\w]*?\.\w{2,4})$/.exec(email);
    if (!match)
        return false;

    var forbiddenDomains = ["icertis.com", "ibbaka.com", "smgknowledge.com", "getpaulford.com", "barnsandnobles.com", "apttus.com", "vendavo.com", "hotmail.com", "gmail.com", "yahoo.com", "outlook.com", "icloud.com", "sympatico.com", "aol.com", "technologyinstalls.com", "technicalbin.com", "qualityguestpost.net", "vistex.com", "enable.com", "approject.net", "technology-desk.com", "techtimesco.com", "exceedra.com"];
    if (forbiddenDomains.indexOf(match[1].toLowerCase()) >= 0)
        return false;

    return true;
}

function stringLengthCheck(name, minlength, maxlength)
{
var mnlen = minlength;
var mxlen = maxlength;
 
if(name.value.length<mnlen || name.value.length> mxlen)
{ 
alert("Name should be " +mnlen+ " to " +mxlen+ " characters.");
return false;
}
else
{ 
return true;
}
}*/


