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
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    if (MainCharacter.tileKindAt(TileDirection.Center, assets.tile`myTile39`)) {
        MainCharacter.vy = -100
    } else {
    	
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (MainCharacter.isHittingTile(CollisionDirection.Bottom)) {
        MainCharacter.vy = -100
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Ammo, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(Ammo)
})
info.onLifeZero(function () {
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
        . . . . . . . . . . . . . . . . 
        . . . . . . . a a . . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . . a 2 a 2 . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . 4 a a a b b . . . . . 
        . . . . . 6 d d 7 d . b . . . . 
        . . . . . 6 d d 7 d . . b . . . 
        . . . . . 6 d a 7 d a b . b . . 
        . . . . . . d d 7 d . . . . b . 
        . . . . . . b b b b . . . . . b 
        . . . . . . 8 . . 8 . . . . . . 
        . . . . . . 8 . . 8 . . . . . . 
        . . . . a 8 8 a 8 8 . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . a . . . . . . . . . . . 
        . . a a 2 . b . . . . . . . . . 
        . a 2 a a b . . . . . . . . . . 
        . a a a a a . . . . . . . . . . 
        . . a a a 7 d d d . . . . . . . 
        . . . a . d 7 d d . . . . . b . 
        . . . . . d d 7 d d . . . b b . 
        . . . . . d d d 7 d . . . . b . 
        . . . . . . b b b b . . . . b . 
        . . . . . . 8 . . 8 . . . . b . 
        . . . . . . 8 . . 8 . . . . . . 
        . . . . a 8 8 a 8 8 . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . b . . a . . . . . . . . 
        . a 2 a b d d d d b 8 b b b b b 
        a a a a a 7 7 7 7 b . 8 b . . . 
        a a 2 a a d d a d b . . 8 . a . 
        . a a a a d d d d b 8 8 8 8 a . 
        `],
    500,
    false
    )
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile35`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
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
tiles.setCurrentTilemap(tilemap`level2`)
MainCharacter = sprites.create(assets.image`Player`, SpriteKind.Player)
tiles.placeOnRandomTile(MainCharacter, assets.tile`myTile48`)
MainCharacter.ay = 200
scene.cameraFollowSprite(MainCharacter)
info.setScore(3)
controller.moveSprite(MainCharacter, 100, 0)
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
