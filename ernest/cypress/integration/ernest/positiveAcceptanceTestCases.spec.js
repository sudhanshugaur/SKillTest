describe('Positive Acceptance Test Cases: ', () => {
    it('For California with tax rate .08', () => {
        cy.visit("/")
        cy.get('h1').should('have.text', 'Welcome To Jungle Socks!')
        var stocksName = ['zebra', 'lion', 'elephant', 'giraffe']
        stocksName.forEach(_name => {
            cy.get('table').contains('td', _name).should('be.visible');
        });
    
        cy.get('#line_item_quantity_zebra').type(Cypress.env('ITEMS_TO_BUY_CALIFORNIA'))
        cy.get('#line_item_quantity_lion').type(Cypress.env('ITEMS_TO_BUY_CALIFORNIA'))
        cy.get('#line_item_quantity_elephant').type(Cypress.env('ITEMS_TO_BUY_CALIFORNIA'))
        cy.get('#line_item_quantity_giraffe').type(Cypress.env('ITEMS_TO_BUY_CALIFORNIA'))

        cy.get('select').select('California')

        cy.get('input[name="commit"]').should('have.value', 'checkout').click()

        cy.get('h1').should('have.text', 'Please Confirm Your Order')

        var subTotal_1 = (parseInt(Cypress.env('ITEMS_TO_BUY_CALIFORNIA')) * parseInt(Cypress.env('ZEBRA_COST'))).toFixed(2)
        var subTotal_2 = (parseInt(Cypress.env('ITEMS_TO_BUY_CALIFORNIA')) * parseInt(Cypress.env('LION_COST'))).toFixed(2)
        var subTotal_3 = (parseInt(Cypress.env('ITEMS_TO_BUY_CALIFORNIA')) * parseInt(Cypress.env('ELEPHANT_COST'))).toFixed(2)
        var subTotal_4 = (parseInt(Cypress.env('ITEMS_TO_BUY_CALIFORNIA')) * parseInt(Cypress.env('GIRAFFE_COST'))).toFixed(2)

        var subTotal = (parseFloat(subTotal_1) + parseFloat(subTotal_2) + parseFloat(subTotal_3) + 
                            parseFloat(subTotal_4)).toFixed(2)
        var _tax = (subTotal * parseFloat(Cypress.env('CA_TAX'))).toFixed(2)

        var totalCost = (parseFloat(subTotal) + parseFloat(_tax)).toFixed(2)

        cy.get('#subtotal').should('have.text', "$" + subTotal.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'))
        cy.get('#taxes').should('have.text', "$" + _tax.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'))
        cy.get('#total').should('have.text', "$" + totalCost.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'))
        
    });

    it('For New York with tax rate 0.06', () => {
        cy.visit("/")
        cy.get('h1').should('have.text', 'Welcome To Jungle Socks!')
        var stocksName = ['zebra', 'lion', 'elephant', 'giraffe']
        stocksName.forEach(_name => {
            cy.get('table').contains('td', _name).should('be.visible');
        });
    
        cy.get('#line_item_quantity_zebra').type(Cypress.env('ITEMS_TO_BUY_NEWYORK'))
        cy.get('#line_item_quantity_lion').type(Cypress.env('ITEMS_TO_BUY_NEWYORK'))
        cy.get('#line_item_quantity_elephant').type(Cypress.env('ITEMS_TO_BUY_NEWYORK'))
        cy.get('#line_item_quantity_giraffe').type(Cypress.env('ITEMS_TO_BUY_NEWYORK'))

        cy.get('select').select('New York')

        cy.get('input[name="commit"]').should('have.value', 'checkout').click()

        cy.get('h1').should('have.text', 'Please Confirm Your Order')

        var subTotal_1 = (parseInt(Cypress.env('ITEMS_TO_BUY_NEWYORK')) * parseInt(Cypress.env('ZEBRA_COST'))).toFixed(2)
        var subTotal_2 = (parseInt(Cypress.env('ITEMS_TO_BUY_NEWYORK')) * parseInt(Cypress.env('LION_COST'))).toFixed(2)
        var subTotal_3 = (parseInt(Cypress.env('ITEMS_TO_BUY_NEWYORK')) * parseInt(Cypress.env('ELEPHANT_COST'))).toFixed(2)
        var subTotal_4 = (parseInt(Cypress.env('ITEMS_TO_BUY_NEWYORK')) * parseInt(Cypress.env('GIRAFFE_COST'))).toFixed(2)

        var subTotal = (parseFloat(subTotal_1) + parseFloat(subTotal_2) + parseFloat(subTotal_3) + 
                            parseFloat(subTotal_4)).toFixed(2)
        var _tax = (subTotal * parseFloat(Cypress.env('NY_TAX'))).toFixed(2)
        var totalCost = (parseFloat(subTotal) + parseFloat(_tax)).toFixed(2)

        cy.get('#subtotal').should('have.text', "$" + subTotal.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'))
        cy.get('#taxes').should('have.text', "$" + _tax.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'))
        cy.get('#total').should('have.text', "$" + totalCost.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'))
        
    });

    it('For Minnesota with tax rate 0.00', () => {
        cy.visit("/")
        cy.get('h1').should('have.text', 'Welcome To Jungle Socks!')
        var stocksName = ['zebra', 'lion', 'elephant', 'giraffe']
        stocksName.forEach(_name => {
            cy.get('table').contains('td', _name).should('be.visible');
        });
    
        cy.get('#line_item_quantity_zebra').type(Cypress.env('ITEMS_TO_BUY_MINNESOTA'))
        cy.get('#line_item_quantity_lion').type(Cypress.env('ITEMS_TO_BUY_MINNESOTA'))
        cy.get('#line_item_quantity_elephant').type(Cypress.env('ITEMS_TO_BUY_MINNESOTA'))
        cy.get('#line_item_quantity_giraffe').type(Cypress.env('ITEMS_TO_BUY_MINNESOTA'))

        cy.get('select').select('Minnesota')

        cy.get('input[name="commit"]').should('have.value', 'checkout').click()

        cy.get('h1').should('have.text', 'Please Confirm Your Order')

        var subTotal_1 = (parseInt(Cypress.env('ITEMS_TO_BUY_MINNESOTA')) * parseInt(Cypress.env('ZEBRA_COST'))).toFixed(2)
        var subTotal_2 = (parseInt(Cypress.env('ITEMS_TO_BUY_MINNESOTA')) * parseInt(Cypress.env('LION_COST'))).toFixed(2)
        var subTotal_3 = (parseInt(Cypress.env('ITEMS_TO_BUY_MINNESOTA')) * parseInt(Cypress.env('ELEPHANT_COST'))).toFixed(2)
        var subTotal_4 = (parseInt(Cypress.env('ITEMS_TO_BUY_MINNESOTA')) * parseInt(Cypress.env('GIRAFFE_COST'))).toFixed(2)

        var subTotal = (parseFloat(subTotal_1) + parseFloat(subTotal_2) + parseFloat(subTotal_3) + 
                            parseFloat(subTotal_4)).toFixed(2)
        var _tax = (subTotal * parseFloat(Cypress.env('MN_TAX'))).toFixed(2)
        var totalCost = (parseFloat(subTotal) + parseFloat(_tax)).toFixed(2)

        cy.get('#subtotal').should('have.text', "$" + subTotal.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'))
        cy.get('#taxes').should('have.text', "$" + _tax.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'))
        cy.get('#total').should('have.text', "$" + totalCost.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'))
        
    });

    it('For any other state with tax rate 0.05', () => {
        cy.visit("/")
        cy.get('h1').should('have.text', 'Welcome To Jungle Socks!')
        var stocksName = ['zebra', 'lion', 'elephant', 'giraffe']
        var otherState = ["Alaska","Alabama","Arkansas","Arizona",
                        "Colorado","Connecticut","Delaware",
                        "Florida","Georgia","Hawaii","Iowa","Idaho","Illinois","Indiana",
                        "Kansas","Kentucky","Louisiana","Massachusetts","Maryland","Maine","Michigan",
                        "Missouri","Mississippi","Montana","North Carolina","North Dakota","Nebraska",
                        "New Hampshire","New Jersey","New Mexico","Nevada","Ohio","Oklahoma","Oregon",
                        "Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota",
                        "Tennessee","Texas","Utah","Virginia","Vermont","Washington",
                        "Wisconsin","West Virginia","Wyoming"]
        //missing = ["District of Columbia","American Samoa","Guam",,"Virgin Islands"]
        stocksName.forEach(_name => {
            cy.get('table').contains('td', _name).should('be.visible');
        });
        cy.get('#line_item_quantity_zebra').type(Cypress.env('ITEMS_TO_BUY_OTHER_STATE'))
        cy.get('#line_item_quantity_lion').type(Cypress.env('ITEMS_TO_BUY_OTHER_STATE'))
        cy.get('#line_item_quantity_elephant').type(Cypress.env('ITEMS_TO_BUY_OTHER_STATE'))
        cy.get('#line_item_quantity_giraffe').type(Cypress.env('ITEMS_TO_BUY_OTHER_STATE'))

        //Randomly select a state
        cy.get('select').select(otherState[Math.floor(Math.random()*otherState.length)])
    
        cy.get('input[name="commit"]').should('have.value', 'checkout').click()

        cy.get('h1').should('have.text', 'Please Confirm Your Order')

        var subTotal_1 = (parseInt(Cypress.env('ITEMS_TO_BUY_OTHER_STATE')) * parseInt(Cypress.env('ZEBRA_COST'))).toFixed(2)
        var subTotal_2 = (parseInt(Cypress.env('ITEMS_TO_BUY_OTHER_STATE')) * parseInt(Cypress.env('LION_COST'))).toFixed(2)
        var subTotal_3 = (parseInt(Cypress.env('ITEMS_TO_BUY_OTHER_STATE')) * parseInt(Cypress.env('ELEPHANT_COST'))).toFixed(2)
        var subTotal_4 = (parseInt(Cypress.env('ITEMS_TO_BUY_OTHER_STATE')) * parseInt(Cypress.env('GIRAFFE_COST'))).toFixed(2)

        var subTotal = (parseFloat(subTotal_1) + parseFloat(subTotal_2) + parseFloat(subTotal_3) + 
                            parseFloat(subTotal_4)).toFixed(2)
        var _tax = (subTotal * parseFloat(Cypress.env('OTHER_STATE'))).toFixed(2)
        var totalCost = (parseFloat(subTotal) + parseFloat(_tax)).toFixed(2)

        cy.get('#subtotal').should('have.text', "$" + subTotal.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'))
        cy.get('#taxes').should('have.text', "$" + _tax.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'))
        cy.get('#total').should('have.text', "$" + totalCost.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'))
        
    });

    it('For any other state with tax rate 0.05, when user enters in franction for example: 10.3', () => {
        cy.visit("/")
        cy.get('h1').should('have.text', 'Welcome To Jungle Socks!')
        var stocksName = ['zebra', 'lion', 'elephant', 'giraffe']
        var otherState = ["Alaska","Alabama","Arkansas","American Samoa","Arizona",
                        "Colorado","Connecticut","District of Columbia","Delaware",
                        "Florida","Georgia","Guam","Hawaii","Iowa","Idaho","Illinois","Indiana",
                        "Kansas","Kentucky","Louisiana","Massachusetts","Maryland","Maine","Michigan",
                        "Missouri","Mississippi","Montana","North Carolina","North Dakota","Nebraska",
                        "New Hampshire","New Jersey","New Mexico","Nevada","Ohio","Oklahoma","Oregon",
                        "Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota",
                        "Tennessee","Texas","Utah","Virginia","Virgin Islands","Vermont","Washington",
                        "Wisconsin","West Virginia","Wyoming"]
        
        stocksName.forEach(_name => {
            cy.get('table').contains('td', _name).should('be.visible');
        });
        cy.get('#line_item_quantity_zebra').type(Cypress.env('ITEMS_TO_BUY_IN_FRACTION'))
        cy.get('#line_item_quantity_lion').type(Cypress.env('ITEMS_TO_BUY_IN_FRACTION'))
        cy.get('#line_item_quantity_elephant').type(Cypress.env('ITEMS_TO_BUY_IN_FRACTION'))
        cy.get('#line_item_quantity_giraffe').type(Cypress.env('ITEMS_TO_BUY_IN_FRACTION'))

        //Randomly select a state
        cy.get('select').select(otherState[Math.floor(Math.random()*otherState.length)])

        cy.get('input[name="commit"]').should('have.value', 'checkout').click()

        cy.get('h1').should('have.text', 'Please Confirm Your Order')

        var subTotal_1 = (parseInt(Cypress.env('ITEMS_TO_BUY_IN_FRACTION')) * parseInt(Cypress.env('ZEBRA_COST'))).toFixed(2)
        var subTotal_2 = (parseInt(Cypress.env('ITEMS_TO_BUY_IN_FRACTION')) * parseInt(Cypress.env('LION_COST'))).toFixed(2)
        var subTotal_3 = (parseInt(Cypress.env('ITEMS_TO_BUY_IN_FRACTION')) * parseInt(Cypress.env('ELEPHANT_COST'))).toFixed(2)
        var subTotal_4 = (parseInt(Cypress.env('ITEMS_TO_BUY_IN_FRACTION')) * parseInt(Cypress.env('GIRAFFE_COST'))).toFixed(2)

        var subTotal = (parseFloat(subTotal_1) + parseFloat(subTotal_2) + parseFloat(subTotal_3) + 
                            parseFloat(subTotal_4)).toFixed(2)
        var _tax = (subTotal * parseFloat(Cypress.env('OTHER_STATE'))).toFixed(2)
        var totalCost = (parseFloat(subTotal) + parseFloat(_tax)).toFixed(2)

        cy.get('#subtotal').should('have.text', "$" + subTotal.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'))
        cy.get('#taxes').should('have.text', "$" + _tax.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'))
        cy.get('#total').should('have.text', "$" + totalCost.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'))
        
    });
});