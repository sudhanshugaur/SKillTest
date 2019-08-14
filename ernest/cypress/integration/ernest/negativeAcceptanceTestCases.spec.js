describe('Negative Acceptance Test Cases: ', () => {
    it('When user enters 0 things to buy System shows 0', () => {
        cy.visit("/")
        cy.get('h1').should('have.text', 'Welcome To Jungle Socks!')
        var stocksName = ['zebra', 'lion', 'elephant', 'giraffe']
        stocksName.forEach(_name => {
            cy.get('table').contains('td', _name).should('be.visible');
        });
    
        cy.get('#line_item_quantity_zebra').type(0)
        cy.get('#line_item_quantity_lion').type(0)
        cy.get('#line_item_quantity_elephant').type(0)
        cy.get('#line_item_quantity_giraffe').type(0)

        cy.get('select').select('California')

        cy.get('input[name="commit"]').should('have.value', 'checkout').click()

        cy.get('h1').should('have.text', 'Please Confirm Your Order')

        var subTotal_1 = parseInt(0).toFixed(2)
        var subTotal_2 = parseInt(0).toFixed(2)
        var subTotal_3 = parseInt(0).toFixed(2)
        var subTotal_4 = parseInt(0).toFixed(2)

        var subTotal = (parseFloat(subTotal_1) + parseFloat(subTotal_2) + parseFloat(subTotal_3) + 
                            parseFloat(subTotal_4)).toFixed(2)
        var _tax = (subTotal * parseFloat(Cypress.env('CA_TAX'))).toFixed(2)

        var totalCost = (parseFloat(subTotal) + parseFloat(_tax)).toFixed(2)

        cy.get('#subtotal').should('have.text', "$" + subTotal.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'))
        cy.get('#taxes').should('have.text', "$" + _tax.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'))
        cy.get('#total').should('have.text', "$" + totalCost.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'))
        
    });

    it('When user enters values other than digits', () => {
        cy.visit("/")
        cy.get('h1').should('have.text', 'Welcome To Jungle Socks!')
        var stocksName = ['zebra', 'lion', 'elephant', 'giraffe']
        stocksName.forEach(_name => {
            cy.get('table').contains('td', _name).should('be.visible');
        });
    
        cy.get('#line_item_quantity_zebra').type('abc')
        cy.get('#line_item_quantity_lion').type('ABC')
        cy.get('#line_item_quantity_elephant').type('çç¨¥˜˚¨˙˜')
        cy.get('#line_item_quantity_giraffe').type('$%^')

        cy.get('select').select('New York')

        cy.get('input[name="commit"]').should('have.value', 'checkout').click()

        cy.get('h1').should('have.text', 'Please Confirm Your Order')

        cy.get('#subtotal').should('have.text', "$0.00")
        cy.get('#taxes').should('have.text', "$0.00")
        cy.get('#total').should('have.text', "$0.00")
        
    });
    it('When user enters noting and click checkout', () => {
        cy.visit("/")
        cy.get('h1').should('have.text', 'Welcome To Jungle Socks!')
        var stocksName = ['zebra', 'lion', 'elephant', 'giraffe']
        stocksName.forEach(_name => {
            cy.get('table').contains('td', _name).should('be.visible');
        });
    
        // cy.get('#line_item_quantity_zebra').type('abc')
        // cy.get('#line_item_quantity_lion').type('ABC')
        // cy.get('#line_item_quantity_elephant').type('çç¨¥˜˚¨˙˜')
        // cy.get('#line_item_quantity_giraffe').type('$%^')

        cy.get('select').select('Minnesota')

        cy.get('input[name="commit"]').should('have.value', 'checkout').click()

        cy.get('h1').should('have.text', 'Please Confirm Your Order')

        cy.get('#subtotal').should('have.text', "$0.00")
        cy.get('#taxes').should('have.text', "$0.00")
        cy.get('#total').should('have.text', "$0.00")
        
    });

    
});