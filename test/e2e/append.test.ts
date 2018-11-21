import {Selector} from 'testcafe';

import {should} from 'chai';
import {Core, Kore} from "@kirinnee/core";

should();

let core: Core = new Kore();
core.ExtendPrimitives();

fixture`Append`.page`./targets/append.html`;

test('Append Single HTML Element', async t => {
	await t
		.click('#test-1');
	
	let value = await Selector("#append-1").innerText;
	
	value.trim().LineBreak().join('').should.equal("something hereAPPENDED");
});

test('Append Multiple HTML Element', async t => {
	await t
		.click('#test-2');
	
	let value = await Selector("#append-2").innerText;
	
	value.trim().LineBreak().join('').should.equal("something hereAPPENDEDAPPENDED TOO");
});

test('Append Single string', async t => {
	await t
		.click('#test-3');
	
	let value = await Selector("#append-3").innerText;
	
	value.trim().LineBreak().join('').should.equal("something hereMEGA");
});

test('Append Multiple string', async t => {
	await t
		.click('#test-4');
	
	let value = await Selector("#append-4").innerText;
	
	value.trim().LineBreak().join('').should.equal("something hereMEGALUL");
});