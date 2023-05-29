///<reference types="cypress" />
import { FirstPage } from "./pages/firstpage.cy"
import { SecondPage } from "./pages/secondpage.cy"

it('One Way Trip', () => {
    const firstpage = new FirstPage
    const secondpage = new SecondPage
    
    
    cy.visit('https://www.airindiaexpress.in/home')

    cy.wait(2000)
    cy.contains('One Way').click()
    //cy.get('.flight-search-content-div').click()

    //cy.get('Round\ Trip').click({force: true}).should('be.visible','true')

   

    //cy.get('body:contains(Round Trip)').click()

   // cy.scrollTo(2000,0)

    firstpage.enterOrigin('TRV')
    cy.wait(2000)

    firstpage.enterDestination('SHJ')

    cy.wait(2000)

    

    //cy.wait(2000)

    firstpage.selectNoOfPassengers('2','2')
    cy.wait(1000)
    firstpage.selectDepartureDate()
    cy.contains('Search Flights').click()

    //cy.wait(2000)

    //firstpage.selectNoOfChildren()

    //cy.wait(2000)

    //firstpage.selectOneWay()

    //cy.wait(2000)

    //firstpage.clickBook()

    //cy.scrollTo(0, 200)

    cy.wait(2000)

    secondpage.selectFlight()

    cy.wait(2000)

    secondpage.ContinueBooking()
  })
