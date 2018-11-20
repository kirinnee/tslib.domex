declare global{
	interface HTMLElement{
		
		Append(element:HTMLElement):HTMLElement;
		Append(element:HTMLElement[]): HTMLElement;
		Append(text: string): HTMLElement;
		Append(text: string[]): HTMLElement;
		
		Prepend(element:HTMLElement):HTMLElement;
		Prepend(element:HTMLElement[]): HTMLElement;
		Prepend(text: string): HTMLElement;
		Prepend(text: string[]): HTMLElement;
		
		AddClass(cls: string|string[]): HTMLElement;
		RemoveClass(cls:string|string[]): HTMLElement;
		
		Attr(attr:string):string;
		Attr(attr:string, value:string) :HTMLElement;
		
		Style(attr:string):string;
		Style(attr:string, value:string):HTMLElement;
	}
}

interface DOMEx{
	ExtendPrimitives(): void;
	IsExtended: boolean;
	AssertExtend() : void;
}


export {
	DOMEx
}
