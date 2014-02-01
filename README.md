## ourtunes

Roll your music player in a few minutes, with single command.

Example Sites: [anarko.org](http://anarko.org) [gezitunes.org](http://gezitunes.org) [leylatunes.org](http://leylatunes.org)

## Howto

Install it first:

```bash
$ npm install -g ourtunes
```

And create a YAML file like following:

```yaml
title: birthday mixtape
image: https://i.cloudup.com/zL8MU94GNp.jpg

maya: http://tayfabandista.org/player/maya.mp3
toprak ana: http://www.youtube.com/watch?v=hPP2hAWvntA
birinci rollama: http://tayfabandista.org/su_anda_simdi/birinci_rollama.mp3
zaman: http://www.youtube.com/watch?v=RrGjK28-2TY
gavur imam isyani: http://tayfabandista.org/dikkat_askersiz_bolge/player/gavur_imam_isyani.mp3
```

Now build the app:

```bash
$ ourtunes mixtape.json
```

This command will create a directory called "mixtape" that has an HTML, JavaScript and CSS file:

```bash
$ ls mixtape/
index.html
mixtape.js
mixtape.css
```

You can open the index.html file with any web browser, and serve from a hosting service in with your own domain.

**Cheers!**

## Tips & Tricks

You can add mixtapes SoundCloud urls, too. First get an API key and add it on top of the document like below:

```yaml
```yaml
title: birthday mixtape
image: https://i.cloudup.com/zL8MU94GNp.jpg
soundcloud: api-key-here

bul karayi: https://soundcloud.com/veyasin/mode-xl-bul-karayi
merhaba: https://soundcloud.com/sacmalamaca2/saykan-merhaba-2014
```


