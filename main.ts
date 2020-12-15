controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        3 3 3 3 3 3 3 3 
        3 . . . . . . 3 
        3 . 3 3 3 3 . 3 
        3 . 3 . . 3 . 3 
        3 . 3 . . 3 . 3 
        3 . 3 3 3 3 . 3 
        3 . . . . . . 3 
        3 3 3 3 3 3 3 3 
        `, mySprite, 0, -70)
    projectile.startEffect(effects.fire)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    mySprite.destroy()
    info.changeLifeBy(-1)
})
let myEnemy: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . . . 2 2 2 2 2 e . . . . . . 
    . . . 2 2 2 2 d 2 2 e . . . . . 
    . . e 2 2 2 2 2 2 2 e . . . . . 
    . . e 2 2 2 2 2 2 2 e . . . . . 
    . . e 2 2 2 2 2 e f f c c . . . 
    . . e e 2 2 e f f f f b c . . . 
    . e e e f e 2 b f f f d c . . . 
    e e 2 2 d f 2 1 1 1 1 b c . . . 
    e e 2 2 d f e e c c c . . . . . 
    b 1 1 d e 2 2 e e c . . . . . . 
    . f f e 2 2 2 2 e . . . . . . . 
    . . f f d d 2 2 f f d d . . . . 
    . . f f d d e e f f d d . . . . 
    . . . f f f f . . . . . . . . . 
    . . e e e f f f . . . . . . . . 
    . . e e e e f f f . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
game.onUpdateInterval(1000, function () {
    myEnemy = sprites.createProjectileFromSide(img`
        . . f f f . . . . . . . . . . . 
        f f f c c . . . . . . . . f f f 
        f f c c c . 5 5 . . . f 5 b b 5 
        f f c 3 c c 3 5 5 f f b b b 5 . 
        f f c 3 5 5 3 5 5 f b b 5 5 5 . 
        f c 5 5 5 5 5 5 5 f b 5 b 5 5 . 
        c c 1 5 5 5 1 5 5 b b 5 b b 5 . 
        c 5 5 5 5 5 5 5 b b 5 5 5 b 5 . 
        c 5 1 f f 1 c 5 b 5 5 5 5 5 . . 
        c f 1 f f 1 f 5 5 5 5 f 5 . . . 
        f f f f f f f 5 5 5 5 f 5 . . . 
        f f 2 2 2 2 f 5 5 5 5 f 5 5 . . 
        . f 2 2 2 2 2 5 5 5 c f . . . . 
        . . f 2 2 2 5 5 5 c f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 0, 50)
    myEnemy.setKind(SpriteKind.Enemy)
    mySprite.x = randint(0, 160)
})
