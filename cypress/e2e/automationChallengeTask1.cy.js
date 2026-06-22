describe('Part 10: Assignment Challenge Tasks', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Challenge Task 3: Subscribe to Newsletter via Footer Input Field', () => {
    cy.get('#footer').scrollIntoView()
    cy.get('.footer-widget h2').should('contain', 'Subscription')

    cy.get('#susbscribe_email').type('newsletter_student@test.com')

    cy.get('#subscribe').click()

    cy.get('.alert-success')
      .should('be.visible')
      .and('contain', 'You have been successfully subscribed!')
  })

  it('Challenge Task 4: Test Left Sidebar Category Navigation Links', () => {
    cy.get('.left-sidebar').should('be.visible')

    cy.contains('Women').click()

    cy.get('#Women a').first().click()

    cy.get('.title').should('contain', 'Women - Dress Products')
  })

})
