/// <reference types="cypress" />

describe('Google Items', () => {

    it('Validate Google logo visibility', () => {
        cy.visit('https://www.google.com/');
        cy.get('.lnXdpd').should('be.visible')

    })
    it('Validate Google search bar visibility', () => {
        cy.visit('https://www.google.com/');
        cy.get('#APjFqb').should('be.visible')

    })

    it('Validate "Google search" button visibility', () => {
        cy.visit('https://www.google.com/');
        cy.get('.gNO89b').last()
        .should('have.value', "Google Search")
        .and('be.visible')
        
    })

    it('Validate "im feeling lucky" button visibility', () => {
        cy.visit('https://www.google.com/');
        cy.get('[name="btnI"]').last()
        .should('have.value', "I'm Feeling Lucky")
        .and('be.visible')
    })
    

})

        