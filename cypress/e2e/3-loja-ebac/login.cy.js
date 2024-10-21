/// < reference types="cypress"/>

describe('funcionalidade: login', () => {

    beforeEach(() => {
     cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
});

    afterEach(() => {
     cy.screenshot() 
});



    it( 'Deve fazer o login com sucesso', () => {
         cy.get('#username').type('gabriel-teste@gmail.com')
         cy.get('#password').type('32247443gb')
         cy.get('.woocommerce-form > .button').click()
         cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'gabriel-teste (não é gabriel-teste? Sair)')
    })


    it.only('deve exibir uma mensagem de erro ao inserir um usúario invalido', () => {
         cy.get('#username').type('chuchu@gmail.com')
         cy.get('#password').type('32247443gb')
         cy.get('.woocommerce-form > .button').click()
         cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido.')
    });


    it('deve exibir uma mensagem de erro ao inserir uma senha invalida', () => {   
         cy.get('#username').type('gabriel-teste@gmail.com')
         cy.get('#password').type('000000')
         cy.get('.woocommerce-form > .button').click()
         cy.get('.woocommerce-error').should('contain' , 'A senha fornecida para o e-mail gabriel-teste@gmail.com está incorreta.')
    });     

    

})

