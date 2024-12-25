import { LitElement } from 'lit';
import { PatternContent } from './NuemoPattern';
export declare class NeumoPattern extends LitElement {
    pattern: 'z' | 'f' | 't';
    loading: boolean;
    content: PatternContent;
    withDropCap: boolean;
    static styles: import("lit").CSSResult;
    protected render(): import("lit-html").TemplateResult<1>;
    private _renderPattern;
    private _renderZPattern;
    private _renderFPattern;
    private _renderTPattern;
    private _renderSkeleton;
}
export declare class NeumoZPattern extends NeumoPattern {
    constructor();
}
export declare class NeumoFPattern extends NeumoPattern {
    constructor();
}
export declare class NeumoTPattern extends NeumoPattern {
    constructor();
}
