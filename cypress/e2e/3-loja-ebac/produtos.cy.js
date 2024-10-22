/// < reference types="cypress"/>


describe('Funcionalidade: Produtos', () => {
    
    beforeEach(() => {
        cy.visit('produtos')
    });

     it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block').first()
        cy.get('.products > .row').contains('Abominable Hoodie')
        cy.get('.product-block').last()
    });



});