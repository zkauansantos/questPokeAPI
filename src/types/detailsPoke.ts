export type PokemonSelected = {
  sprites: {
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
  moves: {
    move: {
      name: string
    }
  }[]
  types: {
    type: {
      name: string
    }
  }[]
}


export type Abilities = {
  id: number
  name: string
  ability: {
    url: string
  }
  'flavor_text_entries': {
    'flavor_text': string
  }[]
}
