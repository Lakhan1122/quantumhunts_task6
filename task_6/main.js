document.addEventListener("DOMContentLoaded", function () {
    // Get the video element
    var videoElement = videojs("merged-video");
  
    // List of videos to play
    var videoSources = [
      { src: "file1.mp4", type: "video/mp4" },
      { src: "file2.mp4", type: "video/mp4" },
    ];
  
    // Load the first video
    videoElement.src(videoSources);
  
    // Listen for "ended" event to play the next video
    videoElement.on("ended", function () {
      // Remove the event listener temporarily to prevent multiple triggers
      videoElement.off("ended");
      
      // Shift the source array to play the next video
      videoSources.shift();
      videoElement.src(videoSources);
  
      // Reattach the "ended" event listener
      videoElement.on("ended", function () {
        videoElement.src(videoSources); // Looping playback
      });
  
      // Play the new source
      videoElement.play();
    });
    
    // Start playing the video
    videoElement.play();
  });
  