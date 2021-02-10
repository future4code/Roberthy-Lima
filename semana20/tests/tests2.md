EXERCICIO 1
a - export interface Character {
  name: string;
  life: number;
  strength: number;
  defense: number;
}

b - export const validateCharacter = (input: Character): boolean => {
  if (
    !input.name ||
		input.life === undefined || 
    input.strength === undefined ||
    input.defense === undefined
  ) {
    return false;
  }

  if (input.life <=0 || input.strength <=0 || input.defense <=0) {
    return false;
  }

  return true;
};

EXERCICIO 2

a - test("Should return false for empty name", () => {
    const result = validateCharacter({
      name: "",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });
  
b - test("Should return false for empty name", () => {
    const result = validateCharacter({
      name: "Eae",
      life: 0,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });
  
 c - test("Should return false for empty name", () => {
    const result = validateCharacter({
      name: "Astrodev",
      life: 1500,
      strength: 0,
      defense: 500,
    });

    expect(result).toBe(false);
  });]
  
  d - test("Should return false for empty name", () => {
    const result = validateCharacter({
      name: "Astrodev",
      life: 1500,
      strength: 100,
      defense: 0,
    });

    expect(result).toBe(false);
  });
  
  e - test("Should return false for empty name", () => {
    const result = validateCharacter({
      name: "Astrodev",
      life: 1500,
      strength: 300,
      defense: -500,
    });
    
F - test("Should return false for life 0", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 0,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });
  
  G - test("Should return true for all valid inputs", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(true);
  });
  
  EXERCICIO 3
  
  a - export const performAttack = (attacker: Character, defender: Character) => {
  if (!validateCharacter(attacker) || !validateCharacter(defender)) {
    throw new Error("Invalid character");
  }

  if (attacker.strength > defender.defense) {
    defender.life -= attacker.strength - defender.defense;
  }
};

b - export const performAttack = (
  attacker: Character,
  defender: Character,
  validator: (input: Character) => boolean
) => {
  if (!validator(attacker) || !validator(defender)) {
    throw new Error("Invalid character");
  }

  if (attacker.strength > defender.defense) {
    defender.life -= attacker.strength - defender.defense;
  }
};

EXERCICIO 4 

a - 