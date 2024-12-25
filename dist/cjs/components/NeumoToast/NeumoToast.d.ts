import { LitElement } from 'lit';
export type ToastType = 'success' | 'error' | 'warning' | 'info';
export type ToastPosition = 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
export declare class NeumoToast extends LitElement {
    message: string;
    type: ToastType;
    duration: number;
    position: ToastPosition;
    open: boolean;
    platform: 'ios' | 'android' | 'web';
    private timeout;
    static styles: import("lit").CSSResult;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: Map<string, unknown>): void;
    private startTimer;
    private getIcon;
    close(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'neumo-toast': NeumoToast;
    }
}
