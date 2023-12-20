game.splash("Let's calculate the area of a Trapezoid ")
let base_1 = game.askForNumber("what is the base 1(cm)?")
let base_2 = game.askForNumber("what is the  base 2 (cm)?")
let height = game.askForNumber("what is the height (cm)?")
let sum_of_bases = base_1 + base_2
let area = sum_of_bases * (height / 2)
game.splash("the are of the Trapezoid of height " + height + "cm with base 1  of" + base_1 + "cm and base 2 of " + base_2 + "cm" + "is" + area + "cm^2")
