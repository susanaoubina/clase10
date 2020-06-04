sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    mySprite.say(":)", 500)
    otherSprite.setKind(mySprite.kind())
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 1 1 1 1 1 2 2 1 1 1 1 1 2 2 
2 2 1 1 1 1 1 2 2 1 1 1 1 1 2 2 
2 2 f f f 1 1 2 2 f f f 1 1 2 2 
2 2 f f f 1 1 2 2 f f f 1 1 2 2 
2 2 f f f 1 1 2 2 f f f 1 1 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 4 4 4 4 2 2 2 2 2 2 2 2 
2 2 2 2 4 4 4 4 2 2 2 2 2 2 2 2 
2 2 2 2 4 4 4 4 2 2 2 2 2 2 2 2 
2 2 2 2 4 4 4 4 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, SpriteKind.Player)
let Enemigo = sprites.create(img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 1 1 1 1 1 7 7 1 1 1 1 1 7 7 
7 7 1 1 1 1 1 7 7 1 1 1 1 1 7 7 
7 7 f f f 1 1 7 7 f f f 1 1 7 7 
7 7 f f f 1 1 7 7 f f f 1 1 7 7 
7 7 f f f 1 1 7 7 f f f 1 1 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 4 4 4 4 7 7 7 7 7 7 7 7 
7 7 7 7 4 4 4 4 7 7 7 7 7 7 7 7 
7 7 7 7 4 4 4 4 7 7 7 7 7 7 7 7 
7 7 7 7 4 4 4 4 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, SpriteKind.Enemy)
let mySprite2 = sprites.create(img`
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 1 1 1 1 1 6 6 1 1 1 1 1 6 6 
6 6 1 1 1 1 1 6 6 1 1 1 1 1 6 6 
6 6 f f f 1 1 6 6 f f f 1 1 6 6 
6 6 f f f 1 1 6 6 f f f 1 1 6 6 
6 6 f f f 1 1 6 6 f f f 1 1 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 4 4 4 4 6 6 6 6 6 6 6 6 
6 6 6 6 4 4 4 4 6 6 6 6 6 6 6 6 
6 6 6 6 4 4 4 4 6 6 6 6 6 6 6 6 
6 6 6 6 4 4 4 4 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
`, SpriteKind.Player)
Enemigo.setPosition(8, 8)
mySprite2.setPosition(147, 8)
controller.moveSprite(mySprite)
