describe('Part 7: Cart Functionality Tests', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Test Case 7: Add First Product to Cart and Verify Details', () => {
    cy.contains('Products').click()

    cy.get('.add-to-cart').first().click({ force: true })

    cy.contains('View Cart').click()

    cy.url().should('include', '/view_cart')
    cy.get('#cart_info_table').should('be.visible')

    cy.get('#cart_info_table').should('contain', 'Blue Top')

    cy.get('.cart_quantity').should('contain', '1')
    cy.get('.cart_price').should('be.visible')
  })

  it('Test Case 8: Remove Product From Cart and Verify Empty State', () => {
    cy.contains('Products').click()
    cy.get('.add-to-cart').first().click({ force: true })
    cy.contains('View Cart').click()

    cy.get('.cart_quantity_delete').click()

    cy.get('#empty_cart').should('be.visible')
      .and('contain', 'Cart is empty!')
  })

})

