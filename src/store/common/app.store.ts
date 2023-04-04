import type { ThemeVarious } from '#/contexts/theme'
import type { ScrollRecord, ViewportRecord } from '#/store/types'
import axios from 'axios'
import { setCookie } from 'cookies-next'
import { action, computed, makeObservable, observable } from 'mobx'
import { isClientSide } from '#/utils/helpers/'

interface IAppUIStore {
  theme: ThemeVarious
  scroll: ScrollRecord
  viewport: ViewportRecord
  mediaType: 'screen' | 'print'
  loading: boolean
}

export default class AppUIStore {
  state = {
    theme: 'light',
    scroll: {} as ScrollRecord,
    viewport: {} as ViewportRecord,
    mediaType: 'screen',
    loading: false
  } as IAppUIStore

  constructor() {
    makeObservable(this, {
      // ~ action
      setScroll: action,
      setViewport: action,
      setTheme: action,
      // ~ computed
      headerOpacity: computed,
      isOverFirstScreenHeight: computed,
      isOverPostTitleHeight: computed,
      isPadOrMobile: computed,
      isNarrowThanLaptop: computed
    })

    makeObservable(this.state, {
      loading: observable,
      theme: observable,
      mediaType: observable,
      scroll: observable,
      viewport: observable
    })
  }

  setLoading = (value: boolean): boolean => {
    console.log('>', value)

    return (this.state.loading = value)
  }
  setScroll = (scroll: ScrollRecord): ScrollRecord => (this.state.scroll = scroll)
  setViewport = (viewport: ViewportRecord): ViewportRecord => (this.state.viewport = viewport)
  setTheme = (themeType: ThemeVarious): ThemeVarious => {
    setCookie('_THEME_', themeType)
    return (this.state.theme = themeType)
  }

  updateScroll() {
    const { pageYOffset } = window

    this.setScroll({
      dir: null,
      pos: pageYOffset
    })
  }

  updateViewport() {
    const { innerHeight } = window
    const { width } = document.documentElement.getBoundingClientRect()
    const { hpad, pad, mobile, h, w } = this.state.viewport

    if (
      h &&
      // chrome mobile delta == 56
      Math.abs(innerHeight - h) < 80 &&
      width === w &&
      (hpad || pad || mobile)
    ) {
      return
    }
    this.setViewport({
      w: width,
      h: innerHeight,
      mobile: window.screen.width <= 568 || window.innerWidth <= 568,
      pad: window.innerWidth <= 768 && window.innerWidth > 568,
      hpad: window.innerWidth <= 1100 && window.innerWidth > 768,
      wider: window.innerWidth > 1100 && window.innerWidth < 1920,
      widest: window.innerWidth >= 1920
    })
  }

  //* Axios
  addAxiosInterceptors = (): void => {
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        console.log('error')

        if (error?.response?.status === 401) {
          // const urlCheckRegeExp = new RegExp(
          //   `/(login)|(${this.settings.NotificationsHubUrl})$`,
          //   'gi'
          // );
          // if (!urlCheckRegeExp.test(error.response.config.url)) {
          //   this.loginDialogControllerRef.current?.show({
          //     successLoginCallBack: (userInfo) => {
          //       this.userInfoControllerRef.current?.setUserInfo(userInfo, true);
          //       this.startHub();
          //     }
          //   });
          // }
        } else if (error?.response?.status === 403) {
          // this.modal?.showError({
          //   maxWidth: 700,
          //   message: 'Недостаточно прав доступа.'
          // });
        } else {
          // this.modal?.showError({
          //   maxWidth: 700,
          //   message:
          //     error?.response?.data?.message || error?.response?.data?.detail || error.toString()
          // });
        }
        return Promise.reject(error)
      }
    )

    axios.interceptors.request.use(
      (config) => {
        config.withCredentials = true
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
  }

  get headerOpacity() {
    const { pos } = this.state.scroll
    const threshold = 100

    const opacity = pos >= threshold ? 0 : 1 - Math.floor((pos / threshold) * 100) / 100

    return isNaN(opacity) ? 1 : opacity
  }

  get isOverFirstScreenHeight(): boolean {
    const { pos } = this.state.scroll

    if (!isClientSide()) {
      return false
    }
    return pos > window.innerHeight || pos > screen.height
  }

  get isOverPostTitleHeight(): boolean {
    const { pos } = this.state.scroll

    if (!isClientSide()) {
      return false
    }

    return pos > 126 || pos > screen.height / 3
  }

  get isPadOrMobile() {
    const { pad, mobile } = this.state.viewport

    return pad || mobile
  }

  get isNarrowThanLaptop() {
    return this.isPadOrMobile || this.state.viewport.hpad
  }
}
