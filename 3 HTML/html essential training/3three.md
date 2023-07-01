## Atributes

- **Classes** can have same names, so when u make in changes for that classname in CSS then it will be applicable to all the elements with that class names.
- **Id's** need to be unique.
- **contenteditable** is an attribite that can be used to provide user with the chance to edit content on a webpage.
  `<blockquote contenteditable = true> </blockquote>`
  Though on refreshing, it will go back to it's default content. (to retain it we need to use js obviously).
- **lang** attribite is to specify the language.
- **dir** atttribute is to specify the direction of the language like:
  `<p dir="ltr"> something something </p>`
  ltr is left to right and "rtl" is righ to left.

## ARIA roles

It's a vast topics, and to understand how and why to use this attribute we need to understand how a webpage is read or understood by disabled people.
So what happens is, the browser takes all the html and creates a dom tree and then an imaginary accessibility agent creates an accessibility tree using this dom tree.
Consider an example:
You have gotten too creative and are using two many elements and splitting a simple heading ""hello world" into multiple pieces of content....please see thos video(I am tired).

## Formatting

- One interesting thing is that html tags with small lengths like `<p>` were this small because back in the 90's the computer hard drives had very small memory arround 20MB. But now we have tags like `<video>` and `<image>`
- Closing tags: to use them or not to use them is your choice.
- Obviously as you know for some tags ypu have to and for some newer tags you can just use a backslash at the end or not.
  Browser will support all.

## Weird characyers

I mentioned earlier somewhere about html entities, entities are used when we have to use certain html characters like <, >, & ect as content.
`&lt;` = <
`&gt;` = >
`&amp;` = &
There are entities for special symbols too. Just google the list.
One more example: `<p> Hi my name is Sameena&nbsp; Shaik</p>`
Now this entity `&nbsp;` "non breaking space" will make sure that line never breakes after my firstname. My first name and last name will stay together.
