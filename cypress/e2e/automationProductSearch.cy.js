describe('Part 5: Product Search Test', () => {
  // Automatically visit the website homepage before running the test
  beforeEach(() => {
    cy.visit('/')
  })

  it('Test Case 5: Search for a Product and Verify Results', () => {
    cy.contains('Products').click()

    cy.url().should('include', '/products')
    cy.get('.title').should('contain', 'All Products')

    cy.get('#search_product').type('dress')

    cy.get('#submit_search').click()

    cy.get('.title').should('contain', 'Searched Products')

    cy.get('.features_items')
      .should('be.visible')
      .and('contain', 'Dress')
  })

})
