// The elves are very busy in Santa Claus' workshop organizing gifts 🎁 for Christmas Eve 🎄.

// The input format is special, as it indicates the number of gifts and the type of gift with letters from a to z. For example, '66a11b' means 66 a gifts and 11 b gifts.

// The elves have a special system for organizing the gifts:

// Every 10 gifts of the same type are packed in a box, represented by {x}. For example, 20 type a gifts are packed in two boxes like this: {a}{a}.
// Every 5 boxes are stacked on a pallet, represented by [x]. For example, 10 a boxes are stacked on 2 pallets in this way: [a][a]
// Any additional gift is placed in a bag, represented by () and all of them are placed inside. For example, 4 b gifts are placed in a bag like this (bbbb)
// The gifts are then placed in the following order: pallets, boxes and bags. And the gifts appear in the same order as the input string.

// Your task is to write a function organizeGifts that takes a string of gifts as an argument and returns a string representing the warehouse.

// const result1 = organizeGifts('76a11b')
// console.log(result1)
// // `[a]{a}{a}(aaaaaa){b}(b)`

function organizeGifts(gifts) {
  // String a retornar
  let giftOrganization = ''
  // Inicializo variable donde voy a concatenar los strings de numeros
  let quantity = ''
  // Recorrer string realizando prueba lógica con Number
  for (let i = 0; i < gifts.length; i++) {
    // Si pasa la prueba, concatenar a variable quantity
    // El que no pase la prueba Number() va a ser el tipo de regalo (a,b,c, etc..)
    if (!isNaN(Number(gifts[i]))) {
      quantity += gifts[i]
    } else {
      const typeOfGift = gifts[i]
      const typeOfGiftQuantity = Number(quantity)
      // En este punto ya cuento con la cantidad numerica y el tipo de regalo
      // Calcular nro. de cajas -> pallets y sueltos
      let pallets = 0
      let boxes = 0
      let sueltos = 0
      if (typeOfGiftQuantity >= 10) {
          boxes = Math.floor(typeOfGiftQuantity / 10)
          sueltos = typeOfGiftQuantity - boxes * 10
          if (boxes >=5) {
              pallets = Math.floor(boxes / 5)
              boxes = boxes - pallets * 5
          }
      } else {
          sueltos = typeOfGiftQuantity
      }

      const typeOfGiftOrg = sueltos ? `[${typeOfGift}]`.repeat(pallets) + `{${typeOfGift}}`.repeat(boxes) + `(${typeOfGift.repeat(sueltos)})` : `[${typeOfGift}]`.repeat(pallets) + `{${typeOfGift}}`.repeat(boxes)
      giftOrganization += typeOfGiftOrg

      // Reinicio variables para el proximo typeOfGift
      quantity = ''

    }
    

  }
  return giftOrganization
}
