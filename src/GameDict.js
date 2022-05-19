export const GameDict = {
  'start': {
    'text': "A father had two sons. The older was smart and sensible and could cope in any situation, while the younger was stupid and could neither learn nor understand anything. Whenever people encountered him, they said, 'He’ll always be a burden to his father!' \n \n You are the younger son. Your father complains that you never try to learn anything, but you object by saying I would like to learn what creeps are!’ Your journey to learn what fear truly is begins now.",
    'choices': {
      'sexton': 'Continue to Sexton Square',
    },
    'image': require('./assets/background.png'),
    'initial_image': '',
    'sound': '',
    'is_end': false,
  },
  'sexton': {
    'text': "Your father keeps complaining about you to people, and a visiting sexton hears about your story. He says that he can show you what creeps are in his gloomy churchyard place, away from your village and family. You become responsible for ringing the church bell at midnight. When you are at the tower, a ghost-like white figure appears on the stairs across the sound hole. You are so scared, crying out loud. Yet, the figure does not retreat. You get more and more scared. What do you do?",
    'choices': {
      "kicked_out": "Push the figure out from the tower!",
      "stay_with_sexton": "Stay there and keep shouting to the figure"
    },
    'image': require('./assets/sexton.png'),
    'initial_image': '',
    'sound': '',
    'is_end': false,
  },
  'stay_with_sexton': {
    'text': 'Turns out, the figure was no other than the sexton trying to teach you what creeps are in this isolated setting. ',
    'choices': {},
    'image': '',
    'initial_image': '',
    'sound': '',
    'is_end': true,
  },
  'kicked_out': {
    'text': 'Turns out, the figure was no other than the sexton trying to teach you what creeps are in this isolated setting. After you push him, he becomes badly injured, and your father is furious with you. Being ashamed of you, he kicks you out of your own house and forbids you from telling who your father is ever again. You are stripped of the boy identity you once held. Walking down a road, eagerly trying to learn what creeps are, you see a man. He tells you that you can learn what creeps are by sleeping under the tree where seven men were hung. During the night, it gets cold, and you light up a fire. Thinking that the seven men are also cold, you cut their ropes and set them all around the fire to help. Yet, they do not move and their rags start to burn. You shout at them to be careful, but they do not respond. What do you do?',
    'choices': {
      "challenge": "Tie them back up at the tree to prevent the fire from spreading.",
      "burn_to_death": "Let them stay there and try to get a response.",
    },
    'image': require('./assets/kicked_out.png'),
    'initial_image': '',
    'sound': '',
    'is_end': false,
  },
  'burn_to_death': {
    'text': 'They do not respond, and the fire gets huge. Before you can do anything, you all burn to death, including the bodies and the tree.',
    'choices': {},
    'image': '',
    'initial_image': '',
    'sound': '',
    'is_end': true,
  },
  'challenge': {
    'text': 'You tie the bodies back on the tree but still do not know what fear is. The intensity of your desire to discover fear increases more and more. While walking down a road, you meet a carter who finds an inn for you two to stay. The innkeeper eavesdrops on your situation and tells you about a haunted castle nearby, from where no one ever comes out again. The king has promised his daughter to whoever survives three days in this castle. You ambitiously appear before the king to ask for his permission for this quest despite the deadly risks. He allows you to partake in the challenge with three items of your choice: a fire, a lathe, and a carpenter’s bench with a knife. You might finally find out what creeps are. (put \n here) During your stay, supernatural figures appear, screaming, shouting at you. You are somewhat calm but this can become deadly. What do you do?',
    'choices': {
      "marriage": "Honor the quest by trying to survive through the three days.",
      "slip": "Try to run away from the castle",
    },
    'image': require('./assets/challenge.png'),
    'initial_image': '',
    'sound': '',
    'is_end': false,
  },
  'slip': {
    'text': 'Turns out, the haunted castle becomes more dangerous as it senses your fear and anxiety. When you try to escape, just like everyone else tried to do in the past, the violent ghosts make you slip while running down the stairs. You unfortunately die.',
    'choices': {},
    'image': '',
    'initial_image': '',
    'sound': '',
    'is_end': true,
  },
  'marriage': {
    'text': "You survive the challenge by rather indifferently handling the stay inside the haunted castle! The king honors his promise, and you marry his daughter. After becoming rich, you still do not know what “creeps” are. You keep complaining about this despite your new identity. Your wife becomes annoyed and promises to teach you the creeps. She goes to a brook and fetches a bucket full of minnows. That night, while you are sleeping, your wife pours the bucket full of cold water and minnows on you. The little fish began flapping on you, causing you to wake up and exclaim, ‘Oh, I’ve got the creeps! I’ve got the creeps! Now I know, dear wife, just what the creeps are.’",
    'choices': {},
    'image': require('./assets/fish.png'),
    'initial_image': '',
    'sound': '',
    'is_end': true,
  },

  
  
}