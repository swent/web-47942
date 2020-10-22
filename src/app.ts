export class App {
  
  public message = 'sample app for bug web-47942';
  public value: number = 0;
  public allowFloatingValues: boolean = true;
  public defaultValue: number = 0;

  private _input: HTMLInputElement;
  private _onValueChangeListener: EventListener;

  constructor() {
    this._onValueChangeListener = this.onValueChange.bind(this);
  }

  public bind(): void {
    this._input.addEventListener('input', this._onValueChangeListener);
  }

  public unbind(): void {
    this._input.removeEventListener('input', this._onValueChangeListener);
  }

  private onValueChange(): void {
    this.value = this.parseCurrentHtmlValue();
  }

  private parseCurrentHtmlValue(): number {
    const inputValue = this._input.value,
      parsedValue = this.allowFloatingValues ? parseFloat(inputValue) : parseInt(inputValue, 10);

    return Number.isNaN(parsedValue) ? this.defaultValue : parsedValue;
  }
}
