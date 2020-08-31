export default class SpriteAnimation {

    // Given: IndexedTexture has properties
    /**      0   1
     *  0  | 0 | 1 | 
     *  1  | 2 | 3 |
     */
    // Track a time
    constructor(
        rows = 1,
        columns = 1,
        startIndex = 0,
        endIndex = 0,
        animationTime = 50,
    ) {
        this._rows = rows;
        this._columns = columns;
        this._startIndex = startIndex;
        this._endIndex = endIndex;
        this._currentAnimationIndex = this._startIndex;

        this._animationTime = animationTime;

        const numberOfFrames = (endIndex - startIndex) + 1;
        const frameTimeMax = animationTime / numberOfFrames;

        this._animationData = {
            frameTimeMax,
            frameTime: frameTimeMax
        };

    }

    _indexToCoordinate = (index = 0) => {
        const x = (index % this._columns) / this._columns; // Which column
        const y = Math.floor(index / this._columns) / this._rows; // Which row
        return { x, y };
    }

    getCurrentTextureCoordinate = (xIsInversed = false, yIsInversed = false) => {
        const textureCoodinates = this._indexToCoordinate(this._currentAnimationIndex);
        if (xIsInversed) {
            textureCoodinates.x += (1 / this._columns);
        }
        if (yIsInversed) {
            textureCoodinates.y += (1 / this._rows);
        }
        return textureCoodinates;
    }

    animate = (timeDelta) => {
        this._animationData.frameTime -= timeDelta;
        if (this._animationData.frameTime <= 0) {
            this._calcAndIncrementNextFrame();
            this._animationData.frameTime = this._animationData.frameTimeMax
        }
    }

    _calcAndIncrementNextFrame = () => {
        this._currentAnimationIndex++;
        if (this._currentAnimationIndex > this._endIndex) {
            this._currentAnimationIndex = this._startIndex;
        }
    }

    resetAnimation = () => {
        this._animationData.frameTime = this._animationData.frameTimeMax;
        this._currentAnimationIndex = this._startIndex;
    }
}