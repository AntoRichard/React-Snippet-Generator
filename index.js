#! /usr/bin/env node
const inquirer = require("inquirer");
const { snippetGenerator } = require("./GenerateFile");
const { errorMessage } = require("./Messages");

const initGenerator = async () => {
	try {
		const { type, name } = await inquirer.prompt([
			{
				name: "type",
				message: "What you want to generate",
				type: "list",
				choices: ["views", "components"],
			},
			{
				name: "name",
				message: "Enter the name of component/view",
				type: "input",
			},
		]);
        snippetGenerator(type, name);
	} catch (error) {
		errorMessage(error);
	}
};

initGenerator();
