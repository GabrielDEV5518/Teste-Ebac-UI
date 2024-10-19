/// < reference types="cypress"/>

describe('funcionalidade: login', () => {

    it ( 'Deve fazer o login com sucesso', () => {
         cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
         cy.get('#username').type('gabriel-teste@gmail.com')
         cy.get('#password').type('32247443gb')
         cy.get('.woocommerce-form > .button').click()
         cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'gabriel-teste (não é gabriel-teste? Sair)')
         
    })


})

