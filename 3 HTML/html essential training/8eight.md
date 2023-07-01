## Html page :

Web works the same everytime,

- User goes to a URL.
- Hitting that URL, sends a request for an html file in that loaction.
- A server returns a single html file.
- The browser reads that html file and does whatever it says.
- It starts reading it from the top, which is why we mention all the links at the top so that it can immidiately download it first.
- The `doctype` attribute indicates which erra the html file is from.
- Wrapping everything in `<html>` tag just tells the browser that everything inside this tag is html.
- We create the `<html>` tag with the `<head>` and `<body>` tags. `<heah>` has all the data that browser need to know but is not displayed on the page and `<body>` has all the content that is diplayed on the page.

## Head :

- Earlier we talked abt informing the browser which characterset we are using, well that mention is done obviously inside the head.
- The `<title>` is also mentioned inside the `<head>` tag.
- We can also tell the browser the layout has been morphed to fit small screens, that it is a responsive website. Without this meta tag, the browser assumes the page is using an older technique for layout, that it's a desktop layout that needs to be shrunk down to fit on a phone. We do this by adding `<meta name="viewport" content = "width= device-width, initial scale=11">`
- We can also add a description of the site. This description will show up in search engine results. This is what shows up as a sentence about our site on Google search. This is where it's pulling from. `<meta name="description" content ="my website is wonderful and will help you to feel good.">`
- Mnay other things are there in the title with this meta thing.
- **Liknks** are also present here. `rel` attribute describes the kind of asset it is.
- `<script>` tag is also used in the `<head>` tag or it can be put at the end of [age also so that it loads at teh end.

## Structuring content :

`<main> <header> <footer> <section> <aside>` are the baisc tags among which the content is distributed.

- The main element wraps around the main content of the page. It's only used once per webpage, and it tells the browser, this is where the main content is.
- The header and footer elements are used to mark places on the page where the content is a header or a footer.
- Head is part of our HTML document that's never displayed to users where the metadata for the file lives. Header is used to wrap site headers, article headers, headers in the content. An article frequently starts with a title, maybe a subtitle, perhaps an author's name, publication date. That can be a header too.
- Many webpages end with a footer at the bottom, with lists of links, some copyright information, extra information about the company that would naturally be wrapped in a footer element. - Footers don't have to go to the bottom though. Many articles start out with some metadata. A list of hashtags or group of share buttons. That kind of information is actually well-suited for a footer element. The footer element conveys, hey, we have a few extra things to say about this. The fact that it might be displayed up at the top doesn't matter. It's the semantic meaning that matters, not the visual display.
- Article is wrapped around any instance of an article. It might be a long written article or blog post. Perhaps you're marking up an app and somehow each unit of the stuff is best defined as an article. The article element just means, hey, this, this by itself, this is a unit of content.
- Section is used to wrap around sections of content. If we have a long essay for instance, that's broken up into chunks with sub headlines, we can use the section element to mark each segment. Or we may have zones on our website. A section towards the top that's about one topic, and another section further down that's about something else. Section is a flexible element that means, okay, let's just start with another thing. Usually each section has its own headline marking the start of a new segment of content.
- Aside is for marking something that's off to the side. Perhaps in a side bar, or any content that's kind of not the main attraction. It could be an inset panel that goes with a big article giving additional information, but isn't quite part of the flow of the article itself. Or advertisements, they are a side thing perhaps best marked as an aside. Again, it's the semantic meaning that matters here, not the position on the page.
- Although frequently layout does convey meaning and these HTML elements are a way to transfer that meaning from the graphic design to the marked up content. The main element is used once per page to wrap around the main content on that page. The header, footer, article, section, and aside elements are the five sectioning elements in HTML. They are used together, nested inside of each other in patterns and combinations that give the content of a webpage its true structure.
