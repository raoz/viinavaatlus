const express = require('express');
const router = express.Router();
const scraper = require('../bin/scraper');

/* GET home page. */
router.get('/', (req, res, next) => {
    const products = scraper.getData();
    res.render('index', {title: 'Viinavaatlus', products: products});
});

router.get('/scrape', (req, res, next) => {
    scraper.shallowScrape();
    res.redirect('/');
});

module.exports = router;
