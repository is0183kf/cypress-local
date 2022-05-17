/// <reference types="cypress" />

context('Actions', () => {

  beforeEach(() => {
    cy.login()
  })
  
  
  it('Make new App', () => {
    cy
      .visit('https://app.click.dev/projects')
      .wait(500)
    cy  
      .get('.header-link').click()
    cy
      .wait(100)
    cy
      .get('.platform-native-app').click()
      .get('.button-choose-database.choose').click()        
      .get('.ant-collapse-header').last().click()
      .get('#name')
      .type('Test App for QA created by cypress')
      .get('.ant-btn-primary').click()
  })
  
  
  it('Go to test canvas', () => {
    cy
      .visit('https://app.click.dev/projects')
    cy
      .wait(1000)
    cy
      .get('.link-to-platform')
      .contains('Test App for QA created by cypress').last().click({force: true})
  })
  
  it('Delete Test App', () => {
    cy
      .visit('https://app.click.dev/projects')  
      //This logic is NEED to be fixed
      .get('.img-delete').first().click()
    cy
      //This logic is NEED to be fixed
      .get('.ant-input').last()
      .type('Test App for QA created by cypress')
    cy
      .get('.btn-submit').click()
  })

    
  it('Logout', () => {
    cy
      .visit('https://app.click.dev/projects')
      .get('.ant-avatar-circle').click()
    cy
      .wait(100)
    cy  
      .get('.ant-dropdown-menu-item-only-child').last().click()
  })


})
