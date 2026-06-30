describe('Mini Project - DemoQA Practice Form', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form')
  })

  it('fills the form, makes selections, uploads a file, and verifies submission', () => {
    cy.get('#firstName').type('Jane')
    cy.get('#lastName').type('Doe')
    cy.get('#userEmail').type('jane.doe@example.com')
    cy.get('label[for="gender-radio-2"]').click()
    cy.get('#userNumber').type('0712345678')
    cy.get('label[for="hobbies-checkbox-1"]').click()
    cy.get('#hobbies-checkbox-1').should('be.checked')
    cy.get('#state').click()
    cy.contains('NCR').click()
    cy.get('#uploadPicture').selectFile('cypress/fixtures/sample-image.png')
    cy.screenshot('screenshotFile')
    cy.get('#submit').scrollIntoView()
    cy.get('#submit').should('be.visible')
    cy.get('#submit').click({ force: true })
    cy.get('.modal-content').should('be.visible')
    cy.get('#example-modal-sizes-title-lg').should('contain', 'Thanks for submitting the form')
    cy.screenshot('form-submitted-success')

  })
})
