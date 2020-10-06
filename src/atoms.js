const { atom } = require("recoil");

export const canvasBackgroundColorState=atom({
    key:"canvasBackgroundColorState",
    default:"white"
})

export const rectanglesIdArrayState=atom({
    key:"rectanglesIdArrayState",
    default:[]
})