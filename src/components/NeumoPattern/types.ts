import { TemplateResult } from 'lit';

/**
 * Valid pattern types
 */
export type PatternType = 'z' | 'f' | 't';

/**
 * Pattern content structure
 */
export interface PatternContent {
  /** Header content for F and T patterns */
  header?: string | TemplateResult;
  /** Main content required for all patterns */
  main: string | TemplateResult;
  /** Secondary content for Z and T patterns */
  secondary?: string | TemplateResult;
  /** Sidebar content for F pattern */
  sidebar?: string | TemplateResult;
}

/**
 * Pattern theme properties
 */
export interface PatternTheme {
  /** Background color for pattern sections */
  bgColor?: string;
  /** Light shadow color for neumorphic effect */
  shadowLight?: string;
  /** Dark shadow color for neumorphic effect */
  shadowDark?: string;
}

/**
 * Pattern states
 */
export interface PatternState {
  /** Loading state */
  loading?: boolean;
  /** Interactive state */
  interactive?: boolean;
  /** Disabled state */
  disabled?: boolean;
}

/**
 * Pattern size options
 */
export type PatternSize = 'sm' | 'md' | 'lg';

/**
 * Pattern variant options
 */
export type PatternVariant = 'flat' | 'concave' | 'convex';

/**
 * Complete pattern properties interface
 */
export interface PatternProperties extends PatternState {
  /** Pattern type */
  pattern: PatternType;
  /** Content configuration */
  content: PatternContent;
  /** Theme configuration */
  theme?: PatternTheme;
  /** Size variant */
  size?: PatternSize;
  /** Style variant */
  variant?: PatternVariant;
  /** Enable drop cap styling */
  withDropCap?: boolean;
  /** Custom class names */
  className?: string;
  /** ARIA role */
  role?: string | null;
  /** ARIA label */
  ariaLabel?: string | null;
}

/**
 * Pattern component event types
 */
export interface PatternEvents {
  /** Click event detail */
  'pattern-click': {
    pattern: PatternType;
    timestamp: number;
  };
  /** State change event detail */
  'pattern-state-change': {
    pattern: PatternType;
    loading: boolean;
    interactive: boolean;
    disabled: boolean;
  };
}

/**
 * Pattern event handler types
 */
export type PatternEventHandlers = {
  [K in keyof PatternEvents]: (event: CustomEvent<PatternEvents[K]>) => void;
};

/**
 * CSS custom properties interface
 */
export interface PatternCSSProperties {
  /** Pattern spacing variable */
  '--pattern-spacing'?: string;
  /** Pattern transition timing */
  '--pattern-transition'?: string;
  /** Pattern border radius */
  '--pattern-radius'?: string;
  /** Pattern header background */
  '--pattern-header-bg'?: string;
  /** Pattern content background */
  '--pattern-content-bg'?: string;
  /** Pattern sidebar background */
  '--pattern-sidebar-bg'?: string;
}