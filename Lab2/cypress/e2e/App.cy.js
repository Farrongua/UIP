describe('Description tests', () => {
    it('visits the app description url', () => {
        
        cy.visit('/application')
      
        cy.get('[data-cy=7]').click()
        cy.get('[data-cy=5]').click()
        
        cy.get('[data-cy=add]').click()

        cy.get('[data-cy=5]').click()
        cy.get('[data-cy=equal]').click()
        cy.get('[data-cy=res]').should('have.text', '80')
        cy.get('[data-cy=sign]').click()
        cy.get('[data-cy=res]').should('have.text', '-80')
        cy.get('[data-cy=clear]').click()
        
    })
    
    
  })