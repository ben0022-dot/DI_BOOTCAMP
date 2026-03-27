# game.py

import random

class Game:
    def get_user_item(self):
        # Ask the user to select an item (rock/paper/scissors)
        while True:
            user_input = input("Choose your item (rock, paper, scissors): ").lower()
            if user_input in ['rock', 'paper', 'scissors']:
                return user_input
            else:
                print("Invalid choice, please try again.")

    def get_computer_item(self):
        # Randomly select an item (rock/paper/scissors)
        return random.choice(['rock', 'paper', 'scissors'])

    def get_game_result(self, user_item, computer_item):
        # Determine the result of the game based on the rules
        if user_item == computer_item:
            return "draw"
        elif (user_item == 'rock' and computer_item == 'scissors') or \
             (user_item == 'paper' and computer_item == 'rock') or \
             (user_item == 'scissors' and computer_item == 'paper'):
            return "win"
        else:
            return "loss"

    def play(self):
        # Call methods to play the game
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)

        # Print the outcome of the game
        print(f"You chose: {user_item}")
        print(f"Computer chose: {computer_item}")
        print(f"Result: You {result}!")

        return result
    # rock-paper-scissors.py

        from game import Game

def get_user_menu_choice():
    # Display the menu options
    while True:
        print("\nMenu:")
        print("1. Play a new game")
        print("2. Show scores")
        print("3. Quit")
        choice = input("Choose an option (1, 2, or 3): ")
        
        if choice in ['1', '2', '3']:
            return choice
        else:
            print("Invalid choice, please try again.")

def print_results(results):
    # Print the results in a user-friendly format
    print("\nGame Summary:")
    print(f"Wins: {results['win']}, Losses: {results['loss']}, Draws: {results['draw']}")
    print("Thank you for playing!")

def main():
    results = {"win": 0, "loss": 0, "draw": 0}
    
    while True:
        user_choice = get_user_menu_choice()
        
        if user_choice == '1':
            game = Game()
            result = game.play()
            results[result] += 1
        
        elif user_choice == '2':
            print_results(results)
        
        elif user_choice == '3':
            print_results(results)
            print("Exiting the game. Goodbye!")
            break

if __name__ == "__main__":
    main() 