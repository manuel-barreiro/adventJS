// In Santa's workshop, the elves have a gift list they wish to make and a limited set of materials.

// Gifts are strings of text and materials are characters. Your task is to write a function that, given a list of gifts and the available materials, returns a list of the gifts that can be made.

// A gift can be made if we have all the necessary materials to make it.

// const gifts = ['tren', 'oso', 'pelota']
// const materials = 'tronesa'

// manufacture(gifts, materials) // ["tren", "oso"]

// const gifts = ['juego', 'puzzle']
// const materials = 'jlepuz'

// manufacture(gifts, materials) // ["puzzle"]

// const gifts = ['libro', 'ps5']
// const materials = 'psli'

// manufacture(gifts, materials) // []

function manufacture({ gifts, materials }: { gifts: string[], materials: string }) {
  // Inicializo array a devolver, con los regalos que se pueden generar
  const possibleGifts: string[] = [];
  // For Each loop for the gifts array
  gifts.forEach((gift) => {
    // Split the gift into an array of characters
    const giftCharArr = gift.split('');
    let num = 0;
    // Check if each character of the gift is included in the materials
    giftCharArr.forEach((char) => {
      if (!materials.includes(char)) {
        num = 1;
      }
    });
    num === 0 ? possibleGifts.push(gift) : undefined;
  });

  return possibleGifts
  
  }