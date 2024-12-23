import { LitElement } from 'lit';
export declare class NeumoCard extends LitElement {
    platform: 'web' | 'ios' | 'android';
    variant: 'flat' | 'concave' | 'convex';
    size: 'sm' | 'md' | 'lg';
    interactive: boolean;
    bgColor: string;
    shadowLight: string;
    shadowDark: string;
    width: string;
    height: string;
    padding: string;
    rippleEffect: boolean;
    hoverEffect: boolean;
    pressEffect: boolean;
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
    private _getCardClasses;
    private _getCardStyles;
    private _handleClick;
    private _handleTouchStart;
    private _handleTouchEnd;
    private _createRipple;
}
declare global {
    interface HTMLElementTagNameMap {
        'neumo-card': NeumoCard;
    }
}
