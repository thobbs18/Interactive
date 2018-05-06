(function () {
'use strict';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function es5() {
  return parseInt('010', 10) === 10 && function () {
    return !this;
  }() && !!(Date && Date.prototype && Date.prototype.toISOString);
}
var log = {
  debug: true,
  trace: function trace(message) {
    if (window.console && this.debug) {
      window.console.log(message);
    }
  }
};





var domUtils = {
  getAllIdElements: function getAllIdElements() {
    var scope = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;

    var items = scope.getElementsByTagName('*');
    var elements = [];
    for (var i = items.length; i--;) {
      if (items[i].hasAttribute('id')) {
        elements.push(items[i]);
      }
    }
    return elements;
  },
  varName: function varName(id, camel) {
    var newname = void 0;
    camel ? newname = id.replace(/[-_]([a-z])/g, function (g) {
      return g[1].toUpperCase();
    }).replace(/[-_]/g, '') : newname = id.replace(/-/g, '_');
    return newname;
  },
  getAllIds: function getAllIds() {
    var scope = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
    var trace = arguments[1];
    var camel = arguments[2];

    var items = scope.getElementsByTagName('*');
    var ids = [];
    var varlist = '\nfunction getEl(id){\n    return document.getElementById(id);\n}\nvar ';
    var len = items.length;
    for (var i = 0; i < len; i++) {
      if (items[i].hasAttribute('id')) {
        ids.push(items[i].id);
        if (trace) {
          varlist += this.varName(items[i].id, camel) + ' = getEl(\'' + items[i].id + '\')';
          if (i > -1) {
            varlist += ',\n    ';
          }
        }
      }
    }
    if (trace) {
      varlist = varlist.replace(/,\s([^,]+)$/, '; $1\n\n');
      log.trace(varlist);
    }
    return ids;
  },
  makeVarsFromIds: function makeVarsFromIds() {
    var scope = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
    var camel = arguments[1];

    var ids = this.getAllIds(scope);
    var i = ids.length;
    var elements = {};
    while (i--) {
      elements[this.varName(ids[i], camel)] = document.getElementById(ids[i]);
    }
    return elements;
  },
  recordClasses: function recordClasses() {
    var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getAllIdElements(document);

    var i = elements.length;
    while (i--) {
      elements[i].cl = '';
      elements[i].cl += elements[i].className;
    }
  },
  resetClasses: function resetClasses() {
    var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getAllIdElements(document);
    var callback = arguments[1];

    var i = elements.length;
    while (i--) {
      if (typeof elements[i].cl !== 'undefined') {
        elements[i].className = elements[i].cl;
      } else {
        this.trace('initial state not recorded for: ' + elements[i].id);
      }
    }
    if (callback) {
      var dly = elements.length * 10;
      setTimeout(function () {
        callback.apply();
      }, dly);
    }
  }
};

var particleList;
var animationTime = 20;
var imgSrc = 'petal.png';

function particlesInit() {
  var i;
  var numParticles = 50;
  var tempParticle;
  var tempDiv;
  var adDiv;
  var tempScale;
  var tempVX;
  var tempVY;
  var tempVR;
  var startX;
  var startY;
  var tempRotation;

  var tempImage;
  var horizontalBasePosition = 10;
  var maxAdditiveHorizonalDistance = 80;
  var verticalCenter = 130;
  var verticalSpread = 120;
  var baseHorizontalSpeed = .6;
  var maxAdditiveHorizontalSpeed = .8;
  var baseVerticalSpeed = -.2;
  var maxAdditiveVerticalSpeed = -.2;

  particleList = [];

  for (i = 0; i < numParticles; i++) {
    adDiv = document.getElementById('petals');
    tempDiv = document.createElement('div');
    tempImage = new Image(20, 20);
    tempImage.src = imgSrc;
    tempDiv.appendChild(tempImage);
    tempDiv.id = 'temp' + i;
    tempDiv.style.height = 10;
    tempDiv.style.width = 10;

    tempDiv.style.position = 'absolute';

    tempScale = 0.8 + Math.random() * .5;
    tempVX = baseHorizontalSpeed + Math.random() * maxAdditiveHorizontalSpeed;
    tempVY = baseVerticalSpeed + Math.random() * maxAdditiveVerticalSpeed;
    startX = horizontalBasePosition + Math.random() * maxAdditiveHorizonalDistance;
    startY = verticalCenter + (-1 * (verticalSpread * .5) + Math.random() * verticalSpread);

    tempVR = Math.random() * 2;
    tempRotation = Math.random() * 360;

    tempParticle = new Particle(tempDiv, startX, startY, tempRotation, tempScale, tempVX, tempVY, tempVR);
    particleList.push(tempParticle);

    adDiv.appendChild(tempDiv);
  }

  updateParticles();
}

function updateParticles() {

  var i;
  var numParticles = particleList ? particleList.length : 0;
  var tempParticle;

  for (i = 0; i < numParticles; i++) {
    tempParticle = particleList[i];

    tempParticle.xPos = -tempParticle.vx * animationTime * 30;
    tempParticle.yPos = tempParticle.vy * animationTime * 30;
    tempParticle.r = tempParticle.vr * animationTime * 30;

    TweenMax.to(tempParticle, animationTime, { x: '-=' + tempParticle.xPos, y: '+=' + tempParticle.yPos, rotation: tempParticle.r });
  }
}

var Particle = function () {
  function Particle(target, x, y, rotation, scale, vx, vy, vr) {
    classCallCheck(this, Particle);

    this._target = target;
    this.x = x;
    this.y = y;
    this.rotation = rotation;
    this.vx = vx;
    this.vy = vy;
    this.vr = vr;
    this.scale = scale;

    if (this._target) {
      this._target.style.rotationPoint = '50% 50%';
    }

    this.updateTransform();
  }

  createClass(Particle, [{
    key: 'updateTransform',
    value: function updateTransform() {
      if (this._target) {
        var val = 'scale(' + this._scale + ',' + this._scale + ')' + 'rotate(' + this._rotation + 'deg)';
        this._target.style.transform = val;
      }
    }
  }, {
    key: 'x',
    get: function get$$1() {
      return this._x;
    },
    set: function set$$1(val) {
      this._x = val;
      this._target.style.left = val;
    }
  }, {
    key: 'y',
    get: function get$$1() {
      return this._y;
    },
    set: function set$$1(val) {
      this._y = val;
      this._target.style.top = val;
    }
  }, {
    key: 'rotation',
    get: function get$$1() {
      return this._rotation;
    },
    set: function set$$1(val) {
      this._rotation = val;
      this.updateTransform();
    }
  }, {
    key: 'scale',
    get: function get$$1() {
      return this._scale;
    },
    set: function set$$1(val) {
      this._scale = val;
      this.updateTransform();
    }
  }, {
    key: 'vx',
    get: function get$$1() {
      return this._vx;
    },
    set: function set$$1(val) {
      this._vx = val;
    }
  }, {
    key: 'vy',
    get: function get$$1() {
      return this._vy;
    },
    set: function set$$1(val) {
      this._vy = val;
    }
  }, {
    key: 'vr',
    get: function get$$1() {
      return this._vr;
    },
    set: function set$$1(val) {
      this._vr = val;
    }
  }, {
    key: 'target',
    get: function get$$1() {
      return this._target;
    },
    set: function set$$1(val) {
      this._target = val;
    }
  }]);
  return Particle;
}();

var Banner = {

  init: function init() {

    'use strict';

    var dom = domUtils.makeVarsFromIds();


    function frameStart() {
      if (es5()) {

        var img = new Image();

        img.onload = function () {
          frame0();
        };

        img.src = imgSrc;
      } else {
        document.getElementById('backup').className = 'backup';
      }
    }

    function frame0() {

      dom.ad_content.classList.toggle('invisible');
      var tl = new TimelineMax();

      tl.staggerFrom(['#head1', '#device'], 1, { autoAlpha: 0 }, 1).from('#next_over', .1, { autoAlpha: 0 }, '+=1').to("#img1_ui", .5, { autoAlpha: 0 }, "+=.3").from("#load", 2, { drawSVG: "  0%" }).set("#load", { autoAlpha: 0 }).set("#circ_load_w", { autoAlpha: 1 }).to("#circ_load", .3, { scale: .7, repeat: 1, yoyo: true, ease: Power0.easeNone }).to("#man", .3, { scale: 1.1, autoalpha: 0 }, '-=.3').from('#img2', .5, { autoAlpha: 0 }, '-=.1').from('#img2_ui', .5, { scale: .9, autoAlpha: 0, force3D: false }, "-=0").to(['#head1', '#logo'], .2, { autoAlpha: 0 }).from('#head2', 2, { autoAlpha: 0 }).staggerTo(['#head2', '#device'], .2, { autoAlpha: 0 }, .1, '+=.5').to('#logo', 2, { autoAlpha: 1 }).staggerFrom(['#head_ef', '#cta'], 2, { autoAlpha: 0, force3D: false }, .5, '-=2').add(enableRollOver, '-=1.5').from('#ef_device_1', 1, { x: '+=10', autoAlpha: 0, force3D: false }, '-=2').from('#ef_device_2', 1, { x: '-=10', autoAlpha: 0, force3D: false }, '-=2').add(particlesInit, '-=2').from('#petal1', 6, { x: '-=50', y: '+=50', rotation: 12, force3D: false }, '-=3').from('#petal2', 4, { x: '-=25', y: '+=200', rotation: -25, force3D: false }, '-=4').from('#petal3', 5, { x: '-=50', y: '+=100', rotation: 25, force3D: false }, '-=4');
    }

    function enableRollOver() {
      dom.ad_content.addEventListener('mouseenter', ctaOver);
      dom.ad_content.addEventListener('mouseleave', ctaOut);
    }

    function onAdClick() {
      window.open(window.clickTag || window.clickTAG);
    }

    function ctaOver() {
      TweenMax.set('#cta_over', { autoAlpha: 1 });
      TweenMax.set('#cta_up', { autoAlpha: 0 });
    }

    function ctaOut() {
      TweenMax.set('#cta_over', { autoAlpha: 0 });
      TweenMax.set('#cta_up', { autoAlpha: 1 });
    }

    function adClickThru() {
      dom.ad_content.addEventListener('click', onAdClick);
    }

    adClickThru();
    frameStart();
  }
};

window.onload = function () {
  Banner.init();
};

}());
