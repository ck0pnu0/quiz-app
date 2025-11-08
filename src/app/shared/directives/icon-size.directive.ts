import { Directive, ElementRef, inject, input, OnInit } from "@angular/core";

export const ICON_SIZES = {
  large: '56px',
  medium: '40px',
  small: '24px',
  smaller: '16px'
} as const;

@Directive({
  selector: '[appIcon]',
  standalone: true,
})
export class IconSizeDirective implements OnInit {
  size = input.required<keyof typeof ICON_SIZES>();

  private _elementRef = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const selectedSize = ICON_SIZES[this.size()];
    if (selectedSize) {
      const el = this._elementRef.nativeElement;
      el.style.width = selectedSize;
      el.style.height = selectedSize;
    }
  }
}