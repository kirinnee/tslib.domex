import {Selector} from 'testcafe';

import {should} from 'chai';
import {Core, Kore} from "@kirinnee/core";

should();

let core: Core = new Kore();
core.ExtendPrimitives();

fixture`Events`.page`./targets/events.html`;

test('Click Event', async t => {
	await (t)
		.click('#test-1');
	
	let value = await Selector("#box-1").innerText;
	value.trim().should.equal("OK");
});
