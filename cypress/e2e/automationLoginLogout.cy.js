describe('Part 4: Login and Logout Tests', () => {
  const validEmail = `login_student${Date.now()}@test.com`
  const validPassword = 'Password123!'
  beforeEach(() => {
    cy.visit('/')
  })

  it('Test Case 3: Login and Logout Successfully With Valid Credentials', () => {
    cy.contains('Signup / Login').click()
    cy.get('[data-qa="signup-name"]').type('Login Tester')
    cy.get('[data-qa="signup-email"]').type(validEmail)
    cy.get('[data-qa="signup-button"]').click()
    cy.get('[data-qa="password"]').type(validPassword)
    cy.get('[data-qa="first_name"]').type('John')
    cy.get('[data-qa="last_name"]').type('Doe')
    cy.get('[data-qa="address"]').type('123 Street')
    cy.get('[data-qa="country"]').select('United States')
    cy.get('[data-qa="state"]').type('NY')
    cy.get('[data-qa="city"]').type('NYC')
    cy.get('[data-qa="zipcode"]').type('10001')
    cy.get('[data-qa="mobile_number"]').type('1234567890')
    cy.get('[data-qa="create-account"]').click()
    cy.contains('Continue').click()
    
    cy.contains('Logout').click()

    cy.login(validEmail, validPassword)

    cy.contains('Logged in as Login Tester').should('be.visible')

    cy.wait(2000)

    cy.contains('Logout').click()

    cy.contains('Login to your account').should('be.visible')
  })

  it('Test Case 4: Login With Invalid Credentials Shows Error Message', () => {
    
    cy.login('totally_fake_student_999@invalid.com', 'WrongPassword123!')

    cy.get('.login-form p')
      .should('be.visible')
      .and('contain', 'Your email or password is incorrect!')
  })

})
