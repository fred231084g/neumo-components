import { LitElement, TemplateResult } from 'lit';
import { PatternProperties, PatternType, PatternContent } from './types';
export declare class NeumoPattern extends LitElement implements PatternProperties {
    pattern: PatternType;
    loading: boolean;
    content: PatternContent;
    withDropCap: boolean;
    role?: string | null;
    ariaLabel?: string | null;
    static styles: import("lit").CSSResult;
    protected render(): TemplateResult<1>;
    private _renderPattern;
    private _renderZPattern;
    private _renderFPattern;
    private _renderTPattern;
    private _renderSkeleton;
    private _renderContent;
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
