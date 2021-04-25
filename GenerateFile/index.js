const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

/* Template base path */
const BASE_PATH = path.join(__dirname, "..", "template");

const JS_TEMPLATE_PATH = path.join(BASE_PATH, "index.js");

const SCSS_TEMPLATE_PATH = path.join(BASE_PATH, "template.scss");

const getFileName = (fileName) => {
	const path = fileName.split("/");
	return path[path.length - 1];
};

/* Error handler */
const errorHandler = (error) => {
	console.log(error.message);
	console.log(chalk.green.bold(`Unable to generate🤕, check the above log for reference 😅`))
	process.exit(1);
};

/* Write file generator */
const generateFile = (filePath, context) => {
	return fs.writeFileSync(filePath, context);
};

/* Generate file */ 
const generatorTemplate = async (fileName, templatePath, filePath) => {
	const template = await fs.readFileSync(templatePath);
	const content = template.toString().replace(/index/g, fileName);
	return generateFile(filePath, content);
}

const successMessage = (type, name) => {
	console.log(chalk.green.bold(`${name} ${type} generated successfully! 😁`))
}

exports.snippetGenerator = async (type, name) => {
	try {
		const FILE_NAME = name?.charAt(0).toUpperCase() + name?.slice(1);

		/* generate code base path */
		const basePath = path.join("src", type, FILE_NAME);
		const fileName = getFileName(FILE_NAME);
		const indexFilePath = path.join(basePath, "index.tsx");
		const scssFilePath = path.join(basePath, `${fileName}.scss`);

		await fs.mkdirSync(basePath, { recursive: true });

		/* Generate tsx file */
		await generatorTemplate(fileName, JS_TEMPLATE_PATH, indexFilePath);

		/* Generate scss file */
		await generatorTemplate(fileName, SCSS_TEMPLATE_PATH, scssFilePath);
		successMessage(type, name);
		process.exit(0);
	} catch (error) {
		errorHandler(error);
	}
};
