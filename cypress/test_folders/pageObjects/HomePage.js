class HomePage
{
    getNameAlert()
    {
        return cy.get('body > app-root > form-comp > div > form > div:nth-child(1) > div')
    }
    getNameBox()
    {
        return cy.get('input[name="name"]:nth-child(2)')
    }
    getTwoWayDataBinding()
    {
        return cy.get(':nth-child(4) > .ng-pristine')
    }
    getEmailBox()
    {
        return cy.get('input[name="email"]:nth-child(2)')
    }
    getEmailBoxAlert()
    {
        return cy.get('body > app-root > form-comp > div > form > div:nth-child(2) > div')
    }
    getPasswordBox()
    {
        return cy.get('input[type="password"]:nth-child(2)')
    }
    getIceCreamCheckBox()
    {
        return cy.get('input[type="checkbox"]')
    }
    getGender()
    {
        return cy.get('#exampleFormControlSelect1')
    }
    getSubmit()
    {
        return cy.get('input[type="submit"]')
    }
    getSuccessMessage()
    {
        return cy.get('body > app-root > form-comp > div > div:nth-child(2) > div')
    }
    getShoptab()
    {
        return cy.get(':nth-child(2) > .nav-link')
    }
}
export default HomePage