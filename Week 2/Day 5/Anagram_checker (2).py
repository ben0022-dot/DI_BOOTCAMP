# anagram_checker.py

class AnagramChecker:
    def __init__(self, word_list_file):
        # Load the word list file into a set for fast lookup
        with open(word_list_file, 'r') as file:
            self.word_list = {word.strip().lower() for word in file.readlines()}

    def is_valid_word(self, word):
        # Check if the given word exists in the loaded word list
        return word.lower() in self.word_list

    def is_anagram(self, word1, word2):
        # Check if two words are anagrams
        return sorted(word1.lower()) == sorted(word2.lower())

    def get_anagrams(self, word):
        # Find all anagrams for the given word
        anagrams = []
        for candidate in self.word_list:
            if self.is_anagram(word, candidate) and candidate != word.lower():
                anagrams.append(candidate)
        return anagrams
    # anagrams.py

        from anagram_checker import AnagramChecker

def main():
    # Create an instance of AnagramChecker with the word list file
    checker = AnagramChecker('word_list.txt')  # Ensure the file is in the same directory

    while True:
        print("\nMenu:")
        print("1. Input a word")
        print("2. Exit")
        choice = input("Choose an option (1 or 2): ")

        if choice == '1':
            user_input = input("Enter a single word: ").strip()
            # Validate the input
            if len(user_input.split()) != 1:
                print("Error: Only a single word is allowed.")
                continue
            if not user_input.isalpha():
                print("Error: Only alphabetic characters are allowed.")
                continue
            
            # Check if the word is valid
            if checker.is_valid_word(user_input):
                anagrams = checker.get_anagrams(user_input)
                print(f'\nYOUR WORD: "{user_input.upper()}"')
                print("This is a valid English word.")
                print(f"Anagrams for your word: {', '.join(anagrams) if anagrams else 'None'}")
            else:
                print(f'\nYOUR WORD: "{user_input.upper()}"')
                print("This is not a valid English word.")
        
        elif choice == '2':
            print("Exiting the program. Goodbye!")
            break
        
        else:
            print("Invalid choice. Please select 1 or 2.")

if __name__ == "__main__":
    main()
