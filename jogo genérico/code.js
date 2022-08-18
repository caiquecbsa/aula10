var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["bbbe0766-2131-47e2-b12b-2279154ceb37","79516ca7-22f9-4541-a84c-7ab73dd45e12","fb4f5330-4ea9-4c96-a4c9-f6a1fa230118","61798673-7961-4fba-b468-5c0d5be05cfa","0f96f0cc-595c-40d0-b4a9-fc45fc50eb37","82c4bbf1-53e5-4f9c-8f96-45b0d697fea1","82dc7035-8138-4fc9-8a39-e0373398679a","867ceacc-51a9-4581-83d0-0d95ca4737a6","4383d901-f876-4c2b-bd8e-7486f96bf873"],"propsByKey":{"bbbe0766-2131-47e2-b12b-2279154ceb37":{"name":"fundo","sourceUrl":"assets/api/v1/animation-library/gamelab/OGMmhuYDozWZhjtNHQkjhdvs2Ge_Q0UF/category_backgrounds/city.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"OGMmhuYDozWZhjtNHQkjhdvs2Ge_Q0UF","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/OGMmhuYDozWZhjtNHQkjhdvs2Ge_Q0UF/category_backgrounds/city.png"},"79516ca7-22f9-4541-a84c-7ab73dd45e12":{"name":"robod","sourceUrl":null,"frameSize":{"x":122,"y":161},"frameCount":2,"looping":true,"frameDelay":3,"version":"bgQy0TW1LM17m6.8lmPHEgzeVxPhSGa6","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":244,"y":161},"rootRelativePath":"assets/79516ca7-22f9-4541-a84c-7ab73dd45e12.png"},"fb4f5330-4ea9-4c96-a4c9-f6a1fa230118":{"name":"roboe","sourceUrl":null,"frameSize":{"x":122,"y":161},"frameCount":2,"looping":true,"frameDelay":3,"version":"9Tq5udaD2njAMAz8GUf2zov7w3iC_e.4","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":244,"y":161},"rootRelativePath":"assets/fb4f5330-4ea9-4c96-a4c9-f6a1fa230118.png"},"61798673-7961-4fba-b468-5c0d5be05cfa":{"name":"bateria","sourceUrl":null,"frameSize":{"x":321,"y":304},"frameCount":1,"looping":true,"frameDelay":12,"version":"aEfWJpWUJ8QJgQq6XhJ4m5QI1uxfhP2e","loadedFromSource":true,"saved":true,"sourceSize":{"x":321,"y":304},"rootRelativePath":"assets/61798673-7961-4fba-b468-5c0d5be05cfa.png"},"0f96f0cc-595c-40d0-b4a9-fc45fc50eb37":{"name":"tiro","sourceUrl":null,"frameSize":{"x":321,"y":304},"frameCount":1,"looping":true,"frameDelay":12,"version":"3fXcfFZD4wVnCVG8F5lFakWhClmI0R8B","loadedFromSource":true,"saved":true,"sourceSize":{"x":321,"y":304},"rootRelativePath":"assets/0f96f0cc-595c-40d0-b4a9-fc45fc50eb37.png"},"82c4bbf1-53e5-4f9c-8f96-45b0d697fea1":{"name":"tiro1","sourceUrl":null,"frameSize":{"x":321,"y":304},"frameCount":1,"looping":true,"frameDelay":12,"version":"NcFFZh4SGBYuCv_bxrWQHixEr5FN.fJM","loadedFromSource":true,"saved":true,"sourceSize":{"x":321,"y":304},"rootRelativePath":"assets/82c4bbf1-53e5-4f9c-8f96-45b0d697fea1.png"},"82dc7035-8138-4fc9-8a39-e0373398679a":{"name":"tiro2","sourceUrl":null,"frameSize":{"x":321,"y":304},"frameCount":1,"looping":true,"frameDelay":12,"version":"DQ17HtEm_4.kjq00Rc_UM7H7KSMkVcGN","loadedFromSource":true,"saved":true,"sourceSize":{"x":321,"y":304},"rootRelativePath":"assets/82dc7035-8138-4fc9-8a39-e0373398679a.png"},"867ceacc-51a9-4581-83d0-0d95ca4737a6":{"name":"inimigo","sourceUrl":null,"frameSize":{"x":124,"y":141},"frameCount":2,"looping":true,"frameDelay":4,"version":"ydVZKrm0BwlZ3yYtmabCtBIyYEAuEFtp","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":248,"y":141},"rootRelativePath":"assets/867ceacc-51a9-4581-83d0-0d95ca4737a6.png"},"4383d901-f876-4c2b-bd8e-7486f96bf873":{"name":"chão","sourceUrl":"assets/api/v1/animation-library/gamelab/bzBzwUgBEeqWUbNBmcmnl1egMrpmBw3o/category_backgrounds/continuous_grass.png","frameSize":{"x":800,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"bzBzwUgBEeqWUbNBmcmnl1egMrpmBw3o","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/bzBzwUgBEeqWUbNBmcmnl1egMrpmBw3o/category_backgrounds/continuous_grass.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var fundo = createSprite(200, 200, 1000, 1000);
var robo = createSprite(25, 345, 5, 5);
var bloco = createSprite(400, 350, 40, 40);
var inimigo = createSprite(300, 345, 5, 5);

stroke("blue");
fill("blue");
textSize(25);
text("turururururururtu", 120, 200);
bloco.shapeColor = "yellow";
fundo.setAnimation("fundo");
robo.setAnimation("robod");

bloco.setAnimation("bateria");
inimigo.setAnimation("inimigo");

robo.scale = 0.50;
bloco.scale = 0.30;
inimigo.scale = 0.60;

playSound("assets/category_background/repitition.mp3", true);

function draw() {
  createEdgeSprites();
  if (keyDown("d")) {
    robo.x = robo.x + 7;
    robo.setAnimation("robod");
  }
  if (keyDown("a")) {
    robo.x = robo.x - 7;
    robo.setAnimation("roboe");
  }
  if (robo.isTouching(bloco)) {
    playSound("assets/category_collect/retro_game_classic_power_up_4.mp3", false);
    robo.scale = 0.75;
    bloco.destroy();
    robo.x = robo.x + 3;
    robo.x = robo.x - 3;
  }
  if (keyDown("right")) {
   var tiro = createSprite(100, 345, 50, 5);
   tiro.velocityX = 15;
   tiro.x=robo.x;
   tiro.setAnimation("tiro");
   tiro.scale = 0.30;
   if (tiro.isTouching(inimigo)) {
     inimigo.destroy();
   }
   }
   if (keyDown("left")) {
   var tiro = createSprite(100, 345, 50, 5);
   tiro.velocityX = -15;
   tiro.x=robo.x;
   tiro.setAnimation("tiro2");
   tiro.scale = 0.30;
   if (tiro.isTouching(inimigo)) {
     inimigo.destroy();
   }
   }
  if (keyDown("up")|| keyDown("down")) {
   var tiro = createSprite(100, 345, 50, 5);
   tiro.velocityY = -15;
   tiro.x=robo.x;
   tiro.setAnimation("tiro1");
   tiro.scale = 0.30;
   if (tiro.isTouching(inimigo)) {
     inimigo.destroy();
   }
   }
  if (robo.isTouching(inimigo)) {
    robo.destroy();
    playSound("assets/category_explosion/melodic_loss_1.mp3", false);
  }
  robo.collide(topEdge);
  robo.collide(rightEdge);
  robo.collide(leftEdge);
  robo.collide(bloco);
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
