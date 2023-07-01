## H1, H2, H3

These tags are not different because of the the way those headings appear on the browser. You can easily change that using CSS. It is to indicate the browser which headinh is the main and which is sub.

**`<i></i>`** element tag for italic is used only to apply visual italics but **`<em></em>`** is used to put emphasis on something. Visually this might look similar in many cases but it brings huge difference to someone who is listening to the content.

Ok so, basically whatever changes we can make using these tags in html (`<em></em>, <i></i>, <strong></strong>, <b></b>`) can also be brought by CSS but they will only bring changes visually but html will bring a lot of change for someone who is listening to the content.

## Types of lists:

- unordered lists `<ul></ul>` - will give bullets
- ordered lists `<ol></ol>` - will give numbering
- definition lists `<dl></dl>` - a little more complex
  so like `<ul></ul>` and `<ol></ol>`have `<li></li>` tag inside them for each item here in definition list we have `<dt></dt>` which is the definition term and the again inside
  it we will have `<dd></dd>` which is the definition discription and we can have more than one `<dd></dd>` inside one `<dt></dt>`.

## Quotes:

We can use `<q></q>` tag to add quotes to a particular content. Instead of typing it int he content using the tag will actually make the browser add the suitable tag according to the lexical system of the region where the browser is being used.
Checkout **Block quotes** and **cite** in html!
Basically `<q>` tags is used for inline content and `<blockquote>` tag is used for block content.

## Dates and times:

Inside the time tag we can write anything and it will be printed but what value we give to the attribute **datetime** is what matters, this value has a specific machine readable format.
Check out the formats on MDN docs.
This is how we communicate time semantically and let all the computers, browsers out there can understand **WHEN**.

```
<p>The concert starts at <time datetime="2018-07-07T20:00:00">20:00</time>.</p>
```

## Code, pre and br

We use `<code> </code>` tag just like here I using backticks to convey that some content is actually code.
Now these tags won't work with html code. To print html code as content code we need to use html entity(**&lt ;**) with the code tag => `<code> &lt; <h4> </h4> </code>`.
**When you want to the spaces to count:**

- use `<br>`(requires no closing tag btw) tag to break the line.
- wrap everything in `<pre>` tags to print the content exactly with the kind of spaces you have given in the editor.

## Superscripts, subscripts and small texts

- use `<sub> </sub>` tag for suffix.
  Like => `<p>H<sub>2</sub>0<p>` will give you H2O (properly).
- same with prefix with `<sup> </sup>` (like for squared).
- Just like we use `<strong>` to emphasis that some content is very important, we can use `<small> </small> ` tag to emphasis that it's of less importance.
