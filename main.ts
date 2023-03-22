namespace SpriteKind {
    export const Ammo = SpriteKind.create()
}
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
        Zed = sprites.create(assets.image`myImage`, SpriteKind.Enemy)
        tiles.placeOnTile(Zed, value)
        tiles.setTileAt(value, assets.tile`myTile25`)
        Zed.setVelocity(-50, 0)
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
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.ashes, 500)
    sprites.destroy(PlayerBullet)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite)
})
let Zed: Sprite = null
let PlayerBullet: Sprite = null
let Is_right = 0
let MainCharacter: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
MainCharacter = sprites.create(assets.image`Player`, SpriteKind.Player)
tiles.placeOnRandomTile(MainCharacter, assets.tile`myTile48`)
MainCharacter.ay = 200
scene.cameraFollowSprite(MainCharacter)
info.setScore(3)
controller.moveSprite(MainCharacter, 100, 0)
info.setLife(3)
Spawn_Enemies()
