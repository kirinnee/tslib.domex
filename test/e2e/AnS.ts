import {DOMEx, DOMExtend} from "../../src";
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
$("test-3")!.addEventListener('click', () => {
	let style: { [s: string]: string } = {
		width: "500px",
		height: "500px",
		left: "50px"
	};
	$("m-style").Style(style);
});

$("test-4")!.addEventListener('click', () => {
	let vp: Element = $('vendor-prefix')!;
	vp.innerHTML = vp.Style('border-color');
	vp.innerHTML += "<br>" + vp.Style('border-style');
	vp.innerHTML += "<br>" + vp.Style('border-width');
});

