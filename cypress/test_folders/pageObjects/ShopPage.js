class ShopPage
{
    getFirstCheckOutButton()
    {
        return cy.get('a.nav-link.btn.btn-primary')
    }

    getPrices()
    {
        cy.get('tr td:nth-child(4) strong')
    }

    getSecondCheckOutButton()
    {
        return cy.get(':nth-child(4) > :nth-child(5) > .btn')
    }

    getCountry()
    {
        return cy.get('#country')
    }

    getCountryList()
    {
        return cy.get('.suggestions > ul')
    }

    getAgreeCheckBox()
    {
        return cy.get('#checkbox2')
    }

    getPurchasebutton()
    {
        return cy.get('input[type="submit"]')
    }

    getSuccessAlert()
    {
        return cy.get('.alert')
    }
}
export default ShopPage