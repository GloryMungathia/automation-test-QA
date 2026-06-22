describe('Part 6: Product Details Test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Test Case 6: View Product Details Page and Verify Information Labels', () => {

    cy.contains('Products').click()

    // 2. Click "View Product" link on the very first product item block on the page
    // We use .first() because there are many product blocks with the same "View Product" link text
    cy.get('.choose a').first().click()

    cy.url().should('include', '/product_details/')

    cy.get('.product-information').should('be.visible')


    cy.get('.product-information h2').should('be.visible')


    cy.get('.product-information p').should('contain', 'Category:')


    cy.get('.product-information span span').should('be.visible')

    
    cy.get('.product-information').should('contain', 'Availability:')


    cy.get('.product-information').should('contain', 'Condition:')

    
    cy.get('.product-information').should('contain', 'Brand:')
  })

})
