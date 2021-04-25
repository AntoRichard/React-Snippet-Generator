const path = require("path");

/* Template base path */
const BASE_PATH = path.join(__dirname, "..", "template");

const TSX_TEMPLATE_PATH = path.join(BASE_PATH, "index.js");

const SCSS_TEMPLATE_PATH = path.join(BASE_PATH, "template.scss");

module.exports = {
    TSX_TEMPLATE_PATH,
    SCSS_TEMPLATE_PATH
}