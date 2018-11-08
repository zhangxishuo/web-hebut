import CanvasNest from 'canvas-nest.js';

const config = {
  color: '255,0,0',
  count: 88,
};

const element = document.getElementById('app');

// Using config rendering effect at 'element'.
const cn = new CanvasNest(element, config);

// destroy
cn.destroy();