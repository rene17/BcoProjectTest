const { Page } = require('playwright');

class TodoLyPage {
    constructor(page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://todo.ly/');
    }

    async login(username, password) {
        await this.page.click('a[href="/login"]');
        await this.page.fill('#ctl00_MainContent_LoginControl1_TextBoxEmail', username);
        await this.page.fill('#ctl00_MainContent_LoginControl1_TextBoxPassword', password);
        await this.page.click('#ctl00_MainContent_LoginControl1_ButtonLogin');
    }

    async register(email, password) {
        await this.page.click('a[href="/signup"]');
        await this.page.fill('#ctl00_MainContent_SignupControl1_TextBoxEmail', email);
        await this.page.fill('#ctl00_MainContent_SignupControl1_TextBoxPassword', password);
        await this.page.fill('#ctl00_MainContent_SignupControl1_TextBoxRepeatPassword', password);
        await this.page.click('#ctl00_MainContent_SignupControl1_ButtonSignup');
    }
}

module.exports = TodoLyPage;
