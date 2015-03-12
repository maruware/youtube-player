;(function(global){

  var createYTPlayer = function(elem_id, param){
    return new Promise(function(resolve, reject){

      // set player ready callback
      var _onYouTubeIframeAPIReady = "onYouTubeIframeAPIReady" in window ? window.onYouTubeIframeAPIReady : undefined;
      window.onYouTubeIframeAPIReady = function(){
        if( _onYouTubeIframeAPIReady ){
          _onYouTubeIframeAPIReady();
        }
        window.onYouTubeIframeAPIReady = _onYouTubeIframeAPIReady;

        var _param = {};
        if( !("videoId" in param) ){
          reject("videoId is undefined");
        }
        _param.videoId = param.videoId;
        _param.width = param.width ? param.width : '640';
        _param.height = param.height ? param.height : '390';

        if( "playerVars" in param ){
          _param.playerVars = param.playerVars;
        }
        if( "events" in param ){
          _param.events = param.events;
        }

        var player = new YT.Player(elem_id, _param);
        resolve(player);
      };

      // load the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    });

  };

  global.createYTPlayer = createYTPlayer;
})(window);

