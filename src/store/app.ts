import { makeAutoObservable } from 'mobx';
import { isClientSide } from '#/utils/env';

import type { ViewportRecord } from './types';
import type { ThemeVarious } from '../contexts/theme';
import { setCookie } from 'cookies-next';

// interface IAppUIStore {
//   theme: ThemeVarious;
// }

export default class AppUIStore {
  // state = {
  //   theme: 'light'
  // } as IAppUIStore;

  constructor() {
    makeAutoObservable(this);
  }

  private position = 0;
  theme: ThemeVarious = 'light';
  viewport: ViewportRecord = {} as ViewportRecord;
  scrollDirection: 'up' | 'down' | null = null;
  mediaType: 'screen' | 'print' = 'screen';
  headerNav = {
    title: '',
    meta: '',
    show: false
  };
  shareData: { title: string; text?: string; url: string } | null = null;

  setTheme = (themeType: ThemeVarious): ThemeVarious => {
    setCookie('_THEME_', themeType);
    return (this.theme = themeType);
  };

  updatePosition(direction: 'up' | 'down' | null, y: number) {
    if (typeof document !== 'undefined') {
      this.position = y;
      this.scrollDirection = direction;
    }
  }

  get headerOpacity() {
    const threshold = 50;
    return this.position >= threshold ? 1 : Math.floor((this.position / threshold) * 100) / 100;
  }

  get isOverFirstScreenHeight(): boolean {
    if (!isClientSide()) {
      return false;
    }
    return this.position > window.innerHeight || this.position > screen.height;
  }

  get isOverPostTitleHeight(): boolean {
    if (!isClientSide()) {
      return false;
    }

    return this.position > 126 || this.position > screen.height / 3;
  }

  updateViewport() {
    const { innerHeight } = window;
    const { width } = document.documentElement.getBoundingClientRect();
    const { hpad, pad, mobile } = this.viewport;

    if (
      this.viewport.h &&
      // chrome mobile delta == 56
      Math.abs(innerHeight - this.viewport.h) < 80 &&
      width === this.viewport.w &&
      (hpad || pad || mobile)
    ) {
      return;
    }
    this.viewport = {
      w: width,
      h: innerHeight,
      mobile: window.screen.width <= 568 || window.innerWidth <= 568,
      pad: window.innerWidth <= 768 && window.innerWidth > 568,
      hpad: window.innerWidth <= 1100 && window.innerWidth > 768,
      wider: window.innerWidth > 1100 && window.innerWidth < 1920,
      widest: window.innerWidth >= 1920
    };
  }

  get isPadOrMobile() {
    return this.viewport.pad || this.viewport.mobile;
  }

  /**
   * < 1100
   */
  get isNarrowThanLaptop() {
    return this.isPadOrMobile || this.viewport.hpad;
  }
}
