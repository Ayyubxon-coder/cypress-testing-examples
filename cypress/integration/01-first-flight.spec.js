/// <reference types="cypress" />

describe('Create a New Item', () => {

    beforeEach(() => {
        cy.visit('/jetsetter');
    });

    it('should have a form', ()=>{
        cy.get('form').should('contain.text', 'Add Item')
    })

    it('should have the words "Add Item"', () => {
        cy.contains('Add Item')
    })

    it('should put stuff in an input field',()=>{
        cy.get('[data-test="new-item-input"]').type('Good morning');
    })

    it('shoulc click the first checkbox',() => {
        cy.get('[data-test="items-unpacked"] > ul.s-vF8tIk32PFgu > :nth-child(1) > label.s-vF8tIk32PFgu').click
    })

    it('should add new item, filtering items on the page, removing all items from the page, removing an item from the page, marking all of the items unpacked, marking an individual items as packed', () => {
        cy.get('[data-test="new-item-input"]').type('New item');
        cy.get('[data-test="new-item-input"]').click()
    })

});
