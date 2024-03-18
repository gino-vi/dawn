let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = new Config({
  crypto: {
    coin: 'ETH',
    currency: 'USD',
    refreshIn: 10
  },
  overrideStorage: true, // override localStorage with fixed userconfig values
  temperature: {
    location: 'Northridge',
    scale: 'C'
  },
  clock: {
    format: 'do B Y - h:i',
    iconColor: '#ff7b95'
  },
  search: {
    engines: {
      g: ['https://google.com/search?q=', 'Google'],
      i: ['https://ixquick.com/do/search?q=', 'Ixquick'],
      d: ['https://duckduckgo.com/html?q=', 'DuckDuckGo'],
      y: ['https://youtube.com/results?search_query=', 'Youtube'],
      w: ['https://en.wikipedia.org/w/index.php?search=', 'Wikipedia'],
      p: ['https://www.poewiki.net/index.php?search=', 'Path of Exile']
    }
  },
  keybindings: {
    "t": 'todo-list',
    "s": 'search-bar'
  },
  disabled: [],
  localIcons: true,
  openLastVisitedTab: true,
  tabs: [
    {
      name: 'social',
      background_url: 'src/img/banners/cbg-11.gif',
      categories: [{
        name: 'fun',
        links: [
          {
            url: 'https://www.last.fm/user/noctambulist-/',
            icon: 'brand-lastfm',
            icon_color: '#c3000d'
          },
          {
            url: 'https://www.youtube.com/',
            icon: 'brand-youtube',
            icon_color: '#FF0000'
          },
          {
            url: 'https://twitch.tv',
            icon: 'brand-twitch',
            icon_color: '#6441a5'
          },
          {
            url: 'https://twitter.com',
            icon: 'brand-twitter',
            icon_color: '#1DA1F2'
          },
          {
            url: 'https://amazon.com',
            icon: 'brand-amazon',
            icon_color: '#ff9900'
          },
          {
            url: 'https://reddit.com',
            icon: 'brand-reddit',
            icon_color: '	#FF5700'
          },
          {
            url: 'https://rateyourmusic.com/',
            icon: 'photo-circle',
            icon_color: '#67A7CF'
          },
          {
            url: 'https://www.discogs.com/',
            icon: 'disc',
            icon_color: '#000000'
          },
          {
            url: 'https://github.com/',
            icon: 'brand-github',
            icon_color: '#f5f5f5'
          },
          {
            url: 'https://news.ycombinator.com/',
            icon: 'brand-ycombinator',
            icon_color: '#ff4000'
          },
          {
            url: 'https://letterboxd.com/',
            icon: 'brand-letterboxd',
            icon_color: '#556678'
          },
          {
            url: 'https://cohost.org/',
            icon: 'brand-cohost',
            icon_color: '#83254FFF'
          },
        ]
      },
      {
        name: 'trackers',
        links: [
          {
            name: 'RED',
            url: 'https://redacted.ch/',
            icon: 'headphones',
            icon_color: '#31363F'
          },
          {
            name: 'PTP',
            url: 'https://passthepopcorn.me/index.php',
            icon: 'movie',
            icon_color: '#FC819E'
          },
          {
            name: 'JPS',
            url: 'https://jpopsuki.eu/',
            icon: 'torii',
            icon_color: '#DFF5FF'
          },
          {
            name: 'GG',
            url: 'https://gazellegames.net/',
            icon: 'device-gamepad-2',
            icon_color: '#378CE7'
          },
          {
            name: 'AB',
            url: 'https://animebytes.tv/',
            icon: 'alphabet-latin',
            icon_color: '#ad0c75'
          }
        ]
      },
      {
        name: 'Various',
        links: [
          {
            name: 'anilist',
            url: 'https://www.anilist.co',
            icon: 'list',
            icon_color: '#76ABAE'
          },
          {
            name: 'goodreads',
            url: 'https://www.goodreads.com/',
            icon: 'bookmarks',
            icon_color: '#B784B7'
          },
          {
            name: 'D2PT',
            url: 'https://dota2protracker.com/',
            icon: 'square-rounded-percentage',
            icon_color: '#FFF7F1'
          },
          {
            name: 'poe.ninja',
            url: 'https://poe.ninja/',
            icon: 'timeline',
            icon_color: '#FFE4C9'
          },
          {
            name: 'W|A',
            url: 'https://www.wolframalpha.com/',
            icon: 'square-root-2',
            icon_color: '#F27405'
          },
          {
            name: 'openscrob',
            url: 'https://openscrobbler.com/',
            icon: 'vinyl',
            icon_color: '#c0c0c0'
          },
          {
            name: 'Claude',
            url: 'https://claude.ai/chats/',
          },
          {
            name: 'liquipedia',
            url: 'https://liquipedia.net/',
          },
          {
            name: 'z-lib',
            url: 'https://lib-nufgobmtfnla24qq7lmbumpn.booksc.eu/',
            icon: 'books',
            icon_color: '#6D2932'
          },
        ]
      }
      ]
    },
    {
      name: 'boards',
      background_url: 'src/img/banners/bg-1.gif',
      categories: [{
        name: 'fun',
        links: [
          {
            url: 'https://4chan.org/wsg/',
            name: '/wsg/'
          },
          {
            name: '/out/',
            url: 'https://4chan.org/out',
            icon: 'leaf',
            icon_color: '#64876d'
          },
          {
            name: '/lit/',
            url: 'https://4chan.org/lit/',
            icon: 'book'
          },
          {
            name: '/v/',
            url: 'https://4chan.org/v/',
            icon: 'device-gamepad',
            icon_color: '#8b647b'
          },
          {
            name: '/p/',
            url: 'https://4chan.org/p/',
            icon: 'camera'
          }
        ]
      },
      {
        name: 'Comfy',
        links: [
          {
            name: '/lounge/',
            url: 'https://sushigirl.us/lounge/catalog.html'
          },
          {
            name: '/comfy/',
            url: 'https://anon.cafe/comfy/catalog.html'
          },
          {
            name: 'lo-fi',
            url: 'https://lofigenerator.com/'
          }
        ]
      },
      {
        name: 'Technology',
        links: [
          {
            name: '/g/',
            url: 'https://4chan.org/g/',
          },
          {
            name: '/Δ/',
            url: 'https://archive.arisuchan.jp/%CE%94/catalog.html'
          },
          {
            name: '/λ/',
            url: 'https://www.lainchan.org/%CE%BB/catalog.html'
          },
          {
            name: '/sec/',
            url: 'https://www.lainchan.org/sec/catalog.html'
          },
          {
            name: '/prog/',
            url: 'https://boards.420chan.org/prog/',
            icon: 'code'
          }
        ]
      }
      ]
    },
    {
      name: 'myself',
      background_url: 'src/img/banners/bg-2.gif',
      categories: [
        {
          name: 'personal',
          links: [
            {
              name: 'gmail',
              url: 'https://gmail.com',
              icon: 'brand-gmail',
              icon_color: '#c57750'
            },
            {
              name: 'docs',
              url: 'https://docs.google.com/document/u/0/',
              icon: 'file-stack',
              icon_color: '#996767'
            },
            {
              name: 'sheets', 
              url: 'https://docs.google.com/spreadsheets/u/0/',
              icon: 'file-spreadsheet'
            },
            {
              name: 'protonmail', 
              url: 'https://mail.proton.me/u/0/inbox',
              icon: 'circle-letter-p'
            },
          ]
        },
        {
          name: 'footprint',
          links: [
            {
              name: 'linkedin',
              url: 'https://www.linkedin.com/feed/',
              icon: 'brand-linkedin',
              icon_color: '#0a66c2'
            },
          ]
        }
      ]
    },
    {
      name: 'tech',
      background_url: 'src/img/banners/bg-3.gif',
      categories: [
        {
          name: 'subreddits',
          links: [
            {
              name: 'r/mechkbds/',
              url: 'https://www.reddit.com/r/MechanicalKeyboards/',
              icon: 'keyboard',
              icon_color: '#a57685'
            },
            {
              name: 'r/programming',
              url: 'https://www.reddit.com/r/programming/'
            }
          ]
        },
        {
          name: 'blogs',
          links: [
            {
              name: 'fasterthanli',
              url: 'https://fasterthanli.me/articles',
              icon: 'anchor'
            },
            {
              name: 'dev.to',
              url: 'https://dev.to'
            },
            {
              name: 'mataroa.blog',
              url: 'https://collection.mataroa.blog',
            }
          ]
        },
        {
          name: 'misc',
          links: [
            {
              name: 'post office',
              url: 'http://afternoon.dynu.com/letterbox.html',
              icon: 'mailbox'
            },
            {
              name: 'algorithms',
              url: 'https://the-algorithms.com/',
            }
          ]
        }
      ]
    },
    {
      name: 'design',
      background_url: 'src/img/banners/cbg-3.gif',
      categories: [
        {
          name: 'subreddits',
          links: [
            {
              name: 'r/firefoxcss',
              url: 'https://www.reddit.com/r/firefoxcss/'
            },
            {
              name: 'r/desktops',
              url: 'https://www.reddit.com/r/desktops/'
            },
            {
              name: 'r/unixporn',
              url: 'https://www.reddit.com/r/unixporn/'
            },
            {
              name: 'r/mechkbds/',
              url: 'https://www.reddit.com/r/MechanicalKeyboards/',
              icon: 'keyboard',
              icon_color: '#a57685'
            },
            {
              name: 'r/battlestations',
              url: 'https://www.reddit.com/r/battlestations/',
              icon: 'desk',
              icon_color: '#008080'
            },
            {
              name: 'r/startpages/',
              url: 'https://www.reddit.com/r/startpages/',
              icon: 'browser',
              icon_color: '#590080'
            },
          ]
        },
        {
          name: 'resources',
          links: [
            {
              name: 'colorhunt',
              url: 'https://colorhunt.co/',
              icon: 'color-picker',
              icon_color: '#ff80c0'
            },
            {
              name: 'terminalsexy',
              url: 'https://terminal.sexy/',
              icon: 'terminal',
              icon_color: '#ff8040'
            },
            {
              name: 'dev resources',
              url: 'https://devresourc.es/',
            },
          ]
        },
        {
          name: 'misc',
          links: [
            {
              name: 'post office',
              url: 'http://afternoon.dynu.com/letterbox.html',
              icon: 'mailbox'
            },
            {
              name: 'rust docs',
              url: 'https://doc.rust-lang.org/book/',
              icon: 'notebook',
              icon_color: '#977a3a'
            }
          ]
        }
      ]
    }]
});

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);

(function() {
  var css = document.createElement('link');
  css.href = 'src/css/tabler-icons.min.css';
  css.rel = 'stylesheet';
  css.type = 'text/css';
  if (!CONFIG.config.localIcons)
    document.getElementsByTagName('head')[0].appendChild(css);
})();