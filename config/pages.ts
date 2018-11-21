import {IPage} from "./Helper";

let pages :IPage = {
	chunks: [
		["append", "./test/e2e/append.ts"],
		["prepend", "./test/e2e/prepend.ts"],
		["class", "./test/e2e/class.ts"],
		["AnS", "./test/e2e/AnS.ts"],
		["events", "./test/e2e/events.ts"]
		
	],
	pages: [
		{
			template: "append.html",
			output: "append.html",
			chunks: ['append'],
			title: 'Append Test'
		},
		{
			template: "prepend.html",
			output: "prepend.html",
			chunks: ['prepend'],
			title: 'Prepend Test'
		},
		{
			template: "AnS.html",
			output: "AnS.html",
			chunks: ['AnS'],
			title: 'Attribute and Style Test'
		},
		{
			template: "class.html",
			output: "class.html",
			chunks: ['class'],
			title: 'Class Test'
		},
		{
			template: "events.html",
			output: "events.html",
			chunks: ['events'],
			title: 'events Test'
		}
	],
};

export {pages};