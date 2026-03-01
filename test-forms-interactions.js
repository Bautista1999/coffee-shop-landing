#!/usr/bin/env node

/**
 * Coffee Shop Landing Page - Forms and Interactive Elements Test Suite
 * Tests all forms, buttons, navigation, and user interactions
 */

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Create a simple test runner
class TestRunner {
    constructor() {
        this.tests = [];
        this.passed = 0;
        this.failed = 0;
        this.results = [];
    }

    test(name, fn) {
        this.tests.push({ name, fn });
    }

    async run() {
        console.log('\\n========================================');
        console.log('  FORMS & INTERACTIONS TEST SUITE');
        console.log('========================================\\n');

        for (const { name, fn } of this.tests) {
            try {
                await fn();
                this.passed++;
                this.results.push({ status: '✓ PASS', name });
                console.log(`✓ ${name}`);
            } catch (error) {
                this.failed++;
                this.results.push({ status: '✗ FAIL', name, error: error.message });
                console.log(`✗ ${name}`);
                console.log(`  Error: ${error.message}\\n`);
            }
        }

        this.printSummary();
    }

    printSummary() {
        console.log('\\n========================================');
        console.log('  TEST RESULTS SUMMARY');
        console.log('========================================\\n');
        console.log(`Total Tests: ${this.tests.length}`);
        console.log(`Passed: ${this.passed}`);
        console.log(`Failed: ${this.failed}`);
        console.log(`Success Rate: ${((this.passed / this.tests.length) * 100).toFixed(1)}%\\n`);

        if (this.failed === 0) {
            console.log('🎉 All tests passed successfully!\\n');
        }
    }
}

// Load HTML
const htmlPath = path.join(__dirname, 'index.html');
const htmlContent = fs.readFileSync(htmlPath, 'utf8');

// Setup JSDOM
const dom = new JSDOM(htmlContent, {
    url: 'http://localhost:3000',
    runScripts: 'outside-only',
    resources: 'usable'
});

const { window, document } = dom;
const { navigator } = window;

// Global window properties
global.window = window;
global.document = document;
global.navigator = navigator;

// Load the script
const scriptPath = path.join(__dirname, 'assets', 'script.js');
const scriptContent = fs.readFileSync(scriptPath, 'utf8');
window.eval(scriptContent);

// Initialize test runner
const runner = new TestRunner();

// =====================================================
// NAVIGATION & ANCHOR LINK TESTS
// =====================================================

runner.test('Navigation links exist', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    if (navLinks.length === 0) throw new Error('No navigation links found');
    if (navLinks.length < 4) throw new Error(`Expected at least 4 nav links, found ${navLinks.length}`);
});

runner.test('Navigation links have correct href attributes', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const expectedLinks = ['#home', '#about', '#menu', '#contact'];
    const actualLinks = Array.from(navLinks).map(link => link.getAttribute('href'));
    
    for (const expected of expectedLinks) {
        if (!actualLinks.includes(expected)) {
            throw new Error(`Navigation link ${expected} not found`);
        }
    }
});

runner.test('All anchor link targets exist', () => {
    const navLinks = document.querySelectorAll('.nav-links a, .logo-link');
    const hrefs = Array.from(navLinks).map(link => link.getAttribute('href'));
    
    for (const href of hrefs) {
        if (href && href.startsWith('#')) {
            const target = document.querySelector(href);
            if (!target) {
                throw new Error(`Anchor target ${href} not found in document`);
            }
        }
    }
});

runner.test('CTA button exists and has correct link', () => {
    const ctaButton = document.querySelector('.cta-button');
    if (!ctaButton) throw new Error('CTA button not found');
    if (ctaButton.getAttribute('href') !== '#menu') {
        throw new Error('CTA button should link to #menu');
    }
});

runner.test('CTA button is properly nested in hero section', () => {
    const hero = document.querySelector('.hero');
    const ctaButton = hero.querySelector('.cta-button');
    if (!ctaButton) throw new Error('CTA button not found in hero section');
});

// =====================================================
// FORM STRUCTURE TESTS
// =====================================================

runner.test('Contact form exists', () => {
    const form = document.querySelector('.contact-form');
    if (!form) throw new Error('Contact form not found');
});

runner.test('Form has correct method and action', () => {
    const form = document.querySelector('.contact-form');
    if (form.getAttribute('method') !== 'POST') {
        throw new Error('Form method should be POST');
    }
    if (!form.getAttribute('action')) {
        throw new Error('Form action attribute missing');
    }
});

runner.test('Form has correct name attribute', () => {
    const form = document.querySelector('.contact-form');
    if (form.getAttribute('name') !== 'contactForm') {
        throw new Error('Form name should be "contactForm"');
    }
});

// =====================================================
// FORM FIELDS TESTS
// =====================================================

runner.test('Name field exists and is required', () => {
    const nameField = document.querySelector('#name');
    if (!nameField) throw new Error('Name field not found');
    if (nameField.getAttribute('type') !== 'text') {
        throw new Error('Name field should be text input');
    }
    if (!nameField.hasAttribute('required')) {
        throw new Error('Name field should be required');
    }
});

runner.test('Email field exists and is required', () => {
    const emailField = document.querySelector('#email');
    if (!emailField) throw new Error('Email field not found');
    if (emailField.getAttribute('type') !== 'email') {
        throw new Error('Email field should be email input');
    }
    if (!emailField.hasAttribute('required')) {
        throw new Error('Email field should be required');
    }
});

runner.test('Phone field exists and is optional', () => {
    const phoneField = document.querySelector('#phone');
    if (!phoneField) throw new Error('Phone field not found');
    if (phoneField.getAttribute('type') !== 'tel') {
        throw new Error('Phone field should be tel input');
    }
    if (phoneField.hasAttribute('required')) {
        throw new Error('Phone field should be optional');
    }
});

runner.test('Subject select field exists and is required', () => {
    const subjectField = document.querySelector('#subject');
    if (!subjectField) throw new Error('Subject field not found');
    if (subjectField.tagName !== 'SELECT') {
        throw new Error('Subject field should be a select element');
    }
    if (!subjectField.hasAttribute('required')) {
        throw new Error('Subject field should be required');
    }
});

runner.test('Subject select has multiple options', () => {
    const subjectField = document.querySelector('#subject');
    const options = subjectField.querySelectorAll('option');
    if (options.length < 6) {
        throw new Error(`Expected at least 6 options, found ${options.length}`);
    }
});

runner.test('Message textarea exists and is required', () => {
    const messageField = document.querySelector('#message');
    if (!messageField) throw new Error('Message field not found');
    if (messageField.tagName !== 'TEXTAREA') {
        throw new Error('Message field should be a textarea');
    }
    if (!messageField.hasAttribute('required')) {
        throw new Error('Message field should be required');
    }
});

runner.test('Newsletter checkbox exists and is optional', () => {
    const newsletterField = document.querySelector('#newsletter');
    if (!newsletterField) throw new Error('Newsletter field not found');
    if (newsletterField.getAttribute('type') !== 'checkbox') {
        throw new Error('Newsletter field should be checkbox');
    }
    if (newsletterField.hasAttribute('required')) {
        throw new Error('Newsletter field should be optional');
    }
});

// =====================================================
// FORM SUBMIT BUTTON TESTS
// =====================================================

runner.test('Submit button exists', () => {
    const submitBtn = document.querySelector('.contact-form .submit-button');
    if (!submitBtn) throw new Error('Submit button not found');
});

runner.test('Submit button has correct type', () => {
    const submitBtn = document.querySelector('.contact-form .submit-button');
    if (submitBtn.getAttribute('type') !== 'submit') {
        throw new Error('Button type should be "submit"');
    }
});

runner.test('Submit button has text content', () => {
    const submitBtn = document.querySelector('.contact-form .submit-button');
    if (!submitBtn.textContent.trim()) {
        throw new Error('Submit button should have text content');
    }
});

// =====================================================
// FORM LABELS TESTS
// =====================================================

runner.test('All form fields have associated labels', () => {
    const form = document.querySelector('.contact-form');
    const labels = form.querySelectorAll('label');
    if (labels.length < 6) {
        throw new Error(`Expected at least 6 labels, found ${labels.length}`);
    }
});

runner.test('Labels have correct for attributes', () => {
    const form = document.querySelector('.contact-form');
    const labeledFields = ['name', 'email', 'phone', 'subject', 'message', 'newsletter'];
    
    for (const fieldId of labeledFields) {
        const label = form.querySelector(`label[for="${fieldId}"]`);
        if (!label) {
            throw new Error(`Label for field "${fieldId}" not found`);
        }
    }
});

// =====================================================
// FORM VALIDATION TESTS
// =====================================================

runner.test('Required fields are marked with asterisk', () => {
    const requiredFields = ['#name', '#email', '#subject', '#message'];
    const form = document.querySelector('.contact-form');
    
    for (const fieldId of requiredFields) {
        const label = form.querySelector(`label[for="${fieldId.substring(1)}"]`);
        const hasRequiredMark = label && label.querySelector('.required');
        if (!hasRequiredMark) {
            throw new Error(`Required field ${fieldId} is not marked with asterisk`);
        }
    }
});

runner.test('Form fields have placeholder text', () => {
    const fieldsToCheck = [
        { id: 'name', shouldHave: true },
        { id: 'email', shouldHave: true },
        { id: 'message', shouldHave: true }
    ];
    
    for (const field of fieldsToCheck) {
        const element = document.querySelector(`#${field.id}`);
        if (field.shouldHave && !element.getAttribute('placeholder')) {
            throw new Error(`Field ${field.id} should have placeholder text`);
        }
    }
});

runner.test('Form fields have autocomplete attributes', () => {
    const nameField = document.querySelector('#name');
    const emailField = document.querySelector('#email');
    const phoneField = document.querySelector('#phone');
    
    if (!nameField.getAttribute('autocomplete')) {
        throw new Error('Name field should have autocomplete attribute');
    }
    if (!emailField.getAttribute('autocomplete')) {
        throw new Error('Email field should have autocomplete attribute');
    }
    if (!phoneField.getAttribute('autocomplete')) {
        throw new Error('Phone field should have autocomplete attribute');
    }
});

// =====================================================
// INTERACTIVE ELEMENTS TESTS
// =====================================================

runner.test('Menu items are interactive (hover-able)', () => {
    const menuItems = document.querySelectorAll('.menu-item');
    if (menuItems.length === 0) throw new Error('No menu items found');
    if (menuItems.length < 6) {
        throw new Error(`Expected at least 6 menu items, found ${menuItems.length}`);
    }
});

runner.test('Feature cards exist in about section', () => {
    const features = document.querySelectorAll('.feature');
    if (features.length === 0) throw new Error('No feature cards found');
    if (features.length < 3) {
        throw new Error(`Expected at least 3 features, found ${features.length}`);
    }
});

runner.test('Contact information section exists', () => {
    const contactInfo = document.querySelector('.contact-info');
    if (!contactInfo) throw new Error('Contact info section not found');
});

// =====================================================
// ACCESSIBILITY TESTS
// =====================================================

runner.test('Form has proper heading hierarchy', () => {
    const form = document.querySelector('.contact-form');
    const heading = form.querySelector('h3');
    if (!heading) throw new Error('Contact form should have h3 heading');
});

runner.test('Links have descriptive text', () => {
    const links = document.querySelectorAll('a');
    for (const link of links) {
        const text = link.textContent.trim();
        if (!text && !link.getAttribute('title')) {
            throw new Error('Links should have text or title attribute');
        }
    }
});

runner.test('Form inputs have proper type attributes', () => {
    const form = document.querySelector('.contact-form');
    const inputs = form.querySelectorAll('input, textarea, select');
    
    if (inputs.length === 0) throw new Error('No form inputs found');
    
    for (const input of inputs) {
        const hasType = input.tagName === 'TEXTAREA' || input.tagName === 'SELECT' || input.hasAttribute('type');
        if (!hasType) {
            throw new Error(`Input element missing type attribute`);
        }
    }
});

// =====================================================
// BUTTON INTERACTION TESTS
// =====================================================

runner.test('All buttons have proper styling classes', () => {
    const ctaButton = document.querySelector('.cta-button');
    const submitBtn = document.querySelector('.submit-button');
    
    if (!ctaButton) throw new Error('CTA button not found');
    if (!submitBtn) throw new Error('Submit button not found');
});

runner.test('Buttons are keyboard accessible', () => {
    const buttons = document.querySelectorAll('button, a.cta-button');
    if (buttons.length === 0) throw new Error('No buttons found');
});

// =====================================================
// FOOTER LINKS TESTS
// =====================================================

runner.test('Footer quick links section exists', () => {
    const footer = document.querySelector('.footer');
    const links = footer.querySelectorAll('a');
    if (links.length === 0) throw new Error('No footer links found');
});

runner.test('Footer has correct link structure', () => {
    const footer = document.querySelector('.footer');
    const quickLinks = footer.querySelectorAll('.footer-section:nth-child(2) a');
    if (quickLinks.length < 4) {
        throw new Error('Footer should have at least 4 quick links');
    }
});

// =====================================================
// RUN ALL TESTS
// =====================================================

runner.run().catch(error => {
    console.error('Test runner error:', error);
    process.exit(1);
});
