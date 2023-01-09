import type { InitialDataType } from '#/contexts/initial-data';
import type { FC } from 'react';
import 'react-dom/next';

declare global {
  export interface History {
    backPath: string[];
  }
  export interface Window {
    [key: string]: unknown;

    data?: InitialDataType;

    umami?: Umami;
  }

  export type IdProps = { id: string };
  export type PageOnlyProps = FC<IdProps>;

  interface Umami {
    (event: string): void;
    trackEvent(event_value: string, event_type: string, url?: string, website_id?: string): void;

    trackView(url?: string, referrer?: string, website_id?: string): void;
  }
}

declare module 'react' {
  export interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    'data-hide-print'?: boolean;
    'aria-hidden'?: boolean;
  }
}

export {};
