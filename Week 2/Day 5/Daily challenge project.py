import random

class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __repr__(self):
        return f"{self.value} of {self.suit}"

class Deck:
    suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
    values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

    def __init__(self):
        self.cards = [Card(suit, value) for suit in self.suits for value in self.values]
        self.shuffle()

    def shuffle(self):
        random.shuffle(self.cards)

    def deal(self):
        if not self.cards:
            raise ValueError("All cards have been dealt.")
        return self.cards.pop()

# Example usage
if __name__ == "__main__":
    deck = Deck()
    print("Initial deck:")
    print(deck.cards)
    
    card_dealt = deck.deal()
    print(f"\nDealt card: {card_dealt}")
    
    print("\nDeck after dealing one card:")
    print(deck.cards)