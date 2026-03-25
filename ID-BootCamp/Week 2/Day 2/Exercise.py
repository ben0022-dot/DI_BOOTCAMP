class Chartreux("Cat"):
    pass

class Siamese(Cat): # type: ignore
    def sing(self, sounds):
        return f'{sounds}'
    bengal_cat = "Bengal"("Leo", 3)
chartreux_cat = Chartreux("Milo", 5)
siamese_cat = Siamese("Luna", 2)

all_cats = [bengal_cat, chartreux_cat, siamese_cat] # type: ignore

sara_pets = Pets(all_cats) # type: ignore
sara_pets.walk()

class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return (self.weight / self.age) * 10

    def fight(self, other_dog):
        my_power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight

        if my_power > other_power:
            return f"{self.name} wins the fight!"
        elif my_power < other_power:
            return f"{other_dog.name} wins the fight!"
        else:
            return "It's a tie!"
        dog1 = Dog("Rex", 5, 20)
dog2 = Dog("Buddy", 3, 25)
dog3 = Dog("Max", 4, 18)

print(dog2.bark())
print(dog2.run_speed())
print(dog2.fight(dog2))
import random

class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        names = [self.name]
        for dog in args:
            names.append(dog.name)
        print(f"{', '.join(names)} all play together")

    def do_a_trick(self):
        if self.trained:
            tricks = [
                "does a barrel roll",
                "stands on his back legs",
                "shakes your hand",
                "plays dead"
            ]
            print(f"{self.name} {random.choice(tricks)}")
            dog1 = PetDog("Fido", 2, 10)
dog2 = PetDog("Buddy", 3, 15)

dog2.train()
dog2.play(dog2)
dog2.do_a_trick()
class Person:
    def __init__(self, first_name, age):
        self.first_name = first_name
        self.age = age
        self.last_name = ""

    def is_18(self):
        return self.age >= 18
    class Family:
     def __init__(self, last_name):
        self.last_name = last_name
        self.members = []

    def born(self, first_name, age):
        person = Person(first_name, age)
        person.last_name = self.last_name
        self.members.append(person)

    def check_majority(self, first_name):
        for member in self.members:
            if member.first_name == first_name:
                if member.is_18():
                    print("You are over 18, your parents Jane and John accept that you will go out with your friends")
                else:
                    print("Sorry, you are not allowed to go out with your friends.")
                return
        print("Person not found.")

    def family_presentation(self):
        print(f"Family name: {self.last_name}")
        for member in self.members:
            print(f"{member.first_name}, Age: {member.age}")

            my_family = "Family"("Smith")

my_family.born("Alice", 20) # type: ignore
my_family.born("Bob", 16) # type: ignore

my_family.family_presentation() # type: ignore
my_family.check_majority("Alice") # type: ignore
my_family.check_majority("Bob") # type: ignore