videojs.registerPlugin('ccSeekFix', function () {
  this.on('playing', function () {
    console.log('ccSeekFix playing', this.techName_);
    if (!this.tech_.setScrubbing) {
      console.log('fix missing setScrubbing function');
      this.tech_.setScrubbing = function (isScrubbing) {
        console.log('setScrubbing called', isScrubbing);
        this.isScrubbing_ = isScrubbing;
      }.bind(this);
    }
  }.bind(this));
});
