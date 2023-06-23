/// <reference types="cypress" />

describe('Navbar test', function() {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Should display online banking content', () => {
        cy.contains('Online Banking').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')
        cy.get('#account_activity_link').should('include.text', 'Account Activity')
    })

    it('Should display feedback content', () => {
        cy.visit('http://zero.webappsecurity.com/feedback.html')
        cy.contains('Feedback').click()
        cy.url().should('include', 'feedback.html')
        cy.get('#feedback-title').should('include.text', 'Feedback')
    })

    it('Should display homepage content', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
        cy.get('h4').should('be.visible')
        cy.get('#transfer_funds_link').should('include.text', 'Transfer Funds')
    })
})