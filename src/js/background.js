// initialize granim
new Granim({
  element: '#background',
  name: 'basic-gradient',
  direction: 'left-right',
  opacity: [1, 1],
  isPausedWhenNotInView: true,
  stateTransitionSpeed: 500,
  states: {
    'default-state': {
      gradients: [["#c33764", "#1d2671"], ["#4568dc", "#b06ab3"]]
    }
  }
});