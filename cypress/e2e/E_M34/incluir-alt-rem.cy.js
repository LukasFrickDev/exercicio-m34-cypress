/// <reference types="cypress" />


describe('Teste para Agenda de contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it('Deve incluir e adicionar os dados do contato', () => {
        cy.get('input[type="text"]').type('Lukas Frick')
        cy.get('input[type="email"]').type('fricklukas96@gmail.com')
        cy.get('input[type="tel"]').type('958244081')
        cy.get('.adicionar').first().click()
        cy.get('input').should('have.length', 3)
        cy.screenshot('incluindo-contato')
    })

    it('Deve alterar os dados do contato adicionado', () => {
        cy.get(':nth-child(4) > .sc-gueYoa > .edit').click()
        cy.get('input[type="text"]').clear()
        cy.get('input[type="text"]').type('Lukas C. Frick')
        cy.get('input[type="email"]').clear()
        cy.get('input[type="email"]').type('fricklukas96novo@gmail.com')
        cy.get('input[type="tel"]').clear()
        cy.get('input[type="tel"]').type('11958244081')
        cy.screenshot('incluindo-contato-alteracao')
        cy.get('.alterar').click()
    })

    it('Deve cancelar a alteraçao dos dados do contato adicionado', () => {
        cy.get(':nth-child(4) > .sc-gueYoa > .edit').click()
        cy.get('input[type="text"]').clear()
        cy.get('input[type="text"]').type('Lukas C. Frick')
        cy.get('.cancelar').click()
    })

    it('Deve deletar os dados do contato adicionado', () => {
        cy.get(':nth-child(4) > .sc-gueYoa > .delete').click()
        cy.screenshot('removendo-contato')

    })
})