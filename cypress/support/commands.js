Cypress.Commands.add('login', () => {
  
  const login_id = Cypress.env('login_id') 
  const password = Cypress.env('password')

  cy
    .visit('https://app.click.dev/login')
  cy
    .get('#email')
    .type(login_id)
  cy
    .get('#password')
    .type(password)
  cy
    .get('.btn-login').click()
  cy
    .wait(1000)
});