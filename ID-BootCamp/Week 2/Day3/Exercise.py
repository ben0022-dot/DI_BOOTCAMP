from locale import currency


class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    # String representation
    def __str__(self):
        return f"{self.amount} {self.currency}s" if self.amount != 1 else f"{self.amount} {self.currency}"

    # Representation for interactive console
    def __repr__(self):
        return self.__str__()

    # Convert to integer
    def __int__(self):
        return self.amount

    # Addition
    def __add__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
            return self.amount + other.amount
        elif isinstance(other, int):
            return self.amount + other
        else:
            raise TypeError(f"Unsupported addition with type {type(other)}")

    # In-place addition
    def __iadd__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
            self.amount += other.amount
        elif isinstance(other, int):
            self.amount += other
        else:
            raise TypeError(f"Unsupported addition with type {type(other)}")
        return self
    c1 = currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(c1)        # type: ignore # 5 dollars
print(int(c1))   # type: ignore # 5
print(repr(c1))  # type: ignore # 5 dollars

print(c1 + 5)    # type: ignore # 10
print(c1 + c2)   # type: ignore # 15
print(c1)        # type: ignore # 5 dollars

c1 += 5 # type: ignore
print(c1)        # 10 dollars

c1 += c2
print(c1)        # 20 dollars

# Uncomment to see TypeError
# print(c1 + c3)  
# func.py
def funcsum_two_numbers(a, b):
 print(a + b)
    # exercise_one.py
import func # type: ignore

func.sum_two_numbers(5, 10)  # Output: 15
import string
import random

letters = string.ascii_letters  # 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
random_string = ''.join(random.choice(letters) for _ in range(5))
print(random_string)
from datetime import datetime

def current_date():
    today = datetime.now().date()
    print(f"Today's date is: {today}")

current_date()
from datetime import datetime

def time_until_new_year():
    now = datetime.now()
    next_year = datetime(now.year + 1, 1, 1)
    delta = next_year - now
    print(f"Time left until January 1st: {delta}")

time_until_new_year()
from datetime import datetime

def minutes_lived(birthdate_str, date_format="%Y-%m-%d"):
    birthdate = datetime.strptime(birthdate_str, date_format)
    now = datetime.now()
    delta = now - birthdate
    minutes = delta.total_seconds() / 60
    print(f"You have lived {int(minutes)} minutes.")

minutes_lived("2000-01-01")  # Example usage
from faker import Faker # type: ignore

faker = Faker()
users = []

def generate_users(n):
    for _ in range(n):
        user = {
            "name": faker.name(),
            "address": faker.address(),
            "language_code": faker.language_code()
        }
        users.append(user)

generate_users(5)
print(users)