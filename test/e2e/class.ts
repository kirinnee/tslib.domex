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
	$("class-1").AddClass("super-secret-1");
});
$("test-2")!.addEventListener("click", () => {
	$("class-2").AddClass(["super-secret-1", "super-secret-2"]);
});
$("test-3")!.addEventListener("click", () => {
	$("class-3").RemoveClass("super-secret-1");
});
$("test-4")!.addEventListener("click", () => {
	$("class-4").RemoveClass(["super-secret-1", "super-secret-2"]);
});

