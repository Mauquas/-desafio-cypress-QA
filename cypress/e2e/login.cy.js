describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/')
    cy.get('.icon-user-unfollow').click()
    cy.get('#username').type('Mauricio@teste.com')
    cy.get('#password').type('T25r#@35')
    cy.get('.woocommerce-form > .button').click()
    
  })
})