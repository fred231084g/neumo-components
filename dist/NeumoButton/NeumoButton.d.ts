import { LitElement } from 'lit';
export declare class NeumoButton extends LitElement {
    label: string;
    disabled: boolean;
    bgColor: string;
    textColor: string;
    shadowLight: string;
    shadowDark: string;
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
    private _dynamicStyles;
    private _handleClick;
}
