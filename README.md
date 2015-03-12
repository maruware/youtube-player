# youtube-player

This is wrapper of YouTube Player API.  
(about YouTube Player API https://developers.google.com/youtube/js_api_reference)

## How to use

```js
createYTPlayer('player-container' {
  width: '640',
  height: '390',
  playerVars: { 'controls': 0 },
  videoId: 'M7lc1UVf-VE',
  events: {
    'onReady': function(e){
      console.log('onReady');
    },
    'onStateChange': function(e){
      console.log('onStateChange');
    }
  }
})
.then(
  function(player){
    console.log(player);
  },
  function(err){
    console.error(err);
  }
);
```