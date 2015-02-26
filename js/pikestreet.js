Reveal.initialize({
    progress: true,
    history: true,
    center: true,
    controls: true,
    fragments: true,

    transition: 'slide', // none/fade/slide/convex/concave/zoom

    // Optional reveal.js plugins
    dependencies: [{
        src: 'lib/js/classList.js',
        condition: function () {
            return !document.body.classList;
        }
    }, {
        src: 'plugin/markdown/marked.js',
        condition: function () {
            return !!document.querySelector('[data-markdown]');
        }
    }, {
        src: 'plugin/markdown/markdown.js',
        condition: function () {
            return !!document.querySelector('[data-markdown]');
        }
    }, {
        src: 'plugin/highlight/highlight.js',
        async: true,
        condition: function () {
            return !!document.querySelector('pre code');
        },
        callback: function () {
            hljs.initHighlightingOnLoad();
        }
    }, {
        src: 'plugin/zoom-js/zoom.js',
        async: true
    }, {
        src: 'plugin/notes/notes.js',
        async: true
    }]
});

$(document).ready(function () {
    $('video').attr('loop','loop');
})