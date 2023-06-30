/// <reference types="cypress"/>

        Cypress.Commands.add('loginViaApi', (
            email = Cypress.env('userEmail'),
            password = Cypress.env('userPassword')
        ) => {
            cy.request('GET', `https://${email}:${password}@${Cypress.env('apiUrl')}/basic_auth`,)
            .then((response) => {
                expect(response.status).to.eq(200)
                cy.get(response.body).should('contain.text', 'Congratulations! You must have the proper credentials')
            })
        })