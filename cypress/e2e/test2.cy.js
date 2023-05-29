///<reference types="cypress" />
import { FirstPage } from "./pages/firstpage.cy"
import { SecondPage } from "./pages/secondpage.cy"

it('Round Trip',{}, () => {
    
    const firstpage = new FirstPage
    const secondpage = new SecondPage
    
    
    cy.visit('https://www.airindiaexpress.in/home')

    cy.wait(2000)
    cy.contains('Round Trip').click()
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
    firstpage.selectReturnDate()
    firstpage.searchFlight()
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
    secondpage.selectReturnFlight()

    cy.wait(2000)

    secondpage.ContinueBooking()
   
    
    
    //cy.get('#departureCityDrop').click()
    //cy.get(':nth-child(1) > .radio > .form-label').wait(2000).click()
   
   // cy.contains("[data-action='selectDay'] a","25").click()
    //cy.contains('28').click()

    //cy.get(':nth-child(2) > .radio > .form-label').wait(2000).click()

   // cy.get(':nth-child(1) > .radio > .form-label').click()
    //cy.get('.gLFyf').type('goindigo{Enter}')
    //cy.get('.FPdoLc > center > .gNO89b').click() // dont uncomment it
    //cy.get('.tF2Cxc > .yuRUbf > a > .LC20lb',{timeout:6000}).click()
    
   //cy.get('.hp-src-btn',{timeout:6000}).should('contain','Search Flight')
   
  // .invoke('attr','name').should('be.equal','searchButton')
  })
