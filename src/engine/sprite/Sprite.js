import * as THREE from 'three';
import SpriteAnimation from './SpriteAnimation';

export default class Sprite extends THREE.Sprite {
    constructor(
        indexedTexture = undefined,
        indexedTextureRows = 1,
        indexedTextureColumns = 1,
        spriteAnimation = new SpriteAnimation(1, 1, 0, 0, 50),
    ) {
        // Load Texture
        const texture = new THREE
            .TextureLoader()
            .load(indexedTexture);
        
        console.log(texture)
        texture.repeat.x = 1 / indexedTextureColumns; // set texture width to subset of loaded texture
        texture.repeat.y = 1 / indexedTextureRows; // set texture height to be subset of loaded texture

        // Apply texture to Material
        const spriteMaterial = new THREE.SpriteMaterial({
            map: texture,
        });

        // Create THREE scene appendable object as this
        super(spriteMaterial);

        // Store dilsprite data
        this.spriteData = {
            indexedTextureColumns: indexedTextureColumns,
            indexedTextureRows: indexedTextureRows,
            textureColumn: 0,
            textureRow: 0,
            textureInversionSettings: {
                xInversed: false,
                yInversed: false
            }
        };

        // SpriteAnimation
        this.spriteAnimation = spriteAnimation;
    }

    animate = (timeDelta) => {
        this.spriteAnimation.animate(timeDelta);
        const textureCoordinate = this.spriteAnimation.getCurrentTextureCoordinate(
            this.spriteData.textureInversionSettings.xInversed,
            this.spriteData.textureInversionSettings.yInversed
        );
        this.setTextureIndex(textureCoordinate);
    }

    setTextureIndex = (textureIndex = { x: 0, y: 0 }) => {
        this.material.map.offset.x = textureIndex.x;
        this.material.map.offset.y = textureIndex.y;
    }

    invertTexture = (invertTexture = { x: 1, y: 1 }) => {
        // Check if Inversion needs to be changed
        if ((this.spriteData.textureInversionSettings.xInversed) === (invertTexture.x < 0) && this.spriteData.textureInversionSettings.yInversed === (invertTexture.y < 0)) {
            return;
        }

        this.material.map.repeat.x = invertTexture.x / this.spriteData.indexedTextureColumns;
        this.material.map.repeat.y = invertTexture.y / this.spriteData.indexedTextureRows;
        if (invertTexture.x < 0) {
            this.material.map.offset.x = -invertTexture.x / this.spriteData.indexedTextureColumns;
        }
        if (invertTexture.y < 0) {
            this.material.map.offset.y = -invertTexture.y / this.spriteData.indexedTextureRows;
        }
        this.spriteData.textureInversionSettings = {
            xInversed: invertTexture.x < 0,
            yInversed: invertTexture.y < 0
        }
    }

    setPosition = (position2d = { x: 0, y: 0 }) => {
        this.position.x = position2d.x;
        this.position.y = position2d.y;
        if (position2d.z) {
            this.position.z = position2d.z;
        }
    }
}