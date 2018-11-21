import {DOMEx} from "../../src";
import {DOMExtend} from "../../src/DOMExtend";
import {Core, Kore} from "@kirinnee/core";

let core: Core = new Kore();
core.ExtendPrimitives();

let domex: DOMEx = new DOMExtend(core);
domex.ExtendPrimitives();

let $ = function (id: string): HTMLElement {
	return document.getElementById(id)!;
};

$("test-1").Click(() => {
	$("box-1").innerText = "OK";
});

$("test-2").WheelUp(() => {
	$("box-2").innerText = "OK";
});

$("test-3").WheelDown(() => {
	$("box-3").innerText = "OK";
});
