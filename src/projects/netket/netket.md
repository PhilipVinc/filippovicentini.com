---
title: NetKet
image: logo.png
description: "Develop Software for Researchers."
featured: true
featuredImage: colors.jpg
featuredImageColor: "#77309A"
---

<p class="lead">Last year, the design gods decided that dark modes were the new hotness. "Light colors are for suckers", they laughed, drinking matcha tea on their fixie bikes or whatever.</p>

And so every operating system, app and even some websites (mine included) suddenly had to come up with a dark mode. Fortunately though, this coincided nicely with widespread support for CSS [custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) and the introduction of a new `prefers-color-scheme` media query.

There's lots of tutorials on [how to build dark modes](https://css-tricks.com/dark-modes-with-css/) already, but why limit yourself to light and dark? Only a Sith deals in absolutes. 

That's why I decided to build a new feature on my site: 
__dynamic color themes!__ Yes, instead of two color schemes, I now have ten! That's eight (8) better!

Go ahead and try it, hit that __paintroller-button__ in the header. 
I'll wait.

*If you're reading this somewhere else, the effect would look something like this:*

<div class="extend">
  <video poster="https://res.cloudinary.com/mxb/image/upload/v1620053481/theme-switcher-still_tq9zv2.png" width="752" height="452" preload="metadata" style="border: 1px solid var(--color-border)" muted controls>
    <source src="https://res.cloudinary.com/mxb/video/upload/q_auto/v1620053481/theme-switcher_q2nt7u.webm" type="video/webm" />
    <source src="https://res.cloudinary.com/mxb/video/upload/q_auto/v1620053491/theme-switcher_h9ehlj.mov" type="video/mp4" />
  </video>
</div>

Nice, right? Let's look at how to do that!
