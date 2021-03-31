describe('Assignment tests', () => {

    describe('add and remove works', () => {
        before(() => {
            cy.visit('http://localhost:5000')
        })

        it('adds a new todo', () => {
            cy.get('[data-cy=todo]').type("Write more tests")
            cy.get('[data-cy=add]').click()
            cy.get('[data-cy=todo]').clear()

            cy.contains("Write more tests")
        })

        it('removes a todo', () => {
            cy.contains('Write more tests').parent().within(() => {
                cy.get('[data-cy=del]').click()
            })

            cy.contains('Write more tests').should('not.exist')
        })

        it('adds multiple todos', () => {
            cy.get('[data-cy=todo]').type("Write more tests")
            cy.get('[data-cy=add]').click()
            cy.get('[data-cy=todo]').clear()

            cy.get('[data-cy=todo]').type("Foo")
            cy.get('[data-cy=add]').click()
            cy.get('[data-cy=todo]').clear()

            cy.get('[data-cy=todo]').type("Bar")
            cy.get('[data-cy=add]').click()
            cy.get('[data-cy=todo]').clear()

            cy.contains("Write more tests")
            cy.contains("Foo")
            cy.contains("Bar")
        })

        it('removes multiple todos', () => {
            cy.contains('Write more tests').parent().within(() => {
                cy.get('[data-cy=del]').click()
            })

            cy.contains('Bar').parent().within(() => {
                cy.get('[data-cy=del]').click()
            })

            cy.contains("Foo")
        })
    })

    describe('mark completed works', () => {
        before(() => {
            cy.visit('http://localhost:5000')
        })

        it('should not start as complete', () => {
            cy.get('[data-cy=todo]').type("Write more tests")
            cy.get('[data-cy=add]').click()
            cy.get('[data-cy=todo]').clear()

            cy.contains("Write more tests").should('have.css', 'text-decoration').and('not.match', /line-through/)
        })

        it('can be toggled to complete', () => {
            cy.contains("Write more tests").parent().within(() => {
                cy.get('[data-cy=mark]').click()
            })

            cy.contains("Write more tests").should('have.css', 'text-decoration').and('match', /line-through/)
        })

        it('can be reset again', () => {
            cy.contains("Write more tests").parent().within(() => {
                cy.get('[data-cy=mark]').click()
            })

            cy.contains("Write more tests").should('have.css', 'text-decoration').and('not.match', /line-through/)
        })
    })

    describe('hide completed works', () => {
        before(() => {
            cy.visit('http://localhost:5000')
        })

        it('hides completed if enabled', () => {
            cy.get('[data-cy=todo]').type("Write more tests")
            cy.get('[data-cy=add]').click()
            cy.get('[data-cy=todo]').clear()

            cy.contains("Write more tests").parent().within(() => {
                cy.get('[data-cy=mark]').click()
            })

            cy.get('[data-cy=show]').uncheck()

            cy.contains('Write more tests').should('not.be.visible')

            cy.get('[data-cy=todo]').type("Incomplete")
            cy.get('[data-cy=add]').click()
            cy.get('[data-cy=todo]').clear()

            cy.contains("Incomplete").should('be.visible')
        })

        it('can toggle visiblity back', () => {
            cy.get('[data-cy=show]').check()
            cy.contains('Write more tests').should('be.visible')
        })
    })
})