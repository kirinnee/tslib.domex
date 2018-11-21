import {Selector} from 'testcafe';

import {should} from 'chai';
import {Core, Kore} from "@kirinnee/core";

should();

let core: Core = new Kore();
core.ExtendPrimitives();

fixture`Class`.page`./targets/class.html`;

test('Add single class', async t => {
	await t
		.click('#test-1');
	
	let value = await Selector("#class-1");
	let h1 = await value.hasClass("super-secret-1");
	let h2 = await value.hasClass("super-secret-2");
	
	h1.should.be.true;
	h2.should.be.false;
	
});

test('Add multiple class', async t => {
	await t
		.click('#test-2');
	
	let value = await Selector("#class-2");
	let h1 = await value.hasClass("super-secret-1");
	let h2 = await value.hasClass("super-secret-2");
	
	h1.should.be.true;
	h2.should.be.true;
});

test('Remove single class', async t => {
	await t
		.click('#test-3');
	
	let value = await Selector("#class-3");
	let h1 = await value.hasClass("super-secret-1");
	let h2 = await value.hasClass("super-secret-2");
	
	h1.should.be.false;
	h2.should.be.true;
});

test('Remove Multiple class', async t => {
	await t
		.click('#test-4');
	
	let value = await Selector("#class-4");
	let h1 = await value.hasClass("super-secret-1");
	let h2 = await value.hasClass("super-secret-2");
	
	h1.should.be.false;
	h2.should.be.false;
});