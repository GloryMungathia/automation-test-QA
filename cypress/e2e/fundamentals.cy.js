// describe('My First Test Suite',() =>{
//     it ('visit the Cypress demo page',() =>{
//         cy.visist('https://example.cypress.io')
//     })
// })
describe('My First Test Suite', () => {
  it('visits the Cypress demo page', () => {
    cy.visit('https://example.cypress.io')
  })
  it('clicks a link and types into a field', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.get('.action-email').type('test@example.com')
    cy.get('.action-email').should('have.value', 'test@example.com')
  })
})
describe('Form Submission Practice', () => {
  it('fills out a login form', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/secure')
    cy.get('.flash.success').should('contain', 'You logged into a secure area')
  })
})

describe('Table Practice', () => {
  it('visits the tables page', () => {
    cy.visit('https://the-internet.herokuapp.com/tables')
    cy.get('#table1 tbody tr').should('have.length', 4)
    cy.get('#table1 thead tr th').should('have.length', 6)
    cy.get('#table1 tbody tr').first().find('td').eq(0).should('contain', 'Smith')
    cy.get('#table1 tbody tr').first().contains('delete').click()
    cy.url().should('include', '#delete')
  })
})

describe('Browser Interactions', () => {
  it('goes back and forward between pages', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.contains('Checkboxes').click()
    cy.go('back')
    cy.url().should('eq', 'https://the-internet.herokuapp.com/')
    cy.go('forward')
    cy.url().should('include', '/checkboxes')
  })
  it('reloads the page', () => {
    cy.visit('https://the-internet.herokuapp.com/checkboxes')
    cy.reload()
    cy.get('#checkboxes').should('be.visible')
  })

  it('handles a JS alert', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.on('window:alert', (text) => {
      expect(text).to.equal('I am a JS Alert')
    })
    cy.contains('Click for JS Alert').click()
  })
  it('handles a JS confirm dialog', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.on('window:confirm', () => true)
    cy.contains('Click for JS Confirm').click()
    cy.get('#result').should('contain', 'Ok')
  })

  it('handles a JS prompt dialog', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns('Hello Cypress')
    })
    cy.contains('Click for JS Prompt').click()
  })
})


describe('Keyboard Actions', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  })

  it('types and presses Enter', () => {
    cy.get('#username').type('tomsmith{enter}')
  })

  it('presses Escape after typing', () => {
    cy.get('#password').type('secret{esc}')
  })

  it('presses Arrow keys', () => {
    cy.get('#username').type('hello{leftarrow}{rightarrow}{uparrow}{downarrow}')
  })

  it('presses Delete and Backspace', () => {
    cy.get('#username').type('tomsmith{del}{backspace}')
  })
})

describe('Scrolling', () => {
  it('scrolls to the bottom of the page', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.scrollTo('bottom')
  })

  it('scrolls to the top of the page', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.scrollTo('bottom')
    cy.scrollTo('top')
  })

  it('scrolls to a specific element and verifies it is visible', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.contains('Large & Deep DOM').scrollIntoView()
    cy.contains('Large & Deep DOM').should('be.visible')
  })
})

describe('File Upload', () => {
  it('uploads an image file', () => {
    cy.visit('https://the-internet.herokuapp.com/upload')
    cy.get('#file-upload').selectFile('cypress/fixtures/sample-image.png')
    cy.get('#file-submit').click()
    cy.get('#uploaded-files').should('contain', 'sample-image.png')
  })
})