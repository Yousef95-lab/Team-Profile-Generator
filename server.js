const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const fs = require('fs');


const team = [];


const employeeType = [ { 
  type: 'list', 
  name: 'employeeType',
  message: 'What type of employee would you like to add?',
  choices: ["Manager", "Engineer", "Intern", "None"] }
]


const managerQuestions = [
    
        {
            type: 'input',
            name: 'name',
            message: 'What is your name'
          },
        
          {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
          },
        
          {
            type: 'input',
            name: 'id',
            message: 'What is your id?'
          },
        
          {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?'
          },
]
    

const engineerQuestions = [
        {
            type: 'input',
            name: 'name',
            message: 'What is your name'
          },
        
          {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
          },
        
          {
            type: 'input',
            name: 'id',
            message: 'What is your id?'
          },
        
          {
            type: 'input',
            name: 'gitHub',
            message: 'What is your gitHub username?'
          },
]
        

const internQuestions = [
    
        {
            type: 'input',
            name: 'name',
            message: 'What is your name'
          },
        
          {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
          },
        
          {
            type: 'input',
            name: 'id',
            message: 'What is your id?'
          },
        
          {
            type: 'input',
            name: 'school',
            message: 'What school did you go to?'
          },
]



const generateEngineer = () => {
  inquirer.prompt(engineerQuestions)
  .then(response => {
    const engineer = new Engineer(response.name, response.email, response.id, response.gitHub)
    team.push(engineer)
    generateTeam();
  })
}

const generateManager = () => {
  inquirer.prompt(managerQuestions)
  .then(response => {
    const manager = new Manager(response.name, response.email, response.id, response.officeNumber)
    team.push(manager)
    generateTeam();
  })
}

const generateIntern = () => {
  inquirer.prompt(internQuestions)
  .then(response => {
    const intern = new Intern(response.name, response.email, response.id, response.school)
    team.push(intern)
    generateTeam();
  })
}

function generateTeam() {
  inquirer.prompt(employeeType)
  .then(response => {
    switch(response.employeeType) {
      case "Engineer":
        generateEngineer();
        break;

      case "Manager":
        generateManager();
        break;

      case "Intern":
      generateIntern();
      break;

      case "None":
      console.log(team[0]['name']);
      // generateHTML(team);
      //generate the html if they click none
      break;
    }
  })
}

generateTeam();



const generateHtml = () => {
  return `<!doctype html>
  <html lang="en">
  
  <head>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  
      <!-- Bootstrap CSS -->
      <link rel="stylesheet" href="./style.css">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
  
      <title>Team Profile</title>
  </head>
  
  <body>
      <div class="jumbotron jumbotron-fluid">
          <div class="container">
              <h1 class="display-4">My Team</h1>
          </div>
      </div>
  
  
      <div class="row">
          <div class=col-2>
  
          </div>
  
          <div class=col-2>
              <div class="card bg-light mb-3" style="max-width: 18rem;" id="manager">
                  <div class="card-header">
                      <p>${team.name}</p>
                      <p>${team.role}</p>
                  </div>
                  <div class="card-body">
                      <h5 class="card-title">Light card title</h5>
                      <p class="card-text">${team.email}, ${team.id}, ${team.officeNumber}</p>
                  </div>
              </div>
          </div>
  
          <div class=col-1>
  
          </div>
  
          <div class=col-2>
              <div class="card bg-light mb-3" style="max-width: 18rem;" id="engineer1">
                  <div class="card-header">
                      <p>${team.name}</p>
                      <p>${team.role}</p>
                  </div>
                  <div class="card-body">
                      <h5 class="card-title">Light card title</h5>
                      <p class="card-text">${team.email}, ${team.id}, ${team.gitHub}</p>
                  </div>
              </div>
          </div>
  
          <div class=col-1>
  
          </div>
  
          <div class=col-2>
              <div class="card bg-light mb-3" style="max-width: 18rem;" id="engineer1">
                  <div class="card-header">
                      <p>${team.name}</p>
                      <p>${team.role}</p>
                  </div>
                  <div class="card-body">
                      <h5 class="card-title">Light card title</h5>
                      <p class="card-text">${team.email}, ${team.id}, ${team.gitHub}</p>
                  </div>
              </div>
          </div>
  
          <div class=col-2>
  
          </div>
      </div>
      <br>
  
      <div class="row">
          <div class= "col-4">
  
          </div>
  
  
          <div class=col-2>
              <div class="card bg-light mb-3" style="max-width: 18rem;" id="engineer1">
                  <div class="card-header">
                      <p>${team.name}</p>
                      <p>${team.role}</p>
                  </div>
                  <div class="card-body">
                      <h5 class="card-title">Light card title</h5>
                      <p class="card-text">${team.email}, ${team.id}, ${team.gitHub}</p>
                  </div>
              </div>
          </div>
  
          
          <div class = "col-2">
              <div class="card bg-light mb-3" style="max-width: 18rem;" id="intern">
                  <div class="card-header">
                      <p>${team.name}</p>
                      <p>${team.role}</p>
                  </div>
                  <div class="card-body">
                      <h5 class="card-title">Light card title</h5>
                      <p class="card-text">${team.email}, ${team.id}, ${team.school}</p>
                  </div>
              </div>   
          </div>
  
  
          <div class= "col-4">
              
          </div>
      </div>
  
  </body>
  
  </html>`
}




const init = () => {
  generateHtml(...team).then((data) => {
    try {
      const html = generateHTML(...team);
      fs.writeFileSync('index.html', html);
      console.log('Successfully wrote to index.html');
    } catch (error) {
      console.log(error);
    }
  });

};

init();













