const validateSubdomain = (subdomain) => {
  const subdomainRegex = /^[a-z]+[a-z0-9\-]*$/
  if (!subdomainRegex.test(subdomain)) 
    return 'The project name should start with a lowercase letter and should contain only lowercase letters, numbers and dashes.'
  else return true;
}

const validateEmail = (email) => {
  // regex source: https://stackoverflow.com/a/46181
  const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
  if (!emailRegex.test(email)) {
    return 'Please provide a valid email address.';
  }
  else return true;
} 

const validatePass = (pass) => {
  // at least one digit and one letter + at least 8 chars long
  const passRegex = /.{8,}/
  if (!passRegex.test(pass))
    return 'The password should be at least 8 characters long and it should contain at least one digit and a letter.';
  else return true;
}

const questions = {
  NEW_USER: {
    message: `Did you log in previously?`,
    name: 'existingUser',
    type: 'list',
    choices: ['Yes, proceed to login', 'No, create new account'],
  },
  INPUT_EMAIL: {
    message: `Email >`,
    name: 'email',
    type: 'input',
    validate: validateEmail,
  },
  INPUT_PASSWORD: {
    message: `Password >`,
    name: 'password',
    type: 'password',
    mask: '*',
    validate: validatePass
  },
  INPUT_SUBDOMAIN: {
    message: `Choose a project name:
(only lowercase characters, numbers, and dashes allowed)
> `,
    name: 'subdomain',
    type: 'input',
    validate: validateSubdomain
  },
  CONFIRM_SUBDOMAIN: {
    name: 'deployOk',
    message: 'Subdomain is available. Do you want to proceed?',
    type: 'confirm'
  }
}

module.exports = { questions };