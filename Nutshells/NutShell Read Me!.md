
# NutShell Read Me!
This is a recreation of [Nicky Case's](https://ncase.me) [Nut Shells.](https://ncase.me/nutshell/) I just made a version to use for my self because yes.

## To Use
To use, simply paste this tag:
```<script src="https://mariop-me.github.io/Nutshells/NutShellScript.js"></script>``` 
in your html, then you can make a `<nut-shell>` tag. Be sure to put `onclick='openNut(this)'` In this tag, make what ever you want the main text to be BUT *!!Make Sure There Are No Child Tags Other Than A `<nut-in></nut-in>`!!* The `<nut-in></nut-in>` tag is what will hold the hidden content you have to click to see. You can put what you please in here.

## Examples
These are some examples of what this should look like:

#### Basic
this is the ideal set up.
```
<body>
	<nut-shell onclick="openNut(this)">
		Apple <nut-in>Hello World</nut-in>
	</nut-shell>
</body>
```

#### This would Not Work
Its set up fine but it will not open when clicked, so it is not cary useful.
```
<body>
	<nut-shell>
		This Nut Shell Will Not Open <nut-in>How?</nut-in>
	</nut-shell>
</body>
```

##Uses In My Sites
---When I Use This, I Will Put Links Here To Them---
