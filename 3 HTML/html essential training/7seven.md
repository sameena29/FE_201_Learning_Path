## Supporting languages

So we will know later why we wrapp all aor elements in the one final `<html>` element.
Right now let's talk about the `lang` attribute inside the html tag..

- this will let the search engine in which language to list our site.
- Right dictionaries will show up for spellcheckers.
- When the content is read aloud by the browser, it will be pronounced correctly.
- `lang` is a universal attribute so you can put it on any element.
- This is helpful as you can specify different languages for different content on the same page if needed.
  The `charset` attribute like **UTF-8** basically tells the browser which set of characters, alphabets etc are going to be used in the code.

## `<div>` and `<span>`:

```
<article lang="en">
  <h1>This is the headline</h1>
  <div class="box">
    <p>The first paragraph.</p>
    <p>Some text in a second paragraph.</p>
    <p>Third paragraph. <span lang="es" class="bilingual">Esta oración está en español.</span> Some of this text is in another language.</p>
    <p>Fourth paragraph.</p>
  </div>
</article>
```

`<div>` is a block level element.
`<span>` is an inline element.
Use them that way only because the html won't throw an error if you interchange them but it hurts a lot users.
As we have understood the importance of semantic html, we should use the relavant elemnts i=only.
**What are the best uses for HTML's `div` and `span` elements?**
=>To group elements, or mark text within an element.
The div and span elements make it easy to create containers or labeled content for styling.
