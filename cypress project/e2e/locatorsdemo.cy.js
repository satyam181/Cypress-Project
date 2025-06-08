describe('Locators', () => {
    it('CSS selectors', () => {
        cy.visit("https://the-internet.herokuapp.com/login");
        cy.get ("input#username").type("tomsmith");
        cy.get("#password").type("SuperSecretPassword!");
        cy.get(".radius").click();
    });
});