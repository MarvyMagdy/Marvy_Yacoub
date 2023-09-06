/// <reference types="Cypress"/>
import HomePage from "../pageObjects/HomePage";
import ShopPage from "../pageObjects/ShopPage";
import { Extract_Total, summation } from "./Utilities";

describe('ProtoCommerceTests',function()
{
    const homePage = new HomePage()
    const shopPage = new ShopPage()

    beforeEach(function()
    {
        cy.fixture('TestData').then(function(data)
        {
            this.data = data
        })

        cy.visit('https://rahulshettyacademy.com/angularpractice')
    })

    it('Validate empty name box message',function()
    {
        //Assert that error message of empty name box appears
        homePage.getNameBox().type(this.data.name)
        homePage.getNameBox().clear()
        homePage.getEmailBox().type(this.data.Email)
        homePage.getNameAlert().should('contain','Name is required')
    })

    it('Validate empty email box message',function()
    {
        //Assert that error message of empty email box appears
        homePage.getEmailBox().clear()
        homePage.getNameBox().type(this.data.name)
        homePage.getEmailBoxAlert().should('contain','Email is required')
    })

    it('Validate Two-way Data Binding',function()
    {
        //Assert that the name in the name box is the same in the Two-way Data Binding
        homePage.getNameBox().type(this.data.name)
        homePage.getTwoWayDataBinding().should('have.value',this.data.name)
    })

    it('Validate alert of success message', function()
    {
        //Write Name
        homePage.getNameBox().type(this.data.name)

        //Write Email
        homePage.getEmailBox().type(this.data.Email)

        //Write password
        homePage.getPasswordBox().type(this.data.password)

        //Check Icecream
        homePage.getIceCreamCheckBox().check()

        //Select gender
        homePage.getGender().select(this.data.gender)

        //Submit
        homePage.getSubmit().click()

        //Assert alert message of success
        homePage.getSuccessMessage().should('contain','Success! The Form has been submitted successfully!.')

    })

    it('ShopTests', function()
    {
        //Click on shop tab
        homePage.getShoptab().click() 

        //Select products using customize command
        this.data.productNames.forEach(element =>
        {
            cy.selectProduct(element)
        });

        //click on first checkout button
        shopPage.getFirstCheckOutButton().click()

        //sum product prices
        var sum = 0
        cy.get('tr td:nth-child(4) strong').each(($e1, index, $list) =>
        {
            sum = summation($e1,sum)
        })

        //Assert total is right
        cy.get('h3 strong').then(function(element)
        {
            var total = Extract_Total(element)
            expect(Number(total)).to.equal(Number(sum))
        })
        
        //click on Second checkout button
        shopPage.getSecondCheckOutButton().click()

        //Select country
        shopPage.getCountry().type(this.data.country)
        cy.wait(4000)
        shopPage.getCountryList().click

        //Click agree check box
        shopPage.getAgreeCheckBox().click({force:true})

        //Click Purchase
        shopPage.getPurchasebutton().click()

        //Assert alert message
        shopPage.getSuccessAlert().should('contain','Success! Thank you! Your order will be delivered in next few weeks')

    })

    after(function()
    {

    })
})