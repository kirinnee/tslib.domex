import {DOMEx, DOMExtend} from "../../src";
import {Core, Kore} from "@kirinnee/core";

let core: Core = new Kore();
core.ExtendPrimitives();

let domex: DOMEx = new DOMExtend(core);
domex.ExtendPrimitives();

let testSubj1: HTMLElement = document.createElement("div");
testSubj1.innerText = "PREPENDED";

let testSubj2: HTMLElement = document.createElement("div");
testSubj2.innerText = "PREPENDED TOO";

let $ = function (id: string): HTMLElement {
	return document.getElementById(id)!;
};

$("test-1")!.addEventListener("click", () => {
	$("prepend-1").Prepend(testSubj1);
});
$("test-2")!.addEventListener("click", () => {
	$("prepend-2").Prepend([testSubj1, testSubj2]);
});
$("test-3")!.addEventListener("click", () => {
	$("prepend-3").Prepend("MEGA");
});
$("test-4")!.addEventListener("click", () => {
	$("prepend-4").Prepend(["MEGA", "LUL"]);
});

