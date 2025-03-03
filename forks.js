
const repos = [
    {
        "title": "dotnet/runtime"
    },
    {
        "title": "kaldi-asr/kaldi"
    },
    {
        "title": "Tencent/omi"
    },
    {
        "title": "wix/react-native-navigation"
    },
    {
        "title": "Homebrew/homebrew-core"
    },
    {
        "title": "jupyterlab/jupyterlab"
    },
    {
        "title": "markets/awesome-ruby"
    },
    {
        "title": "tinymce/tinymce"
    },
    {
        "title": "surmon-china/vue-awesome-swiper"
    },
    {
        "title": "webrtc/samples"
    },
    {
        "title": "openai/openai-python"
    },
    {
        "title": "apache/apisix"
    },
    {
        "title": "auchenberg/volkswagen"
    },
    {
        "title": "ansible/awx"
    },
    {
        "title": "tw93/Pake"
    },
    {
        "title": "krasimir/react-in-patterns"
    },
    {
        "title": "rust-lang/rust-analyzer"
    },
    {
        "title": "tidwall/gjson"
    },
    {
        "title": "facebookarchive/stetho"
    },
    {
        "title": "alibaba/hooks"
    },
    {
        "title": "twbs/bootstrap-sass"
    },
    {
        "title": "akka/akka"
    },
    {
        "title": "marko-js/marko"
    },
    {
        "title": "mishoo/UglifyJS"
    },
    {
        "title": "sivel/speedtest-cli"
    },
    {
        "title": "denisidoro/navi"
    },
    {
        "title": "node-inspector/node-inspector"
    },
    {
        "title": "jwagner/smartcrop.js"
    },
    {
        "title": "valinet/ExplorerPatcher"
    },
    {
        "title": "microsoft/ai-edu"
    },
    {
        "title": "Instagram/IGListKit"
    },
    {
        "title": "ianyh/Amethyst"
    },
    {
        "title": "apache/arrow"
    },
    {
        "title": "microsoft/qlib"
    },
    {
        "title": "greenrobot/greenDAO"
    },
    {
        "title": "uxsolutions/bootstrap-datepicker"
    },
    {
        "title": "unixorn/awesome-zsh-plugins"
    },
    {
        "title": "google/brotli"
    },
    {
        "title": "FaridSafi/react-native-gifted-chat"
    },
    {
        "title": "OpenRA/OpenRA"
    },
    {
        "title": "apache/predictionio"
    },
    {
        "title": "extrawurst/gitui"
    },
    {
        "title": "sqshq/piggymetrics"
    },
    {
        "title": "codelucas/newspaper"
    },
    {
        "title": "tpope/vim-surround"
    },
    {
        "title": "rt2zz/redux-persist"
    },
    {
        "title": "vicc/chameleon"
    },
    {
        "title": "systemjs/systemjs"
    },
    {
        "title": "nats-io/nats-server"
    },
    {
        "title": "memcached/memcached"
    },
    {
        "title": "java-decompiler/jd-gui"
    },
    {
        "title": "koreader/koreader"
    },
    {
        "title": "php-fig/fig-standards"
    },
    {
        "title": "vlucas/phpdotenv"
    },
    {
        "title": "arut/nginx-rtmp-module"
    },
    {
        "title": "scottbez1/smartknob"
    },
    {
        "title": "karpathy/llama2.c"
    },
    {
        "title": "wistbean/learn_python3_spider"
    },
    {
        "title": "loverajoel/jstips"
    },
    {
        "title": "capistrano/capistrano"
    },
    {
        "title": "gizak/termui"
    },
    {
        "title": "graphql/dataloader"
    },
    {
        "title": "sindresorhus/pure"
    },
    {
        "title": "wong2/chatgpt-google-extension"
    },
    {
        "title": "RPCS3/rpcs3"
    },
    {
        "title": "Rapptz/discord.py"
    },
    {
        "title": "networkx/networkx"
    },
    {
        "title": "zhihu/Matisse"
    },
    {
        "title": "Tonejs/Tone.js"
    },
    {
        "title": "SVProgressHUD/SVProgressHUD"
    },
    {
        "title": "alibaba/lowcode-engine"
    },
    {
        "title": "leisurelicht/wtfpython-cn"
    },
    {
        "title": "qyuhen/book"
    },
    {
        "title": "phanan/htaccess"
    },
    {
        "title": "playframework/playframework"
    },
    {
        "title": "robbiehanson/CocoaAsyncSocket"
    },
    {
        "title": "daimajia/AndroidViewAnimations"
    },
    {
        "title": "HandBrake/HandBrake"
    },
    {
        "title": "golang/groupcache"
    },
    {
        "title": "redis/ioredis"
    },
    {
        "title": "youth5201314/banner"
    },
    {
        "title": "daimajia/AndroidSwipeLayout"
    },
    {
        "title": "ajv-validator/ajv"
    },
    {
        "title": "alibaba/tengine"
    },
    {
        "title": "jhuangtw/xg2xg"
    },
    {
        "title": "Automattic/wp-calypso"
    },
    {
        "title": "phacility/phabricator"
    },
    {
        "title": "Kotlin/kotlinx.coroutines"
    },
    {
        "title": "davidshimjs/qrcodejs"
    },
    {
        "title": "halfrost/Halfrost-Field"
    },
    {
        "title": "amfe/lib-flexible"
    },
    {
        "title": "dmlc/dgl"
    },
    {
        "title": "polybar/polybar"
    },
    {
        "title": "tomnomnom/gron"
    },
    {
        "title": "jikexueyuanwiki/tensorflow-zh"
    },
    {
        "title": "zenorocha/alfred-workflows"
    },
    {
        "title": "docker/kitematic"
    },
    {
        "title": "gaearon/react-hot-loader"
    },
    {
        "title": "gnab/remark"
    },
    {
        "title": "kubesphere/kubesphere"
    },
    {
        "title": "iggredible/Learn-Vim"
    },
    {
        "title": "nusr/hacker-laws-zh"
    },
    {
        "title": "segmentio/evergreen"
    },
    {
        "title": "answershuto/learnVue"
    },
    {
        "title": "troyeguo/koodo-reader"
    },
    {
        "title": "roots/sage"
    },
    {
        "title": "tiangolo/typer"
    },
    {
        "title": "primer/css"
    },
    {
        "title": "gruntjs/grunt"
    },
    {
        "title": "rubocop/rubocop"
    },
    {
        "title": "fogleman/primitive"
    },
    {
        "title": "slackhq/nebula"
    },
    {
        "title": "linnovate/mean"
    },
    {
        "title": "google/guice"
    },
    {
        "title": "spree/spree"
    },
    {
        "title": "google-deepmind/deepmind-research"
    },
    {
        "title": "xgrommx/awesome-redux"
    },
    {
        "title": "dzenbot/DZNEmptyDataSet"
    },
    {
        "title": "reactos/reactos"
    },
    {
        "title": "VerbalExpressions/JSVerbalExpressions"
    },
    {
        "title": "bailicangdu/node-elm"
    },
    {
        "title": "samber/lo"
    },
    {
        "title": "s-matyukevich/raspberry-pi-os"
    },
    {
        "title": "xiandanin/magnetW"
    },
    {
        "title": "fluent/fluentd"
    },
    {
        "title": "diegomura/react-pdf"
    },
    {
        "title": "openai/evals"
    },
    {
        "title": "cloudwu/skynet"
    },
    {
        "title": "sindresorhus/type-fest"
    },
    {
        "title": "PHPOffice/PhpSpreadsheet"
    },
    {
        "title": "tpope/vim-pathogen"
    },
    {
        "title": "postgres/postgres"
    },
    {
        "title": "waditu/tushare"
    },
    {
        "title": "ramsey/uuid"
    },
    {
        "title": "FavioVazquez/ds-cheatsheets"
    },
    {
        "title": "ethereum/EIPs"
    },
    {
        "title": "Netflix/eureka"
    },
    {
        "title": "mfornos/awesome-microservices"
    },
    {
        "title": "laradock/laradock"
    },
    {
        "title": "fengyuanchen/cropperjs"
    },
    {
        "title": "ppy/osu"
    },
    {
        "title": "Juanpe/SkeletonView"
    },
    {
        "title": "TypeStrong/ts-node"
    },
    {
        "title": "nicklockwood/iCarousel"
    },
    {
        "title": "spotify/annoy"
    },
    {
        "title": "avwo/whistle"
    },
    {
        "title": "pjialin/py12306"
    },
    {
        "title": "morhetz/gruvbox"
    },
    {
        "title": "frida/frida"
    },
    {
        "title": "CosmicMind/Material"
    },
    {
        "title": "ionic-team/stencil"
    },
    {
        "title": "reactioncommerce/reaction"
    },
    {
        "title": "dotnet/AspNetCore.Docs"
    },
    {
        "title": "facebook/watchman"
    },
    {
        "title": "BrowserSync/browser-sync"
    },
    {
        "title": "wilsonfreitas/awesome-quant"
    },
    {
        "title": "raysan5/raylib"
    },
    {
        "title": "twitter/twemproxy"
    },
    {
        "title": "Miserlou/Zappa"
    },
    {
        "title": "alex000kim/nsfw_data_scraper"
    },
    {
        "title": "tj/co"
    },
    {
        "title": "mobile-shell/mosh"
    },
    {
        "title": "sinatra/sinatra"
    },
    {
        "title": "1995parham/github-do-not-ban-us"
    },
    {
        "title": "postmanlabs/httpbin"
    },
    {
        "title": "jaredreich/pell"
    },
    {
        "title": "mail-in-a-box/mailinabox"
    },
    {
        "title": "firebase/functions-samples"
    },
    {
        "title": "tmuxinator/tmuxinator"
    },
    {
        "title": "karma-runner/karma"
    },
    {
        "title": "ginuerzh/gost"
    },
    {
        "title": "gopherjs/gopherjs"
    },
    {
        "title": "newTendermint/awesome-bigdata"
    },
    {
        "title": "elastic/beats"
    },
    {
        "title": "facebookresearch/detr"
    },
    {
        "title": "redis/redis-py"
    },
    {
        "title": "phobal/ivideo"
    },
    {
        "title": "davisking/dlib"
    },
    {
        "title": "junyanz/CycleGAN"
    },
    {
        "title": "h4cc/awesome-elixir"
    },
    {
        "title": "jamiebuilds/babel-handbook"
    },
    {
        "title": "phil-opp/blog_os"
    },
    {
        "title": "TGSAN/CMWTAT_Digital_Edition"
    },
    {
        "title": "idank/explainshell"
    },
    {
        "title": "donnemartin/awesome-aws"
    },
    {
        "title": "fathyb/carbonyl"
    },
    {
        "title": "alexjc/neural-enhance"
    },
    {
        "title": "GoogleChrome/workbox"
    },
    {
        "title": "aurelia/framework"
    },
    {
        "title": "mailhog/MailHog"
    },
    {
        "title": "NetEase/pomelo"
    },
    {
        "title": "LightTable/LightTable"
    }
]

for (let i = 0; i < repos.length; i++) {

    console.log(`"https://github.com/${repos[i].title}"`);

}

// console.log(repos.length)