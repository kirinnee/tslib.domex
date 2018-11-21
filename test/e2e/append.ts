import {DOMEx} from "../../src";
import {DOMExtend} from "../../src/DOMExtend";
import {Core, Kore} from "@kirinnee/core";

let core: Core = new Kore();
core.ExtendPrimitives();

let domex: DOMEx = new DOMExtend(core);
domex.ExtendPrimitives();

let testSubj1: HTMLElement = document.createElement("div");
testSubj1.innerText = "APPENDED";

let testSubj2: HTMLElement = document.createElement("div");
testSubj2.innerText = "APPENDED TOO";

let $ = function (id: string): HTMLDivElement {
	return document.getElementById(id)! as HTMLDivElement;
};

$("test-1")!.addEventListener("click", () => {
	$("append-1").Append(testSubj1);
});
$("test-2")!.addEventListener("click", () => {
	$("append-2").Append([testSubj1, testSubj2]);
});
$("test-3")!.addEventListener("click", () => {
	$("append-3").Append("MEGA");
});
$("test-4")!.addEventListener("click", () => {
	$("append-4").Append(["MEGA", "LUL"]);
});

