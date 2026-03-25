class Farm:
    def __init__(self, farm_name):
        # Step 2
        self.name = farm_name
        self.animals = {}

    def add_animal(self, animal_type=None, count=1, **kwargs):
        # Step 3 + Step 8 (kwargs support)

        # Handle single animal (original requirement)
        if animal_type:
            if animal_type in self.animals:
                self.animals[animal_type] += count
            else:
                self.animals[animal_type] = count

        # Handle multiple animals using kwargs
        for animal, qty in kwargs.items():
            if animal in self.animals:
                self.animals[animal] += qty
            else:
                self.animals[animal] = qty

    def get_info(self):
        # Step 4

        output = f"{self.name}'s farm\n\n"

        for animal, count in self.animals.items():
            output += f"{animal:<6} : {count}\n"

        output += "\n    E-I-E-I-0!"
        return output

    def get_animal_types(self):
        # Step 6
        return sorted(self.animals.keys())

    def get_short_info(self):
        # Step 7

        animal_list = []
        for animal in self.get_animal_types():
            if self.animals[animal] > 1:
                animal_list.append(animal + "s")
            else:
                animal_list.append(animal)

        # Join properly with commas and "and"
        if len(animal_list) > 1:
            animals_str = ", ".join(animal_list[:-1]) + " and " + animal_list[-1]
        else:
            animals_str = animal_list[0]

        return f"{self.name}'s farm has {animals_str}."


# ✅ Testing
macdonald = Farm("McDonald")

# Original method usage
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)

print(macdonald.get_info())

# Bonus methods
print(macdonald.get_animal_types())
print(macdonald.get_short_info())

# kwargs version
macdonald.add_animal(cow=2, sheep=3, horse=4)
print(macdonald.get_info())

macdonald.add_animal(cow=5, sheep=2)
