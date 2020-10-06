const { atomFamily } = require("recoil");

export const rectFamily= atomFamily({
    key:"rectangle",
    default:id=>({
        name:'rect'+id
    }),
    
})