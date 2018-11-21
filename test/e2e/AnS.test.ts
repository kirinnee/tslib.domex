import {Selector} from 'testcafe';

import {should} from 'chai';
import {Core, Kore} from "@kirinnee/core";

should();

let core: Core = new Kore();
core.ExtendPrimitives();

fixture`Append`.page`./targets/AnS.html`;

test('Get and Set Attribute', async t => {
	await t
		.click('#test-1');
	
	let value = await Selector("#attr").getAttribute("secret");
	
	value.should.equal("ok");
});

test('Get And Set Style', async t => {
	await t
		.click('#test-2');
	
	let value = await Selector("#style").style;
	
	(value as any)['color'].should.equal("rgb(0, 0, 0)");
});