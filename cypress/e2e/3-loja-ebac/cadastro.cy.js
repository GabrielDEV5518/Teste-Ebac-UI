 /// < reference types="cypress"/>
 import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro', () => {


    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
    });
    
     it('Deve completar o cadastro com sucesso', () => {
        var nome = faker.person.firstName()
        var sobrenome = faker.person.lastName()
        var email = faker.internet.email()
        
        // Criação do cadastro
        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type('0000')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')


        //Modificação de detalhes da conta 
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(sobrenome)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('exist')
     });



});