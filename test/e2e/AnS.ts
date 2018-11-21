import {DOMEx} from "../../src";
import {DOMExtend} from "../../src/DOMExtend";
import {Core, Kore} from "@kirinnee/core";

let core: Core = new Kore();
core.ExtendPrimitives();

let domex: DOMEx = new DOMExtend(core);
domex.ExtendPrimitives();


let $ = function (id: string): HTMLDivElement {
	return document.getElementById(id)! as HTMLDivElement;
};

$("test-1")!.addEventListener("click", () => {
	let attr: string = $("target").Attr("secret");
	$("attr").Attr("secret", attr);
});
$("test-2")!.addEventListener("click", () => {
	let style: string = $("target").Style("color");
	$("style").Style("color", style);
});

