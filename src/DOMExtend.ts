import {ClickListener, DOMEx, WheelListener} from "./index";
import {Core} from "@kirinnee/core";

class DOMExtend implements DOMEx {
	
	private readonly core: Core;
	
	constructor(core: Core) {
		core.AssertExtend();
		this.core = core;
	}
	
	get IsExtended(): boolean {
		return HTMLElement.prototype.Style != null;
	}
	
	AssertExtend(): void {
		if (!this.IsExtended) throw new Error("DOMEx needs to be extended");
	}
	
	ExtendPrimitives(): void {
		let k = this;
		let c = this.core;
		HTMLElement.prototype.Append = function (element: any): HTMLElement {
			if (c.IsArray(element)) {
				(element as any[]).Each(s => this.Append(s));
				return this;
			} else {
				if (c.IsAnyString(element)) element = document.createTextNode(element);
				this.appendChild(element);
				return this;
			}
		};
		
		HTMLElement.prototype.Prepend = function (element: any): HTMLElement {
			if (c.IsArray(element)) {
				(element as any[]).Each(s => this.Prepend(s));
				return this;
			} else {
				if (c.IsAnyString(element)) element = document.createTextNode(element);
				this.insertBefore(element, this.firstChild);
				return this;
			}
		};
		
		HTMLElement.prototype.AddClass = function (element: any): HTMLElement {
			if (c.IsArray(element)) {
				(element as string[]).Each(s => this.classList.add(s));
			} else {
				this.classList.add(element);
			}
			return this;
		};
		
		HTMLElement.prototype.RemoveClass = function (element: any): HTMLElement {
			if (c.IsArray(element)) {
				(element as string[]).Each(s => this.classList.remove(s));
			} else {
				this.classList.remove(element);
			}
			return this;
		};
		
		HTMLElement.prototype.Attr = function (attr: any, value?: string): any {
			if (value == null) return this.getAttribute(attr);
			this.setAttribute(attr, value!);
			return this;
		};
		
		HTMLElement.prototype.Style = function (attr: any, value?: string): any {
			let a: string = k.C(attr);
			if (value == null) return (window.getComputedStyle(this) as any)[a];
			this.style[a] = value;
			return this;
		};
		
		HTMLElement.prototype.Id = function (value?: string): any {
			if (value == null) return this.Attr('id');
			this.Attr('id', value);
			return this;
		};
		
		HTMLElement.prototype.Click = function (listener: ClickListener): HTMLElement {
			this.addEventListener('click', (e: MouseEvent) => listener(e.which || e.button, e));
			return this;
		};
		
		HTMLElement.prototype.WheelUp = function (listener: WheelListener): HTMLElement {
			this.addEventListener('wheel', (e: WheelEvent) => {
				if (e.wheelDeltaY > 0) listener(e.wheelDeltaY.Abs(), e);
			});
			this.addEventListener('DOMMouseScroll', (e: WheelEvent) => {
				if (e.detail < 0) listener(e.detail.Abs(), e);
			});
			this.addEventListener('mousewheel', (e: WheelEvent) => {
				if (e.wheelDelta > 0) listener(e.wheelDelta.Abs(), e);
			});
			return this;
		};
		
		HTMLElement.prototype.WheelDown = function (listener: WheelListener): HTMLElement {
			this.addEventListener('wheel', (e: WheelEvent) => {
				if (e.wheelDeltaY < 0) listener(e.wheelDeltaY.Abs(), e);
			});
			this.addEventListener('DOMMouseScroll', (e: WheelEvent) => {
				if (e.detail > 0) listener(e.detail.Abs(), e);
			});
			this.addEventListener('mousewheel', (e: WheelEvent) => {
				if (e.wheelDelta < 0) listener(e.wheelDelta.Abs(), e);
			});
			return this;
		};
		
	}
	
	/**
	 * Converts CSS attribute key to javascript attribute key
	 */
	private C(css: string): string {
		return css.split('-')
			.Where(s => s.trim() != '')
			.Map((s, i) => i === 0 ? s : s.Capitalize())
			.join('');
	}
}

export {DOMExtend};