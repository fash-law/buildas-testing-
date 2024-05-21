/// <reference types="cypress" />

describe('Google Search items', () => {

    beforeEach(() => {
        cy.visit('https://www.google.com/');
        cy.get('.gLFyf').type('cypress commands');
        cy.get('[title="Search"]').should('be.visible');
        cy.get('.gNO89b').last().click({force:true});
        cy.wait(2000);
    })

    it('Validate navigation to videos', () => {

        cy.get('.YmvwI').contains('Videos').click()
        .should('be.visible')
        .and('have.text', 'Videos')
        
    })

    it('Validate navigation to images', () => {
    
        cy.get('.YmvwI').contains('Images').click()
        .should('be.visible')
        .and('have.text', 'Images')
    })


})

        