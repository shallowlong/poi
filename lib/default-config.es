const defaultConfig = {
  poi: {
    misc: {
      disablehwaccel: false,
      limitFps: {
        enabled: false,
        value: 60,
      },
      safemode: false,
      shortcut: true,
      disablenetworkalert: false,
      dmmcookie: false,
      homepage: 'http://www.dmm.com/netgame/social/application/-/detail/=/app_id=854854/',
      networklog: true,
      analytics: true,
      exceptionReporting: true,
      async: true,
      screenshot: {
        format: 'png',
        usecanvas: false,
      },
      cache: {
        path: global.DEFAULT_CACHE_PATH,
        size: 640,
      },
      trustedCerts: [],
    },
    content: {
      resizable: true,
      alwaysOnTop: false,
      muted: false,
    },
    appearance: {
      avatar: true,
      avatarType: 'none',
      zoom: 1,
      theme: 'dark',
      colorblindFilter: 'null',
      svgicon: false,
      textspacingcjk: true,
      vibrant: 0,
      customtitlebar: process.platform === 'win32' || process.platform === 'linux',
    },
    window: {
      isMaximized: false,
      isFullScreen: false,
    },
    shortcut: {
      bosskey: '',
    },
    update: {
      beta: false,
      enable: true,
    },
    webview: {
      useFixedResolution: true,
      windowUseFixedResolution: true,
      windowWidth: 1200,
      width: 1200,
      ratio: {
        vertical: 50,
        horizontal: 60,
      },
    },
    layout: {
      overlay: false,
      mode: 'horizontal',
      isolate: false,
      reverse: false,
      editable: false,
    },
    confirm: {
      quit: false,
    },
    autoswitch: {
      enabled: true,
      main: true,
    },
    tabarea: {
      vertical: false,
      double: false,
      grid: true,
      mainpanelwidth: {
        px: 0,
        percent: 50,
      },
      mainpanelheight: {
        px: 0,
        percent: 50,
      },
    },
    notify: {
      morale: {
        value: 49,
        enabled: true,
      },
      expedition: {
        value: 60,
        enabled: true,
      },
      volume: 0.8,
      delay: {
        dev: false,
        improve: false,
      },
      enabled: true,
      construction: {
        enabled: true,
      },
      repair: {
        enabled: true,
      },
      battleEnd: {
        enabled: true,
        onlyBackground: true,
        onlyMuted: true,
      },
      others: {
        enabled: true,
      },
    },
    eventSortieCheck: {
      enable: true,
    },
    expeditionResupplyCheck: {
      enable: false,
    },
    unusedEquipmentSlotCheck: {
      enable: false,
      ignoreUnlocked: false,
    },
    mapStartCheck: {
      ship: {
        enable: false,
        minFreeSlots: 4,
      },
      item: {
        enable: false,
        minFreeSlots: 10,
      },
    },
    transition: {
      enable: true,
    },
    mainpanel: {
      layout: {
        sm: [
          {
            w: 10,
            h: 3,
            x: 0,
            y: 0,
            minW: 3,
            minH: 2,
            maxW: 10,
            maxH: 50,
            i: 'teitoku-panel',
          },
          {
            w: 5,
            h: 8,
            x: 0,
            y: 3,
            minW: 1,
            minH: 3,
            maxW: 10,
            maxH: 50,
            i: 'resource-panel',
          },
          {
            w: 5,
            h: 24,
            x: 0,
            y: 11,
            minW: 3,
            minH: 9,
            maxW: 10,
            maxH: 50,
            i: 'miniship',
          },
          {
            w: 5,
            h: 6,
            x: 5,
            y: 3,
            minW: 2,
            minH: 6,
            maxW: 10,
            maxH: 50,
            i: 'repair-panel',
          },
          {
            w: 5,
            h: 6,
            x: 5,
            y: 9,
            minW: 2,
            minH: 6,
            maxW: 10,
            maxH: 50,
            i: 'construction-panel',
          },
          {
            w: 5,
            h: 7,
            x: 5,
            y: 15,
            minW: 3,
            minH: 5,
            maxW: 10,
            maxH: 50,
            i: 'expedition-panel',
          },
          {
            w: 5,
            h: 13,
            x: 5,
            y: 23,
            minW: 3,
            minH: 5,
            maxW: 10,
            maxH: 50,
            i: 'task-panel',
          },
        ],
        lg: [
          {
            w: 12,
            h: 3,
            x: 0,
            y: 0,
            minW: 3,
            minH: 2,
            maxW: 20,
            maxH: 50,
            i: 'teitoku-panel',
          },
          {
            w: 6,
            h: 8,
            x: 0,
            y: 3,
            minW: 1,
            minH: 3,
            maxW: 20,
            maxH: 50,
            i: 'resource-panel',
          },
          {
            w: 8,
            h: 25,
            x: 12,
            y: 0,
            minW: 3,
            minH: 9,
            maxW: 20,
            maxH: 50,
            i: 'miniship',
          },
          {
            w: 6,
            h: 7,
            x: 6,
            y: 11,
            minW: 2,
            minH: 6,
            maxW: 10,
            maxH: 50,
            i: 'repair-panel',
          },
          {
            w: 6,
            h: 7,
            x: 6,
            y: 18,
            minW: 2,
            minH: 6,
            maxW: 10,
            maxH: 50,
            i: 'construction-panel',
          },
          {
            w: 6,
            h: 8,
            x: 6,
            y: 3,
            minW: 3,
            minH: 5,
            maxW: 20,
            maxH: 50,
            i: 'expedition-panel',
          },
          {
            w: 6,
            h: 14,
            x: 0,
            y: 11,
            minW: 3,
            minH: 5,
            maxW: 20,
            maxH: 50,
            i: 'task-panel',
          },
        ],
      },
    },
  },
  proxy: {
    socks5: {
      host: '127.0.0.1',
      port: 1080,
    },
    http: {
      host: '127.0.0.1',
      port: 8118,
      requirePassword: false,
      username: '',
      password: '',
    },
    allowLAN: false,
    port: 0,
    retries: 0,
    use: 'none',
  },
  packageManager: {
    enablePluginCheck: true,
    proxy: false,
    enableBetaPluginCheck: false,
    enableAutoUpdate: true,
  },
}

export default defaultConfig
