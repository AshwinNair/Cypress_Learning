export class SecondPage
{

    

    selectFlight()
    {
        //cy.get('[data-fare-type-id="184"]').scrollIntoView().click({force: true}).should('be.visible','true')
        cy.get('input[type="radio"][value="8500"]').check({force:true})
        //cy.get('.fa-mc-date-round').click()
        //cy.get('div.return-tab.selected-tab').click()
       


    }
    selectReturnFlight()
    {   cy.get('div > img.fa-sd-image-round').click({force:true})

        cy.get('input[type="radio"][value="6741"]').check({force:true})}

    ContinueBooking()
    {
       // cy.get('#btnProceedWithBookingMain').scrollIntoView().click({force: true}).should('be.visible','true')
       cy.get('.continue-btn').click()
    }

}