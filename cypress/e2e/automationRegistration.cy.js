describe('Part 3: User Registration Test', () => {
  const uniqueEmail = `student${Date.now()}@test.com`
  beforeEach(() => {
    cy.visit('/')
  })

  it('Test Case 2: Register a New User Account Successfully', () => {
    cy.contains('Signup / Login').click()
    cy.get('[data-qa="signup-name"]').type('Automation Student')
    cy.get('[data-qa="signup-email"]').type(uniqueEmail)
    cy.get('[data-qa="signup-button"]').click()
    cy.get('#id_gender1').check()
    cy.get('[data-qa="password"]').type('Password123!')
    cy.get('[data-qa="days"]').select('15')
    cy.get('[data-qa="months"]').select('January')
    cy.get('[data-qa="years"]').select('2000')
    cy.get('[data-qa="first_name"]').type('John')
    cy.get('[data-qa="last_name"]').type('Doe')
    cy.get('[data-qa="address"]').type('123 Testing Street')
    cy.get('[data-qa="country"]').select('United States')
    cy.get('[data-qa="state"]').type('New York')
    cy.get('[data-qa="city"]').type('New York City')
    cy.get('[data-qa="zipcode"]').type('10001')
    cy.get('[data-qa="mobile_number"]').type('1234567890')
    cy.get('[data-qa="create-account"]').click()
    cy.get('[data-qa="account-created"]').should('be.visible')
    cy.contains('Continue').click()
    cy.contains('Logged in as Automation Student').should('be.visible')
    
    cy.wait(500)
    cy.contains('Delete Account').click()
    cy.get('[data-qa="account-deleted"]').should('be.visible')
    cy.contains('Continue').click()
  })

})
