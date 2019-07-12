(function (window) {
    let timeOutId
    const html = window.document.documentElement
    const dpr = window.devicePixelRatio || 1 // 设备像素比
    const scale = 1 / dpr // 缩放比例
    function getWidth() {
        return html.getBoundingClientRect().width
    }
    const viewWidth = getWidth()// 设备宽度
    const rem = viewWidth * dpr / 10 + 'px' // 设备宽度*像素比/10  备注1
    html.style.fontSize = rem // 1rem的px数
    // 设置viewport
    const meta = document.querySelector('meta[name="viewport"]')
    const content = `width=${dpr * getWidth()},initial-scale=${scale},maximum-scale=${scale},minimum-scale=${scale},user-scalable=no`
    meta.setAttribute('content', content)
    // 绑定到window
    // 给js调用的，某一dpr下rem和px之间的转换函数
    window.rem2px = function (v) {
        v = parseFloat(v);
        return v * rem;
    };
    window.px2rem = function (v) {
        v = parseFloat(v);
        return v / rem;
    };
    window.dpr = dpr;
    window.rem = rem;
})(window)
// 设置为100的原因是某些浏览器对小于12px的字体会识别成12px

// 备注1

// 乘以dpr，是因为页面有可能为了实现1px border页面会缩放(scale) 1/dpr 倍(如果没有，dpr=1)。
// 除以10，是为了取整，方便计算(理论上可以是任何值)
// 所以就像下面这样，html的font-size可能会：
// iPhone3gs: 320px / 10 = 32px
// iPhone4/5: 320px * 2 / 10 = 64px
// iPhone6: 375px * 2 / 10 = 75px

// less 写法
// .px2rem(@name, @px){  // 只需要算出在设计稿下的rem值
//    @{name}: @px / 75 * 1rem;  // 这里的75其实是设计稿的宽度为750的情况下，750 * 1 / 10
//  }
// .box {
//    .px2rem(width, 750); 
//    .px2rem(height, 300); 
// }