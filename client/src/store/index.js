import { proxy } from "valtio";

const state = new proxy({
    intro: true,
    color: '#232323',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './mockgod-full.png',
});

export default state;