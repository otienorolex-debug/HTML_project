const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { JSDOM } = require('jsdom');

describe('bookstore page', function () {
    let dom;

    beforeEach(function () {
        const html = fs.readFileSync(path.join(__dirname, '..', 'index.htm'), 'utf8');
        const script = fs.readFileSync(path.join(__dirname, '..', 'index.js'), 'utf8');

        dom = new JSDOM(html, { runScripts: 'outside-only' });
        dom.window.eval(script);
    });

    afterEach(function () {
        dom.window.close();
    });

    it('sets the bookstore title', function () {
        assert.equal(
            dom.window.document.querySelector('#header').textContent,
            'Flatbooks Technical Books'
        );
    });

    it('renders every book with a title, author, and image', function () {
        const bookItems = dom.window.document.querySelectorAll('#book-list > li');

        assert.equal(bookItems.length, 6);

        bookItems.forEach((bookItem) => {
            const [title, author, image] = bookItem.children;

            assert.equal(title.tagName, 'H3');
            assert.ok(title.textContent.trim());
            assert.equal(author.tagName, 'P');
            assert.ok(author.textContent.trim());
            assert.equal(image.tagName, 'IMG');
            assert.match(image.getAttribute('src'), /^https?:\/\//);
        });
    });
});