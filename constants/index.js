const path = require("path");

/* Template base path */
const BASE_PATH = path.join(__dirname, "..", "template");

const REACT_BASE_PATH = path.join(BASE_PATH, "react");

const REDUX_BASE_PATH = path.join(BASE_PATH, "redux");

// React Template path
const TSX_TEMPLATE_PATH = path.join(REACT_BASE_PATH, "index.js");

const SCSS_TEMPLATE_PATH = path.join(REACT_BASE_PATH, "template.scss");

// Redux Template path
const REDUCER_TEMPLATE_PATH = path.join(REDUX_BASE_PATH, "reducer.js");

const CONSTANTS_TEMPLATE_PATH = path.join(REDUX_BASE_PATH, "constants.js");

const ACTION_TEMPLATE_PATH = path.join(REDUX_BASE_PATH, "index.js");

const CONTAINER_TEMPLATE_PATH = path.join(REDUX_BASE_PATH, "container.js");

module.exports = {
	TSX_TEMPLATE_PATH,
	SCSS_TEMPLATE_PATH,
	REDUCER_TEMPLATE_PATH,
	CONSTANTS_TEMPLATE_PATH,
	ACTION_TEMPLATE_PATH,
	CONTAINER_TEMPLATE_PATH,
};
