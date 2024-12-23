import { LitElement } from 'lit';
export declare class NeumoButton extends LitElement {
    label: string;
    disabled: boolean;
    variant: 'flat' | 'concave' | 'convex';
    size: 'sm' | 'md' | 'lg';
    platform: 'web' | 'ios' | 'android';
    bgColor: string;
    textColor: string;
    shadowLight: string;
    shadowDark: string;
    useHaptics: boolean;
    useRipple: boolean;
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
    private _getButtonClasses;
    private _getButtonStyles;
    private _handleClick;
    private _handleTouchStart;
    private _handleTouchEnd;
    private _createRipple;
}
declare global {
    interface HTMLElementTagNameMap {
        'neumo-button': NeumoButton;
    }
}
