export class FirstPage
{

    enterOrigin(origin)
    {
        //cy.get('select[id="departureCityDrop"]').select(origin).should('have.value', origin)
          cy.get('[data-testid="source-field"]').type(origin)
          cy.wait(1000)
          cy.get('.arrival-dropdown-content .val .list-container .recent-list-items button.arrival-dropdown-list-group-item').click()

    }

    enterDestination(destination)
    {
        //cy.get('select[id="arrivalCityDrop"]').select(destination).should('have.value', destination)
        
        //cy.get('[data-testid="destination-field"] > .flight-search-source-field-read-only > [style="display: block; width: 80%; padding-left: 5px;"] > .flight-search-source-code').type(destination)
        cy.get('[data-testid="destination-field"]').type(destination)
        cy.contains(destination).click()
        
    }

    selectNoOfPassengers(adults,kids)
    {
        cy.get('.flight-search-guest-details-arrow-wrapper > img').click()
        cy.wait(1000)
        for (let i = 1; i < adults; i++) {
            cy.get('[data-testid="addHandler1"]').click()
          }

          for (let i = 0; i < kids; i++) {
            cy.get('[data-testid="addHandler2"]').click()

          } 
        cy.get('.done_button').click()  
    }

    selectNoOfChildren()
    {
        cy.get('select[id="children"]').select('1').should('have.value', '1')
    }

    selectOneWay()
    {
        cy.get(':nth-child(1) > .radio > .form-label').click()
    }
    selectReturn()
    {
        cy.get(':nth-child(2) > .radio > .form-label').click()
    }

    selectDepartureDate()
    {
        cy.get('.flight-search-date-picker-wrapper').click()
      
       cy.wait(1000)
       
       cy.get('[data-day-index="13"][data-date-value="1683932400000"]').click({force:true})
        
        
    }
    searchFlight()
    {

        cy.contains('Search Flights').click()
    }
    selectReturnDate()
    {
        cy.wait(4000)
        //cy.contains('Return').click({force:true})
      cy.get('[data-day-index="20"][data-date-value="1684537200000"]').click({force:true})
    }
    clickBook()
    {
       /* cy.get('.booking-search-text').click()
        .should('contain','BOOK')
        //.should('have.class','bttn-unite')
        .should('have.text','BOOK')
        .should('have.html','BOOK')
        .should('be.visible')
        .should('not.be.disabled') */
        cy.get('.flight-search-icon').click()
    }










}