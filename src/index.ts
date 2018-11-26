import {DOMExtend} from "./DOMExtend";

type ClickListener = (button: number, event: MouseEvent) => void;
type WheelListener = (delta: number, event: WheelEvent) => void;

declare global{
	interface Element {
		
		/**
		 * Adds the element as the last child of the target element
		 * @param element element to add
		 * @constructor
		 */
		Append(element: Element): Element;
		
		/**
		 * Adds the element or text array in order to the target element
		 * @param element element to add
		 * @constructor
		 */
		Append(element: (string | Element)[]): Element;
		
		/**
		 * Adds the text as text node to the end of the element
		 * @param text text to add
		 * @constructor
		 */
		Append(text: string): Element;
		
		/**
		 * Adds the element as the first child of the target element
		 * @param element element to add
		 * @constructor
		 */
		Prepend(element: Element): Element;
		
		/**
		 * Adds the text as text node as the first child of the target element
		 * @param text text to add
		 * @constructor
		 */
		Prepend(text: string): Element;
		
		/**
		 * Adds the text or element array in order as the first child of the target element.
		 * @param text
		 * @constructor
		 */
		Prepend(text: (string | Element)[]): Element;
		
		/**
		 * Adds the class to the element
		 * @param cls class or classes to add
		 * @constructor
		 */
		AddClass(cls: string | string[]): Element;
		
		/**
		 * Removes the class from the element
		 * @param cls class or classes to remove
		 * @constructor
		 */
		RemoveClass(cls: string | string[]): Element;
		
		/**
		 * Get the attribute with the specific key
		 * @param attr attribute to access
		 * @constructor
		 */
		Attr(attr: string): string;
		
		/**
		 * Sets the attribute with the specified key
		 * @param attr key of attribute
		 * @param value value of attribue
		 * @constructor
		 */
		Attr(attr: string, value: string): Element;
		
		/**
		 * Access the style of the attribute
		 * @param attr style name to access
		 * @constructor
		 */
		Style(attr: string): string;
		
		/**
		 * Set the style of the attribute
		 * @param attr style name to set
		 * @param value value to set
		 * @constructor
		 */
		Style(attr: string, value: string): Element;
		
		/**
		 * Sets the style according to the attribute of the object
		 * @param styles style object, in form of key-pair value
		 * @constructor
		 */
		Style(styles: { [s: string]: string }): Element;
		
		/**
		 * Access the id of the element
		 * @constructor
		 */
		Id(): string;
		
		/**
		 * Set the id of the element
		 * @param id
		 * @constructor
		 */
		Id(id: string): Element;
		
		/**
		 * Adds click listener to the element
		 * @param listener function to execute on click
		 * @constructor
		 */
		Click(listener: ClickListener): Element;
		
		/**
		 * Adds wheel down listener to the element
		 * @param listener function to execute on wheel down
		 * @constructor
		 */
		WheelDown(listener: WheelListener): Element;
		
		/**
		 * Adds wheel up listener to the element
		 * @param listener function to execute on wheel up
		 * @constructor
		 */
		WheelUp(listener: WheelListener): Element;
	}
	
	interface SVGElement extends Element {
	}
	
	interface HTMLElement extends Element {
	}
	
	interface HTMLAnchorElement extends HTMLElement {
	}
	
	interface HTMLAppletElement extends HTMLElement {
	}
	
	interface HTMLAreaElement extends HTMLElement {
	}
	
	interface HTMLAudioElement extends HTMLElement {
	}
	
	interface HTMLBRElement extends HTMLElement {
	}
	
	interface HTMLBaseElement extends HTMLElement {
	}
	
	interface HTMLBaseFontElement extends HTMLElement {
	}
	
	interface HTMLBodyElement extends HTMLElement {
	}
	
	interface HTMLButtonElement extends HTMLElement {
	}
	
	interface HTMLCanvasElement extends HTMLElement {
	}
	
	interface HTMLDListElement extends HTMLElement {
	}
	
	interface HTMLDataListElement extends HTMLElement {
	}
	
	interface HTMLDataElement extends HTMLElement {
	}
	
	interface HTMLDetailsElement extends HTMLElement {
	}
	
	interface HTMLDialogElement extends HTMLElement {
	}
	
	interface HTMLDirecoryElement extends HTMLElement {
	}
	
	interface HTMLEmbedElement extends HTMLElement {
	}
	
	interface HTMLFieldSetElement extends HTMLElement {
	}
	
	interface HTMLFontElement extends HTMLElement {
	}
	
	interface HTMLFormElement extends HTMLElement {
	}
	
	interface HTMLDivElement extends HTMLElement {
	}
	
	interface HTMLFrameElement extends HTMLElement {
	}
	
	interface HTMLFrameSetElement extends HTMLElement {
	}
	
	interface HTMLHRElement extends HTMLElement {
	}
	
	interface HTMLHeadElement extends HTMLElement {
	}
	
	interface HTMLHeadingElement extends HTMLElement {
	}
	
	interface HTMLHtmlElement extends HTMLElement {
	}
	
	interface HTMLImageElement extends HTMLElement {
	}
	
	interface HTMLIFrameElement extends HTMLElement {
	}
	
	interface HTMLInputElement extends HTMLElement {
	}
	
	interface HTMLLIElement extends HTMLElement {
	}
	
	interface HTMLLabelElement extends HTMLElement {
	}
	
	interface HTMLLegendElement extends HTMLElement {
	}
	
	interface HTMLLinkElement extends HTMLElement {
	}
	
	interface HTMLVideoElement extends HTMLElement {
	}
	
	interface HTMLUnknownElement extends HTMLElement {
	}
	
	interface HTMLMainElement extends HTMLElement {
	}
	
	interface HTMLMapElement extends HTMLElement {
	}
	
	interface HTMLMarqueeElement extends HTMLElement {
	}
	
	interface HTMLMediaElement extends HTMLElement {
	}
	
	interface HTMLMenuElement extends HTMLElement {
	}
	
	interface HTMLMetaElement extends HTMLElement {
	}
	
	interface HTMLMeterElement extends HTMLElement {
	}
	
	interface HTMLModElement extends HTMLElement {
	}
	
	interface HTMLOListElement extends HTMLElement {
	}
	
	interface HTMLObjectElement extends HTMLElement {
	}
	
	interface HTMLOptGroupElement extends HTMLElement {
	}
	
	interface HTMLOptionElement extends HTMLElement {
	}
	
	interface HTMLPreElement extends HTMLElement {
	}
	
	interface HTMLPictureElement extends HTMLElement {
	}
	
	interface HTMLOutputElement extends HTMLElement {
	}
	
	interface HTMLParagraphElement extends HTMLElement {
	}
	
	interface HTMLParamElement extends HTMLElement {
	}
	
	interface HTMLProgressElement extends HTMLElement {
	}
	
	interface HTMLScriptElement extends HTMLElement {
	}
	
	interface HTMLQuoteElement extends HTMLElement {
	}
	
	interface HTMLSelectElement extends HTMLElement {
	}
	
	interface HTMLSlotElement extends HTMLElement {
	}
	
	interface HTMLSourceElement extends HTMLElement {
	}
	
	interface HTMLSpanElement extends HTMLElement {
	}
	
	interface HTMLStyleElement extends HTMLElement {
	}
	
	interface HTMLTableCaptionElement extends HTMLElement {
	}
	
	interface HTMLTableCellElement extends HTMLElement {
	}
	
	interface HTMLTableDataCellElement extends HTMLElement {
	}
	
	interface HTMLTableColElement extends HTMLElement {
	}
	
	interface HTMLTableElement extends HTMLElement {
	}
	
	interface HTMLTableHeaderElement extends HTMLElement {
	}
	
	interface HTMLTableRowElement extends HTMLElement {
	}
	
	interface HTMLTableSectionElement extends HTMLElement {
	}
	
	interface HTMLTitleElement extends HTMLElement {
	}
	
	interface HTMLTextAreaElement extends HTMLElement {
	}
	
	interface HTMLTemplateElement extends HTMLElement {
	}
	
	interface HTMLTimeElement extends HTMLElement {
	}
	
	interface HTMLTrackElement extends HTMLElement {
	}
	
	interface HTMLUListElement extends HTMLElement {
	}
}

interface DOMEx{
	ExtendPrimitives(): void;
	
	IsExtended: boolean;
	
	AssertExtend() : void;
}

export {
	ClickListener,
	WheelListener,
	DOMEx,
	DOMExtend
}
