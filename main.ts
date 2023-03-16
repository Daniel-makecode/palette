namespace SpriteKind {
    export const Ammo = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.score() > 0) {
        info.changeScoreBy(-1)
        animation.runImageAnimation(
        MainCharacter,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . a a . . . . . . . . 
            . . . . . a a a a . . . . . . . 
            . . . . . a 2 a 2 . . . . . . . 
            . . . . . a a a a . . . . . . . 
            . . . . 4 a a a b b . . . . . . 
            . . . . 6 d d 7 d . . . . . . . 
            . . . . 6 d b b b b b . . . . . 
            . . . . 6 d a b d a . . . . . . 
            . . . . . d d 7 d . . . . . . . 
            . . . . . b b b b . . . . . . . 
            . . . . . 8 . . 8 . . . . . . . 
            . . . . . 8 . . 8 . . . . . . . 
            . . . . . 8 . . 8 . . . . . . . 
            . . . . . a a . a a . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . a a . . . . . . . . 
            . . . . . a a a a . . . . . . . 
            . . . . . a 2 a 2 . . . . . . . 
            . . . . . a a a a . . . . . . . 
            . . . . 4 a a 5 b b . . . . . . 
            . . . . 6 d 5 7 d . . 5 . . . . 
            . . . . 6 d b b b b b 4 4 . . . 
            . . . . 6 d a b d a . 5 5 . . . 
            . . . . . d d 7 d . . . . . . . 
            . . . . . b b b b . . . . . . . 
            . . . . . 8 . . 8 . . . . . . . 
            . . . . . 8 . . 8 . . . . . . . 
            . . . . . 8 . . 8 . . . . . . . 
            . . . . . a a . a a . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . a a . . . . . . . . 
            . . . . . a a a a . . . . . . . 
            . . . . . a 2 a 2 . . . . . . . 
            . . . . . a a a a . . . . . . . 
            . . . . 4 5 a a b b . . 5 . . . 
            . . . . 6 5 d 7 d . . 5 . . 4 . 
            . . . . 6 d b b b b b 4 4 4 . . 
            . . . . 6 d a b d a . 5 5 . 4 . 
            . . . . . d d 7 d . . . . 5 . . 
            . . . . . b b b b . . . . . . . 
            . . . . . 8 . . 8 . . . . . . . 
            . . . . . 8 . . 8 . . . . . . . 
            . . . . . 8 . . 8 . . . . . . . 
            . . . . . a a . a a . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . a a . . . . . . . . 
            . . . . . a a a a . . . . . . . 
            . . . . . a 2 a 2 . . . . . . . 
            . . . . . a a a a . . . . . . . 
            . . . . 4 a a a b b . . . . . . 
            . . . . 5 d d 7 d . . 5 . . . . 
            . . . 5 6 d b b b b b 4 4 . . . 
            . . . . 6 d a b d a . 5 5 . . . 
            . . . . . d d 7 d . . . . . . . 
            . . . . . b b b b . . . . . . . 
            . . . . . 8 . . 8 . . . . . . . 
            . . . . . 8 . . 8 . . . . . . . 
            . . . . . 8 . . 8 . . . . . . . 
            . . . . . a a . a a . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . a a . . . . . . . . 
            . . . . . a a a a . . . . . . . 
            . . . . . a 2 a 2 . . . . . . . 
            . . . . . a a a a . . . . . . . 
            . . . . 4 a a a b b . . . . . . 
            . . . . 6 d d 7 d . . . . . . . 
            . . . . 6 d b b b b b . . . . . 
            . . 5 5 6 d a b d a . . . . . . 
            . . . . . d d 7 d . . . . . . . 
            . . . . . b b b b . . . . . . . 
            . . . . . 8 . . 8 . . . . . . . 
            . . . . . 8 . . 8 . . . . . . . 
            . . . . . 8 . . 8 . . . . . . . 
            . . . . . a a . a a . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . a a . . . . . . . . 
            . . . . . a a a a . . . . . . . 
            . . . . . a 2 a 2 . . . . . . . 
            . . . . . a a a a . . . . . . . 
            . . . . 4 a a a b b . . . . . . 
            . . . . 6 d d 7 d . . . . . . . 
            . . . . 6 d b b b b b . . . . . 
            . . . . 6 d a b d a . . . . . . 
            . . . 5 . d d 7 d . . . . . . . 
            . . 5 . . b b b b . . . . . . . 
            . . . . . 8 . . 8 . . . . . . . 
            . . . . . 8 . . 8 . . . . . . . 
            . . . . . 8 . . 8 . . . . . . . 
            . . . . . a a . a a . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . a a . . . . . . . . 
            . . . . . a a a a . . . . . . . 
            . . . . . a 2 a 2 . . . . . . . 
            . . . . . a a a a . . . . . . . 
            . . . . 4 a a a b b . . . . . . 
            . . . . 6 d d 7 d . . . . . . . 
            . . . . 6 d b b b b b . . . . . 
            . . . . 6 d a b d a . . . . . . 
            . . . . . d d 7 d . . . . . . . 
            . . . . . b b b b . . . . . . . 
            . . 5 . . 8 . . 8 . . . . . . . 
            . . 5 . . 8 . . 8 . . . . . . . 
            . . . . . 8 . . 8 . . . . . . . 
            . . . . . a a . a a . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . a a . . . . . . . . 
            . . . . . a a a a . . . . . . . 
            . . . . . a 2 a 2 . . . . . . . 
            . . . . . a a a a . . . . . . . 
            . . . . 4 a a a b b . . . . . . 
            . . . . 6 d d 7 d . . . . . . . 
            . . . . 6 d b b b b b . . . . . 
            . . . . 6 d a b d a . . . . . . 
            . . . . . d d 7 d . . . . . . . 
            . . . . . b b b b . . . . . . . 
            . . . . . 8 . . 8 . . . . . . . 
            . . . . . 8 . . 8 . . . . . . . 
            . . . . . 8 . . 8 . . . . . . . 
            . 5 5 . . a a . a a . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . a a . . . . . . . . 
            . . . . . a a a a . . . . . . . 
            . . . . . a 2 a 2 . . . . . . . 
            . . . . . a a a a . . . . . . . 
            . . . . 4 a a a b b . . . . . . 
            . . . . 6 d d 7 d . . . . . . . 
            . . . . 6 d b b b b b . . . . . 
            . . . . 6 d a b d a . . . . . . 
            . . . . . d d 7 d . . . . . . . 
            . . . . . b b b b . . . . . . . 
            . . . . . 8 . . 8 . . . . . . . 
            . . . . . 8 . . 8 . . . . . . . 
            . . . . . 8 . . 8 . . . . . . . 
            . . . . . a a . a a . . . . . . 
            `],
        50,
        false
        )
        PlayerBullet = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, MainCharacter, 500, 0)
    } else {
    	
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    MainCharacter.vy = -100
    pause(1000)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    MainCharacter.vx = -100
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    MainCharacter.vx = 0
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    MainCharacter.vx = 0
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Ammo, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(Ammo)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    MainCharacter.vx = 100
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(Zed, effects.ashes, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(Zed)
})
let PlayerBullet: Sprite = null
let Zed: Sprite = null
let Ammo: Sprite = null
let MainCharacter: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
MainCharacter = sprites.create(assets.image`Player`, SpriteKind.Player)
MainCharacter.ay = 200
scene.cameraFollowSprite(MainCharacter)
info.setScore(3)
Ammo = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 7 7 . . . . . . 
    . . . . . . 7 7 . . . . . . . . 
    . . . . 7 7 . . . . . . . . . . 
    . . 7 7 . . 5 5 4 . . . . . . . 
    . . 7 7 7 7 7 7 7 7 7 . . . . . 
    . . 7 7 4 7 4 7 4 7 7 . . . . . 
    . . 7 7 5 7 5 7 5 7 7 . . . . . 
    . . 7 7 5 7 5 7 5 7 7 . . . . . 
    . . 7 7 7 7 7 7 7 7 7 . . . . . 
    `, SpriteKind.Ammo)
Ammo.setPosition(27, 130)
Ammo.setVelocity(0, 1000)
Zed = sprites.create(assets.image`myImage`, SpriteKind.Enemy)
Zed.setVelocity(0, 100)
Zed.setPosition(100, 65)
info.setLife(3)
