import {Selector} from 'testcafe';

import {should} from 'chai';
import {Core, Kore} from "@kirinnee/core";

should();

let core: Core = new Kore();
core.ExtendPrimitives();

fixture`Prepend`.page`./targets/prepend.html`;

test('Prepend Single HTML Element', async t => {
	await t
		.click('#test-1');
	
	let value = await Selector("#prepend-1").innerText;
	
	value.trim().LineBreak().TrimAll().join('').should.equal("PREPENDEDsomething here");
});

test('Prepend Multiple HTML Element', async t => {
	await t
		.click('#test-2');
	
	let value = await Selector("#prepend-2").innerText;
	
	value.trim().LineBreak().TrimAll().join('').should.equal("PREPENDED TOOPREPENDEDsomething here");
});

test('Prepend Single string', async t => {
	await t
		.click('#test-3');
	
	let value = await Selector("#prepend-3").innerText;
	
	value.trim().LineBreak().TrimAll().join('').should.equal("MEGAsomething here");
});

test('Prepend Multiple string', async t => {
	await t
		.click('#test-4');
	
	let value = await Selector("#prepend-4").innerText;
	
	value.trim().LineBreak().TrimAll().join('').should.equal("LULMEGAsomething here");
});