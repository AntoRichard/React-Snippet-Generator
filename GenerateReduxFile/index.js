const path = require("path");
const fs = require("fs");
const { successMessage, errorMessage } = require("../Messages");
/* Helper function */
const {
	stringReplace,
	convertFirstLetterToLower,
	convertFirstLetterToUpper,
} = require(path.join("..", "utils", "helpers"));

const {
	CONSTANTS_TEMPLATE_PATH,
	REDUCER_TEMPLATE_PATH,
	ACTION_TEMPLATE_PATH,
	CONTAINER_TEMPLATE_PATH,
} = require("../constants");

/* Write file generator */
const generateFile = (filePath, context) => {
	return fs.writeFileSync(filePath, context);
};

const generateReduxFile = (fileName, filePath, templatePath) =>
	new Promise(async (resolve, reject) => {
		try {
			const template = await fs.readFileSync(templatePath);
			let content = stringReplace(
				template,
				/index/g,
				convertFirstLetterToLower(fileName)
			);
			content = stringReplace(content, /INDEX/g, fileName.toUpperCase());
			content = stringReplace(
				content,
				/Index/g,
				convertFirstLetterToUpper(fileName)
			);
			generateFile(filePath, content);
			resolve(null);
		} catch (error) {
			reject(error);
		}
	});

exports.reduxSnippetGenerator = async (name) => {
	try {
		const FILE_NAME = name.charAt(0).toUpperCase() + name.slice(1);
		/* generate code base path */
		const basePath = path.join("src", "store");

		const generatorsProps = [
			{
				filePath: path.join(
					basePath,
					"definitions",
					`${convertFirstLetterToLower(FILE_NAME)}Constants.ts`
				),
				templatePath: CONSTANTS_TEMPLATE_PATH,
			},
			{
				filePath: path.join(
					basePath,
					"reducers",
					`${convertFirstLetterToLower(FILE_NAME)}Reducer.ts`
				),
				templatePath: REDUCER_TEMPLATE_PATH,
			},
			{
				filePath: path.join(
					basePath,
					"actions",
					`${convertFirstLetterToLower(FILE_NAME)}.ts`
				),
				templatePath: ACTION_TEMPLATE_PATH,
			},
			{
				filePath: path.join(
					basePath,
					"container",
					`${FILE_NAME}Container.tsx`
				),
				templatePath: CONTAINER_TEMPLATE_PATH,
			},
		];

		// Generate files
		for (let generator of generatorsProps) {
			await generateReduxFile(
				FILE_NAME,
				generator.filePath,
				generator.templatePath
			);
		}

        successMessage("Redux template", name);
		process.exit(0);
	} catch (error) {
		errorMessage(error);
	}
};
