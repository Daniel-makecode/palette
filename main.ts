namespace SpriteKind {
    export const Ammo = SpriteKind.create()
    export const NPC = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
    Hiding_hazmat.sayText("This is my hiding spot, and I'm not moving until the situation has drastically improved! Now go away! And don't tell me anyone I'm here!", 5000, true)
    pause(5000)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile58`, function (sprite, location) {
    game.gameOver(false)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Is_right == 1) {
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
        }
    } else {
        if (info.score() > 0) {
            info.changeScoreBy(-1)
            animation.runImageAnimation(
            MainCharacter,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . a a . . . . . . 
                . . . . . . . a a a a . . . . . 
                . . . . . . . 2 a 2 a . . . . . 
                . . . . . . . a a a a . . . . . 
                . . . . . . b b a a a 4 . . . . 
                . . . . . . . d 7 d d 6 . . . . 
                . . . . . b b b b b d 6 . . . . 
                . . . . . . a d b a d 6 . . . . 
                . . . . . . . d 7 d d . . . . . 
                . . . . . . . b b b b . . . . . 
                . . . . . . . 8 . . 8 . . . . . 
                . . . . . . . 8 . . 8 . . . . . 
                . . . . . . . 8 . . 8 . . . . . 
                . . . . . . a a . a a . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . a a . . . . . . 
                . . . . . . . a a a a . . . . . 
                . . . . . . . 2 a 2 a . . . . . 
                . . . . . . . a a a a . . . . . 
                . . . . . . b b 5 a a 4 . . . . 
                . . . . 5 . . d 7 5 d 6 . . . . 
                . . . 4 4 b b b b b d 6 . . . . 
                . . . 5 5 . a d b a d 6 . . . . 
                . . . . . . . d 7 d d . . . . . 
                . . . . . . . b b b b . . . . . 
                . . . . . . . 8 . . 8 . . . . . 
                . . . . . . . 8 . . 8 . . . . . 
                . . . . . . . 8 . . 8 . . . . . 
                . . . . . . a a . a a . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . a a . . . . . . 
                . . . . . . . a a a a . . . . . 
                . . . . . . . 2 a 2 a . . . . . 
                . . . . . . . a a a a . . . . . 
                . . . 5 . . b b a a 5 4 . . . . 
                . 4 . . 5 . . d 7 d 5 6 . . . . 
                . . 4 4 4 b b b b b d 6 . . . . 
                . 4 . 5 5 . a d b a d 6 . . . . 
                . . 5 . . . . d 7 d d . . . . . 
                . . . . . . . b b b b . . . . . 
                . . . . . . . 8 . . 8 . . . . . 
                . . . . . . . 8 . . 8 . . . . . 
                . . . . . . . 8 . . 8 . . . . . 
                . . . . . . a a . a a . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . a a . . . . . . 
                . . . . . . . a a a a . . . . . 
                . . . . . . . 2 a 2 a . . . . . 
                . . . . . . . a a a a . . . . . 
                . . . . . . b b a a a 4 . . . . 
                . . . . 5 . . d 7 d d 5 . . . . 
                . . . 4 4 b b b b b d 6 5 . . . 
                . . . 5 5 . a d b a d 6 . . . . 
                . . . . . . . d 7 d d . . . . . 
                . . . . . . . b b b b . . . . . 
                . . . . . . . 8 . . 8 . . . . . 
                . . . . . . . 8 . . 8 . . . . . 
                . . . . . . . 8 . . 8 . . . . . 
                . . . . . . a a . a a . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . a a . . . . . . 
                . . . . . . . a a a a . . . . . 
                . . . . . . . 2 a 2 a . . . . . 
                . . . . . . . a a a a . . . . . 
                . . . . . . b b a a a 4 . . . . 
                . . . . . . . d 7 d d 6 . . . . 
                . . . . . b b b b b d 6 . . . . 
                . . . . . . a d b a d 6 5 5 . . 
                . . . . . . . d 7 d d . . . . . 
                . . . . . . . b b b b . . . . . 
                . . . . . . . 8 . . 8 . . . . . 
                . . . . . . . 8 . . 8 . . . . . 
                . . . . . . . 8 . . 8 . . . . . 
                . . . . . . a a . a a . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . a a . . . . . . 
                . . . . . . . a a a a . . . . . 
                . . . . . . . 2 a 2 a . . . . . 
                . . . . . . . a a a a . . . . . 
                . . . . . . b b a a a 4 . . . . 
                . . . . . . . d 7 d d 6 . . . . 
                . . . . . b b b b b d 6 . . . . 
                . . . . . . a d b a d 6 . . . . 
                . . . . . . . d 7 d d . 5 . . . 
                . . . . . . . b b b b . . 5 . . 
                . . . . . . . 8 . . 8 . . . . . 
                . . . . . . . 8 . . 8 . . . . . 
                . . . . . . . 8 . . 8 . . . . . 
                . . . . . . a a . a a . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . a a . . . . . . 
                . . . . . . . a a a a . . . . . 
                . . . . . . . 2 a 2 a . . . . . 
                . . . . . . . a a a a . . . . . 
                . . . . . . b b a a a 4 . . . . 
                . . . . . . . d 7 d d 6 . . . . 
                . . . . . b b b b b d 6 . . . . 
                . . . . . . a d b a d 6 . . . . 
                . . . . . . . d 7 d d . . . . . 
                . . . . . . . b b b b . . . . . 
                . . . . . . . 8 . . 8 . . 5 . . 
                . . . . . . . 8 . . 8 . . 5 . . 
                . . . . . . . 8 . . 8 . . . . . 
                . . . . . . a a . a a . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . a a . . . . . . 
                . . . . . . . a a a a . . . . . 
                . . . . . . . 2 a 2 a . . . . . 
                . . . . . . . a a a a . . . . . 
                . . . . . . b b a a a 4 . . . . 
                . . . . . . . d 7 d d 6 . . . . 
                . . . . . b b b b b d 6 . . . . 
                . . . . . . a d b a d 6 . . . . 
                . . . . . . . d 7 d d . . . . . 
                . . . . . . . b b b b . . . . . 
                . . . . . . . 8 . . 8 . . . . . 
                . . . . . . . 8 . . 8 . . . . . 
                . . . . . . . 8 . . 8 . . . . . 
                . . . . . . a a . a a . . 5 5 . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . a a . . . . . . 
                . . . . . . . a a a a . . . . . 
                . . . . . . . 2 a 2 a . . . . . 
                . . . . . . . a a a a . . . . . 
                . . . . . . b b a a a 4 . . . . 
                . . . . . . . d 7 d d 6 . . . . 
                . . . . . b b b b b d 6 . . . . 
                . . . . . . a d b a d 6 . . . . 
                . . . . . . . d 7 d d . . . . . 
                . . . . . . . b b b b . . . . . 
                . . . . . . . 8 . . 8 . . . . . 
                . . . . . . . 8 . . 8 . . . . . 
                . . . . . . . 8 . . 8 . . . . . 
                . . . . . . a a . a a . . . . . 
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
                `, MainCharacter, -500, 0)
        }
    }
})
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    if (MainCharacter.tileKindAt(TileDirection.Center, assets.tile`myTile39`)) {
        MainCharacter.vy = -100
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile67`, function (sprite, location) {
    game.gameOver(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (MainCharacter.isHittingTile(CollisionDirection.Bottom)) {
        if (Is_right == 1) {
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
                . . . a 8 8 a 8 8 . . . . . . . 
                . . . a . . a . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
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
            1000,
            false
            )
        } else {
            animation.runImageAnimation(
            MainCharacter,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . a a . . . . . . 
                . . . . . . . a a a a . . . . . 
                . . . . . . . 2 a 2 a . . . . . 
                . . . . . . . a a a a . . . . . 
                . . . . . . b b a a a 4 . . . . 
                . . . . . . . d 7 d d 6 . . . . 
                . . . . . b b b b b d 6 . . . . 
                . . . . . . a d b a d 6 . . . . 
                . . . . . . . d 7 d d . . . . . 
                . . . . . . . b b b b . . . . . 
                . . . . . . . 8 . . 8 . . . . . 
                . . . . . . . 8 8 a 8 8 a . . . 
                . . . . . . . . . a . . a . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . a a . . . . . . 
                . . . . . . . a a a a . . . . . 
                . . . . . . . 2 a 2 a . . . . . 
                . . . . . . . a a a a . . . . . 
                . . . . . . b b a a a 4 . . . . 
                . . . . . . . d 7 d d 6 . . . . 
                . . . . . b b b b b d 6 . . . . 
                . . . . . . a d b a d 6 . . . . 
                . . . . . . . d 7 d d . . . . . 
                . . . . . . . b b b b . . . . . 
                . . . . . . . 8 . . 8 . . . . . 
                . . . . . . . 8 . . 8 . . . . . 
                . . . . . . . 8 . . 8 . . . . . 
                . . . . . . a a . a a . . . . . 
                `],
            1000,
            false
            )
        }
        MainCharacter.vy = -100
    }
})
function Spawn_Enemies () {
    for (let value of tiles.getTilesByType(assets.tile`myTile52`)) {
        Zed = sprites.create(assets.image`Hazard suit Infected`, SpriteKind.Enemy)
        tiles.placeOnTile(Zed, value)
        tiles.setTileAt(value, assets.tile`myTile25`)
        Zed.setVelocity(50, 0)
        Zed.setBounceOnWall(true)
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Is_right = 0
    animation.runImageAnimation(
    MainCharacter,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . a a . . . . . . 
        . . . . . . . a a a a . . . . . 
        . . . . . . . 2 a 2 a . . . . . 
        . . . . . . . a a a a . . . . . 
        . . . . . . b b a a a 4 . . . . 
        . . . . . . . d 7 d d 6 . . . . 
        . . . . . b b b b b d 6 . . . . 
        . . . . . . a d b a d 6 . . . . 
        . . . . . . . d 7 d d . . . . . 
        . . . . . . . b b b b . . . . . 
        . . . . . . . 8 . . 8 . . . . . 
        . . . . . . . 8 . . 8 8 a . . . 
        . . . . . . . 8 . . . . a . . . 
        . . . . . . a a . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . a a . . . . . . 
        . . . . . . . a a a a . . . . . 
        . . . . . . . 2 a 2 a . . . . . 
        . . . . . . . a a a a . . . . . 
        . . . . . . b b a a a 4 . . . . 
        . . . . . . . d 7 d d 6 . . . . 
        . . . . . b b b b b d 6 . . . . 
        . . . . . . a d b a d 6 . . . . 
        . . . . . . . d 7 d d . . . . . 
        . . . . . . . b b b b . . . . . 
        . . . . . . . 8 . . 8 . . . . . 
        . . . . . . . 8 8 a 8 . . . . . 
        . . . . . . . . . a 8 . . . . . 
        . . . . . . . . . a a . . . . . 
        `],
    200,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    Is_right = 1
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
        `],
    500,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    Is_right = 0
    animation.runImageAnimation(
    MainCharacter,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . a a . . . . . . 
        . . . . . . . a a a a . . . . . 
        . . . . . . . 2 a 2 a . . . . . 
        . . . . . . . a a a a . . . . . 
        . . . . . . b b a a a 4 . . . . 
        . . . . . . . d 7 d d 6 . . . . 
        . . . . . b b b b b d 6 . . . . 
        . . . . . . a d b a d 6 . . . . 
        . . . . . . . d 7 d d . . . . . 
        . . . . . . . b b b b . . . . . 
        . . . . . . . 8 . . 8 . . . . . 
        . . . . . . . 8 . . 8 . . . . . 
        . . . . . . . 8 . . 8 . . . . . 
        . . . . . . a a . a a . . . . . 
        `],
    500,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile54`, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`myTile25`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Is_right = 1
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
        . . . a 8 8 . . 8 . . . . . . . 
        . . . a . . . . 8 . . . . . . . 
        . . . . . . . . a a . . . . . . 
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
        . . . . . 8 a 8 8 . . . . . . . 
        . . . . . 8 a . . . . . . . . . 
        . . . . . a a . . . . . . . . . 
        `],
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile36`, function (sprite, location) {
    game.gameOver(false)
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
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile62`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile63`)
    tiles.setWallAt(tiles.getTileLocation(94, 38), false)
    tiles.setTileAt(tiles.getTileLocation(94, 38), assets.tile`myTile25`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile56`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile60`)
    tiles.setWallAt(tiles.getTileLocation(59, 28), false)
    tiles.setTileAt(tiles.getTileLocation(59, 28), assets.tile`myTile25`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile55`, function (sprite, location) {
    if (info.life() < 3) {
        tiles.setTileAt(location, assets.tile`myTile25`)
        info.changeLifeBy(1)
    } else {
        MainCharacter.sayText("Health full", 500, false)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.ashes, 500)
    sprites.destroy(PlayerBullet)
    otherSprite.setVelocity(0, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(1000)
})
let Zed: Sprite = null
let PlayerBullet: Sprite = null
let Is_right = 0
let Hiding_hazmat: Sprite = null
let MainCharacter: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
MainCharacter = sprites.create(assets.image`Player`, SpriteKind.Player)
tiles.placeOnRandomTile(MainCharacter, assets.tile`myTile48`)
MainCharacter.ay = 200
scene.cameraFollowSprite(MainCharacter)
info.setScore(3)
controller.moveSprite(MainCharacter, 100, 0)
info.setLife(3)
Hiding_hazmat = sprites.create(assets.image`Hazard suit kneeling`, SpriteKind.NPC)
tiles.placeOnRandomTile(Hiding_hazmat, assets.tile`myTile23`)
Spawn_Enemies()
game.showLongText("Use the A button to jump and use the B button to shoot. Hold up to use ladders.", DialogLayout.Center)
