## Audio

A simple `<audio src="audio.mp3">  </audio>` would just be there and do nothing.

```
<audio controls loop autoplay
       src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/birds.mp3"></audio>
```

- `controls` attribute gives the audio all the buttons to control it withput using JS and just by html.
- `loop` attribute will cause the audio to loop whenever played.
- `autoplay` attribute will make the audio play whenever the page is loaded.

```
<audio controls>
  <source
      src="http://example.com/birds.ogg"
  		type="audio/ogg; codec=opus">
	<source
      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/birds.mp3"
  		type="audio/mpeg">
  Sorry your browser doesn't not support audio.

</audio>
```

Putting sourse in the elemnt `<source>` and not using it as attribute will help us give browser more options of sources with different formats.
And that sorry statemrnt is a fall back statement which will only be visible on screen if none of the given source options were understood by the browser.

## Video:

**Codec** means a device or program that compresses data to enable faster transmission and decompresses received data.
**H.264** is widely used codec but it's not open sourse. So they charge. None of the other codecs like of image -**jpg or gif** are not chargable, html or css is alnot.

```
<video controls>
	<source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/moonwalk.480p.vp9.webm"
  				type="video/webm">
	<source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/moonwalk.480p.h264.mp4"
  				type="video/mp4">
</video>
```

Now with images we saw that we can send diff options to the browser for it to pick the best one wrt time, speed and quality constraint. But with video there is no such option. Because there is a duration associated with the video while in an image it's a one time thing. While streaming **Netflix** one might have a big HD screen with sucky internet so we might wanna send him 720p instead og 1080p but as soon as internet picks up we want to switch to better quality and that's how all streaming platforms work (using a atechnique called **adaptive bitrate streaming**).
It requires server farm of transcoding robots.
Which is why we don't use `video` element on websites. **We use embed code from video hosting service**.

## captions and subtitles :

```
<video controls>
  <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/moonwalk.480p.vp9.webm"
    type="video/webm">
  <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/moonwalk.480p.h264.mp4"
    type="video/mp4">

  <track src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/moonwalk.vtt"
         kind="captions"
         label="English"
         srclang="en"
         default>

   <track src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/moonwalk.es-la.es.vtt"
         kind="subtitles"
         label="Español"
         srclang="es">

  <p>This would be a video of a moonwalk, if your device supported playing this video.</p>
</video>
```

- The viseo player provides the functionality to turn the captions on and switch frm one kind to another.
- The `<track element> ` is the text file that contains the subtitles.
- File formats for caption's file : **webvtt** - web video text tracks. In this file you an see each line of text with the time code information that tells the video player when to see each line.
- The `kind` attribute of the track element can be given the value `description` and it will read aloud the descriptions from the track text file.
- All these make it more accessible.

## Embedding other media through Iframes :

When you go to youtube and take it's Iframe from the embed and put it on your site, there are some security aspects you need to be mindful about.
If you are usinf **CMS** (content management system) that someone else setup then it might be setup with a different way to allow URL or short code from a specifically **white labelled source**.
(White label software is a type of software bundled with your company's branding. This means it will look like it was created by your company, even though the original developer still owns the source code and architecture.)
