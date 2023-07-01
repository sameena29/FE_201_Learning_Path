## Links :

` <a href = "" > click me </a>`
href stands for hypertext reference.

## URl paths :

**How to make links of your website **

- We ahve a directory which keeps all our files of the project in an organised way.
- Now lets say my links is something like:
  blog/march-9,html => this means I will find something called blog on the parent level of the directory.
- There is a "/" after blog whoch means blog is a folder, ptherwose it would have some extension like blog,html, blog.js...so on.
- Ex: `../images/logo.gif` 0r `/images/logo.gif`
  Both are same btw. This means that go up a level from wherever you are (basically exit the directory and go up a level) and there you will an images directory and inside it there is logo.gif which you have to access.
- One more interesting thing to remember is that whenever you end an URL at a folder like : `https://awesomedogs.com/people/` now what this will do is, it will pick **index.html** file it can find in the people's folder.
  Index.html is a special file name.

## Navigation:

Using the `<nav> </nav>` tag will let the browser know that this list of items present in this nav tag are the main links to navigate between different pages of the website.
`<nav role="navigation" aria-label="main menu" </nav>`
Here naviagation is an aria role which willl mark the main navigation of the page and label is gonna make the screen reader read aloud the label "main-menu".

## Your work

- Find out what is relative URL.
- When might we use a relative URL instead of an absolute URL?
  Ans : When a website might be moved from a staging server to a production server
