describe('Part 8: Contact Us Form Submission Test', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Test Case 9: Submit Contact Us Form Successfully', () => {
    cy.contains('Contact us').click()

    cy.url().should('include', '/contact_us')
    cy.get('h2.title').should('contain', 'Get In Touch')

    cy.get('[data-qa="name"]').type('Automation Student')
    cy.get('[data-qa="email"]').type('student@test.com')
    cy.get('[data-qa="subject"]').type('Cypress Assignment Help')
    cy.get('[data-qa="message"]').type('This automated contact form script works perfectly!')

    cy.on('window:confirm', (text) => {
      expect(text).to.contains('Press OK to proceed')
      return true 
    })

    cy.get('[data-qa="submit-button"]').click()

    cy.get('.status')
      .should('be.visible')
      .and('contain', 'Success! Your details have been submitted successfully.')
  })

})
