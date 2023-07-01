## Images :

If we don't give height and width attribute to the img tag then the browser will have ti download the image and figure out the size by looking at the characterstics of the image and then produce it on the page.
But if we provide the size already then it will give the browser a split second of headstart.
(Sometimes you might have noticed content moving here and there when opening a website and the images are being loaded.)

## Which image format to use?

**OBJECTIVE :** High quality + small file size.
Just find out which format is better for you usecase.

## Responsive images

How to choose images which will look good on devices of any size.
=> We can send different images to different devices by creating and keeping images in different resolutions and put them in the html and let the browser decide which one to send according to the screen density, network connection and user settings.
We can give these options by using `srcset` attribute inside the `<img>` tag.

```
<img src="/wp-content/uploads/flamingo-fallback.jpg"
alt= "flamingo bird" height=360 width 480

srcset=" /wp-content/uploads/flamingo4x.jpg 4x, /wp-content/uploads/flamingo3x.jpg 3x,
/wp-content/uploads/flamingo2x.jpg 2x,
/wp-content/uploads/flamingo1x.jpg 1x " >.
```

## Responsive width

```
<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog-480.jpg"
alt="shiny black dog looking pensive"
width="480" height="360"
srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog-480.jpg  480w,
https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog-960.jpg  960w,
https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog-1440.jpg 1440w,
https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog-1920.jpg 1920w"
>
```

## Responsive images

Till now we made the browser choose between different sizes of the same image (same img with diff no. of pixels ). Only the aspect ratio changed.
But what if we want the image to be cropped according to the screen size.
Like if smaller screen then keep the face and get rid of the background.

```
<picture>
  <source media="(min-width:600px)"
          srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-320.jpg  320w,
                  https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-480.jpg  480w,
                  https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-720.jpg  720w,
                  https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-960.jpg  960w,
                  https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-1440.jpg 1440w,
                  https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-1920.jpg 1920w" >
  <source srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-cropped-320.jpg 320w,
                  https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-cropped-480.jpg 480w,
                  https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-cropped-720.jpg 720w,
                  https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-cropped-960.jpg 960w" >
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-480.jpg"
       alt="smiling black dog"
       height="360px" width="480px">
</picture>
```

Basically what we did is :

- We gave computer an img tag with it's source and alt and width and height.
- In the last 2 videos we saw how we can provide the browser with different size options of the same image and now we can do this and alsomask the browser to crop the photo at a certain limit.
- in the code snippet above the, the browser will choose among the first set of options until the screen width is 600 px.
- And below 600px, it will choose frm the second srcset.
- And if you do all this and then keep changing the screen size from it's min to max then the browser will download all the options and we loose the purpose of doing all this.

## Figure caption:

```
<figure>
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/maggie2.png" width="960" height="720" alt="shiny black dog in the sun">

  <figcaption>Maggie the dog enjoys resting in a field, after a long day of chasing squirrels.</figcaption>
</figure>
```

Wrapping this whole thing in figure and using `<figcaption>` element will provide the browser with more semantic information about this content than using generic `<p>` or `<div>` tags. The browser will now know they are related.

## Summary

- What do you need to change to move from a resolution-based srcset to a width-based srcset?
  => Provide pixel measurements (w) instead of 1x, 2x, etc.
- Why should you include the height and width specifications for all images?
  => To make the page layout more efficient
- Why would you want to use the `w` specification in `srcset` instead of the `x` specification ?
  => to consider both display density and window width when choosing the image source
- What do you need to change to move from a resolution-based srcset to a width-based srcset?
  => Provide pixel measurements (w) instead of 1x, 2x, etc.
