// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

describe('Part 2: Homepage Test', () => {
  beforeEach(() => {
    cy.visit('/') 
  })

  it('Test Case 1: Verify Homepage Loads Successfully', () => {
    cy.url().should('include', 'automationexercise.com')
    cy.get('.logo img').should('be.visible')
    cy.get('.shop-menu').should('be.visible')
    cy.contains('Signup / Login').should('be.visible')
  })

})
