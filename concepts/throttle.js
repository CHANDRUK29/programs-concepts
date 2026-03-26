function throttle(fn, delay) {
    let lastcall = 0;

    return function (...args) {
        let now = Date.now();

        if (now - lastcall >= delay) {
            lastcall = now;
            fn.apply(this, args)
        }
    }
}


function logScroll() {
  console.log("Scroll event");
}

const throttledScroll = throttle(logScroll, 1000);

// window.addEventListener("scroll", throttledScroll);