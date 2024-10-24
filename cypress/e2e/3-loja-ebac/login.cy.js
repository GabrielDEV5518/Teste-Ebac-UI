/// < reference types="cypress"/>

const perfil = require('../../fixtures/perfil.json')

describe('funcionalidade: login', () => {

    beforeEach(() => {
     cy.visit('my-account')
});

    afterEach(() => {     cy.screenshot() 
  });



    it( 'Deve fazer o login com sucesso', () => {
         cy.get('#username').type(perfil.usuario)
         cy.get('#password').type(perfil.senha)
         cy.get('.woocommerce-form > .button').click()
         cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
    })


    it('deve exibir uma mensagem de erro ao inserir um usúario invalido', () => {
         cy.get('#username').type('chuchu@gmail.com')
         cy.get('#password').type('32247443gb')
         cy.get('.woocommerce-form > .button').click()
         cy.get('.woocommerce-error').should('exist')
    });


    it('deve exibir uma mensagem de erro ao inserir uma senha invalida', () => {   
         cy.get('#username').type('gabriel-teste@gmail.com')
         cy.get('#password').type('000000')
         cy.get('.woocommerce-form > .button').click()
         cy.get('.woocommerce-error').should('exist')
    });     

    
    it( 'Deve fazer o login com sucesso - Usando Fixture', () => {
         cy.fixture('perfil').then( dados => {
         cy.get('#username').type(perfil.usuario, {log:false})
         cy.get('#password').type(perfil.senha , {log: false})
         cy.get('.woocommerce-form > .button').click()
         cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')


    })
    })

    it.only('Deve fazer login - usando Comandos customizados', () => {
     cy.login(perfil.usuario , perfil.senha)
     cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
    })

    





})