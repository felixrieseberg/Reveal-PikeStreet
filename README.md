# 'Pike Street' Theme for Reveal.js
This is a fancy Microsoft theme for Reveal.js. It's mostly used by Microsoft DX's Open Source Engineers, but we wouldn't exactly be great open source engineers if we didn't let you use our theme. We think it looks pretty good. Especially cool: Video backgrounds! Live Code Editors! This repo already contains reveal.js, mostly because we're lazy. **You can see an example presentation [here](http://felixrieseberg.github.io/Reveal-PikeStreet/#/).**

The theme uses Segoe UI and Segoe UI Light, falling back to the very similar Open Sans if these fonts aren't available. If you want to make things interesting, the theme also supports an 'accent' script font (which isn't used unless explicitly specified).

![Screenshot](https://raw.githubusercontent.com/felixrieseberg/Reveal-PikeStreet/gh-pages/screens/screen1.png) ![Screenshot](https://raw.githubusercontent.com/felixrieseberg/Reveal-PikeStreet/gh-pages/screens/screen2.png)

**To get started, just open up `index.html` and edit the slides. Every `<section>` is a slide.**

* [Markdown](#markdown)
* [Stock Pictures & Patterns](#stock-pictures)
* [Code Highlighter & Editor](#codeedit)
* [Speaker Notes](#speaker-notes)
* [Disabling the Controls](#disabling-the-controls)

## Features and Hints

### Markdown
Reveal.js is capable of creating a presentation directly from Markdown, either from an external file or by writing your slide directly in Markdown. 

```
<section data-markdown>
    <script type="text/template">
        ## Page title

        A paragraph with some text and a [link](http://hakim.se).
    </script>
</section>
```

#### External Markdown
The files `index_markdown.html` and `presentation.md` showcase how to do use an external file. There is one limitation: External markdown files are only supported if served from any kind of web server. If you install all development dependencies for this project, `grunt serve` will be one of those servers - alternatively, you should know that Python enables you to always start a small http server in any directory by calling `python -m SimpleHTTPServer` (Python 2.7) or `python -m http.server` (Python 3+). 

### Stock Pictures
I recommend the following sites for some nice stock pictures. All of them are zero-licensed, meaning that you can do whatever you want with the pictures (including using them in a presentation). Patterns are a bit more difficult to find, but I recommend [The Pattern Library](http://thepatternlibrary.com/).

* [Little Visuals](http://littlevisuals.co/)
* [Unsplash](http://unsplash.com/)
* [Death to the Stock Photo](http://join.deathtothestockphoto.com/)
* [New Old Stock](http://nos.twnsnd.co/)
* [Picjumbo](http://picjumbo.com/)
* [Gratisography](http://www.gratisography.com/)
* [Getrefe](http://getrefe.tumblr.com/)
* [Jay Mantri](http://jaymantri.com/)
* [Magdeleine](http://magdeleine.co/)
* [Picography](http://picography.co/)
* [Raumrot](http://www.raumrot.com/10/)
* [ISO Republic](http://isorepublic.com/)

### Code Highlighter & Editor <a name="codeedit"></a>
Highlighting is provided by Highlight.js. Included are three popular color schemes (Visual Studio, Zenburn, and GitHub), [but more styles are available online](https://highlightjs.org/static/demo/). To change the used CSS file, open up `index.html` and change the stylesheet in line 21 from `github.css` to `visualstudio.css`, `zenburn.css` or whatever Hightlight.js theme you put into `/lib/css`.

### Make Code Editable
You know what's really cool? Casually clicking into your code and changing a few things. By default, adding the attribute `contenteditable` to your code block makes it automatically editable.

```
<pre>
    <code data-trim contenteditable>
var hi = "I'm some code!";
    </code>
</pre>
```

If you want to be really cool and run the code you just entered, you can either go with a custom solution - alternatively, you can use online code editors. A normal `iframe` will work, but so will embedded components. For example, this slide shows how to code and run TypeScript from within the presentation.

### Speaker Notes
reveal.js comes with a speaker notes plugin which can be used to present per-slide notes in a separate browser window. The notes window also gives you a preview of the next upcoming slide so it may be helpful even if you haven't written any notes. Press the 's' key on your keyboard to open the notes window.

Notes are defined by appending an `<aside>` element to a slide as seen below. You can add the data-markdown attribute to the aside element if you prefer writing notes using Markdown. When used locally, this feature requires that reveal.js runs from a local web server.

```
<section>
    <h2>Some Slide</h2>

    <aside class="notes">
        Oh hey, these are some notes. They'll be hidden in your presentation, but you can see them if you open the speaker notes window (hit 's' on your keyboard).
    </aside>
</section>
```

If you're using the external Markdown feature, you can add notes by just writing `Note:`.

```
# Title
## Sub-title

Here is some content...

Note:
This will only display in the notes window.
```

### Disabling the Controls
Go into `js/pikestreet.js` and set `controls` to `false` (line 5).

## Development
On Unix systems, simply calling `npm install` installs all required development dependencies to mess with the code (more information can be found at [reveal.js](https://github.com/hakimel/reveal.js/#installation). On Windows, installation is made a bit more difficult - one of the required modules, `node-sass`, requires compilation with Visual Studio 2013. Install Visual Studio 2013 and run `npm install --msvs_version=2013`.

## License
MIT licensed, Copyright (C) 2015 [Felix Rieseberg](http://www.felixrieseberg.com). For more details, see LICENSE.md.
