const fs = require("fs");

const TYPE = process.argv[2].toLocaleLowerCase();

const FILE_NAME =
	process.argv[3]?.charAt(0).toUpperCase() + process.argv[3]?.slice(1);

const checkIsPresent = () => {
	if (!TYPE || !FILE_NAME) {
		console.log(
			"Enter 1st argument as folder name and 2nd argument as component name"
		);
		process.exit(0);
	}
};

checkIsPresent();

const generateFile = (filePath, context) => {
	fs.writeFile(filePath, context, (error) => {
		if (error) {
			console.log(error);
			return;
		}
	});
};

fs.mkdir(`${TYPE}/${FILE_NAME}`, { recursive: true }, (error) => {
	const indexFilePath = `${TYPE}/${FILE_NAME}/index.tsx`;
	const scssFilePath = `${TYPE}/${FILE_NAME}/${FILE_NAME.toLowerCase()}.scss`;
	if (error) {
		console.log(error);
	}
	fs.readFile(__dirname + "/template/index.js", (error, data) => {
		if (error) {
			console.log(error);
			return;
		}
		const content = data.toString().replace(/index/g, FILE_NAME);
		generateFile(indexFilePath, content);
	});

    fs.readFile(__dirname + "/template/template.scss", (error, data) => {
		if (error) {
			console.log(error);
			return;
		}
		const content = data.toString().replace(/index/g, FILE_NAME);
		generateFile(scssFilePath, content);
	});
});