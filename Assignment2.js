let Submitbtn = document.querySelector('button');
Submitbtn.addEventListener('click', getReport);

function getGrades(course){
  if (course > 90) {
    return 'A+';
    let g = 'A+';
  }
  else if (course > 80 && course <= 90){
    return 'A';
    g = 'A';
  }
  else if (course > 70 && course <= 80){
    return 'B+';
    g = 'B+';
  }
  else if (course > 60 && course <= 70){
    return 'B';
    g = 'B';
  }
  else if (course > 50 && course <= 60){
    return 'C+';
    g = 'C+';
  }
  else if (course > 40 && course <= 50){
    return 'C';
    g = 'C';
  }
  else if (course > 33 && course < 41){
    return 'D';
    g = 'D';
  }
  else if (course < 33){
    return 'F';
    g = 'F';
  }
}

// function getCredits()
// {
//   if (g == 'A+') {
//     return 5;
//   }
//   else if (g=='A'){
//     return 4.5;
//   }
//   else if (g == 'B+'){
//     return 4;
//   }
//   else if (g == 'B'){
//     return 3.5;
//   }
//   else if (g == 'C+'){
//     return 3;
//   }
//   else if (g == 'C'){
//     return 2.5;
//   }
//   else if (g == 'D'){
//     return 2;
//   }
//   else if (g == 'F'){
//     return 1;
//   }
// }

function getReport() {

  var grade = "";  //declare a variable for grade
  //read the marks
  var course1 = Number(document.getElementById('Course1').value);
  var course2 = Number(document.getElementById('Course2').value);
  var course3 = Number(document.getElementById('Course3').value);
  var course4 = Number(document.getElementById('Course4').value);
  var course5 = Number(document.getElementById('Course5').value);

  let totalMarks = course1 + course2 + course3 + course4 + course5;

  //get the average marks
  let averageMarks = totalMarks / 5;


  document.querySelector('#gradeobtained1').innerHTML = getGrades(course1);
  document.querySelector('#gradeobtained2').innerHTML = getGrades(course2);
  document.querySelector('#gradeobtained3').innerHTML = getGrades(course3);
  document.querySelector('#gradeobtained4').innerHTML = getGrades(course4);
  document.querySelector('#gradeobtained5').innerHTML = getGrades(course5);

  document.querySelector('#creditsobtained1').innerHTML = 4;
  document.querySelector('#creditsobtained2').innerHTML = 4;
  document.querySelector('#creditsobtained3').innerHTML = 4;
  document.querySelector('#creditsobtained4').innerHTML = 4;
  document.querySelector('#creditsobtained5').innerHTML = 3;

  
  //display the results
  document.getElementById('txt1Name').innerHTML = document.getElementById('txtName').value;
  document.getElementById('rollno1').innerHTML = document.getElementById('rollNo').value;
  document.getElementById('txtBrnch').innerHTML = document.getElementById('txtBranch').value;;
  document.getElementById('txtSem1').innerHTML = document.getElementById('txtSem').value;
  document.getElementById('txtAvgMarks').innerHTML = averageMarks/10;

}