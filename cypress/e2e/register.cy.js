describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/')
    cy.get('.icon-user-unfollow').click()
    cy.get('#reg_email').type('Mauricio@teste.com')
    cy.get('#reg_password').type('T25r#@35')
    cy.get(':nth-child(4) > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
  })
})