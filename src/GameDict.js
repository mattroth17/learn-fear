export const GameDict = {
  'start': {
    'text': 'This is the first step in the game!',
    'choices': {
      'left': 'Go left',
      'right': 'Go right',
    },
    'image': require('./assets/grimms.png'),
    'initial_image': '',
    'sound': '/assets/wolves.mp3',
    'is_end': false,
  },
  'left': {
    'text': 'You went left! Game over',
    'choices': {},
    'image': './assets/grimms.png',
    'initial_image': '',
    'sound': './assets/wolves.mp3',
    'is_end': true,
  },
  'right': {
    'text': 'You went right! Game over',
    'choices': {},
    'image': './assets/grimms.png',
    'initial_image': '',
    'sound': './assets/wolves.mp3',
    'is_end': true,
  }
}