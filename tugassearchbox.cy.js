/// <reference types="cypress" />


describe('Searchbox Test', function() {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Should type into searchbox and submit', () => {
        cy.get('#searchTerm').type('online {enter}')
        cy.get('h2').contains('Search Results:')
        cy.contains('Zero - Free Access to Online Banking')
        cy.contains('Zero - Online Statements')
        cy.url().should('include', 'http://zero.webappsecurity.com/search.html?searchTerm=online')
    })
})