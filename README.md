# 'Pike Street' Theme for Reveal.js
This is a fancy Microsoft theme for Reveal.js. It's mostly used by Microsoft DX's Open Source Engineers, but we wouldn't exactly be great open source engineers if we didn't let you use our theme. We think it looks pretty good. This repo already contains reveal.js, mostly because we're lazy.

* [Markdown](#markdown)
* [Stock Pictures & Patterns](#stockpics)
* [Code Highlighter & Editor](#codeedit)

## Features and Hints

### Markdown
Reveal.js is capable of creating a presentation directly from Markdown. 

### Stock Pictures & Patterns<a name="stockpics"></a>
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

## Development

## License
MIT licensed, Copyright (C) 2015 [Felix Rieseberg](http://www.felixrieseberg.com). For more details, see LICENSE.md.
