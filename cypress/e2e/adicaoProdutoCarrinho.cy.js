describe('template spec', () => {
 
    
  })
  it('passes', () => {
    cy.getAllCookies() 
    cy.visit('http://lojaebac.ebaconline.art.br/')
    //Logim
    cy.get('.icon-user-unfollow').click()
    cy.get('#username').type('Mauricio@teste.com')
    cy.get('#password').type('T25r#@35')
    cy.get('.woocommerce-form > .button').click()
    cy.get('#primary-menu > .menu-item-536 > .dropdown-toggle').click()
    //Adicionar produto no carrinho de compra
    cy.get('a').contains('view all').click();
    cy.get('.next').click()
    cy.get(':nth-child(6) > .page-numbers').contains('5').click()
    cy.get('.prev').click()
    cy.get('.post-3179 > .product-block > .caption > .meta > .infor > .name > a').click()
    cy.get('.plus').click()
    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-Red').click()
    cy.get('.single_add_to_cart_button').click()
    cy.get('.dropdown-toggle > .mini-cart-items').contains('2')
    cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
    //Finalizar pedido
    cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click()
    cy.get('.checkout-button').click()
   
    cy.get('#billing_first_name').type('Teste')
    cy.get('#billing_last_name').type('teste')
    cy.get('#billing_company').type('teste')
    cy.get('#billing_address_1').type('rua teste')
    cy.get('#billing_address_2').type('casa1')
    cy.get('#billing_city').type('São Paulo')
    cy.get('#billing_postcode').type('05954480')
    cy.get('#billing_phone').type('11123456789')
    cy.get('#order_comments').type('teste')
    cy.get('#terms').click()
    cy.get('#place_order').click()
   

})