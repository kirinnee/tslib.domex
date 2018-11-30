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

test('Set style using object literal', async t => {
	await t
		.click("#test-3");
	let value = await Selector("#m-style").style;
	(value as any)['width'].should.equal('500px');
	(value as any)['height'].should.equal('500px');
	(value as any)['left'].should.equal('50px');
});

test('Border properties are normalized', async t => {
	await t
		.click("#test-4");
	let value = await Selector("#vendor-prefix").innerText;
	value.LineBreak().join(',').trim().should.deep.equal('rgb(255, 0, 0),solid,1px');
});