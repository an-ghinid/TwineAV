TwineAV
=======

Audio and Video for Twine made easy

TO USE:

Make sure audio.js is in the same folder as your twine story, and your story also includes the "functions" section, as per the example story.
In the first page of your story you'll need to call <<loadJS "audio.js">> somewhere to access the appropriate code.

From there on, video can be loaded by calling <<htmlvideov1 "videoname.mp4">> which will embed a html5 video version of your mp4 in the current page of your story.

NB: COMPATIBILITY ISSUES WITH BROWSERS THAT AREN'T CHROME: if you're running firefox or IE, you'll need to make sure you're using an .ogv or .webm video instead of an mp4

Audio loading works the same way, by calling <<htmlaudiov1 "audioname.mp3">> which will autoplay the media in the background until the macro is called again with another media file.
