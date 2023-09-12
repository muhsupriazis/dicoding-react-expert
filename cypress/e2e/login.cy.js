/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when username is empty
 *   - should display alert when password is empty
 *   - should display alert when username and password are wrong
 *   - should display homepage when username and password are correct
 */

// import { describe, it } from 'vitest';

describe('login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/auth/login');
  });

  it('should display login page correctly', () => {
    cy.get('input[placeholder="email"]').should('be.visible');
    cy.get('input[placeholder="password"]').should('be.visible');
    cy.get('button').contains(/^Masuk$/).should('be.visible');
  });

  it('should display alert when email is empty', () => {
    cy.get('button').contains(/^Masuk$/).click();

    cy.on('window:alert', (message) => {
      expect(message).to.equal('Lengkapi data!');
    });
  });

  it('should display alert when password is empty', () => {
    cy.get('input[placeholder="email"]').type('john@gmail.com');

    cy.get('button').contains(/^Masuk$/).click();

    cy.on('window:alert', (message) => {
      expect(message).to.equal('Lengkapi data!');
    });
  });

  it('should display alert when username and password are wrong', () => {
    cy.get('input[placeholder="email"]').type('john@gmail.com');

    cy.get('input[placeholder="password"]').type('wrong_password');

    cy.get('button').contains(/^Masuk$/).click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('Failed to fetch');
    });
  });

  it('should display homepage when username and password are correct', () => {
    cy.get('input[placeholder="email"]').type('fe.supriaziz@gmail.com');

    cy.get('input[placeholder="password"]').type('adminbang');

    cy.get('button').contains(/^Masuk$/).click();

    cy.get('nav').contains(/^Home$/).should('be.visible');
    cy.get('button').contains('Ask Question').should('be.visible');
  });
});
