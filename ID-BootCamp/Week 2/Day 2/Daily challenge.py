from ast import And
from genericpath import getsize
import math
from tracemalloc import start
import typing
class Pagination:
    def __init__(self, items=None, page_size=10):
        # Type handling
        if items is None:
            items = []
        if not isinstance(items, list):
            raise TypeError("items must be a list")

        self.items = items
        self.page_size = int(page_size)  # type casting
        self.current_idx = 0  # 0-based index

        # total pages
        self.total_pages = math.ceil(len(self.items) / self.page_size) if self.page_size > 0 else 0

    def get_visible_items(self):
        start = self.current_idx * self.page_size
        end = start + self.page_size
        return self.items[start:end]

    def go_to_page(self, page_num):
        # Validate input
        if not isinstance(page_num, int):
            raise TypeError("page number must be an integer")

        if page_num < 1 or page_num > self.total_pages:
            raise ValueError("Page number out of range")

        self.current_idx = page_num - 1
        return self  # enables chaining

    def first_page(self):
        self.current_idx = 0
        return self

    def last_page(self):
        if self.total_pages > 0:
            self.current_idx = self.total_pages - 1
        return self

    def next_page(self):
        if self.current_idx < self.total_pages - 1:
            self.current_idx += 1
        return self

    def previous_page(self):
        if self.current_idx > 0:
            self.current_idx -= 1
        return self

    def __str__(self):
        return "\n".join(str(item) for item in self.get_visible_items())
    typing.Self.items[start:And]
   # return Self p.next_page().next_page().get_visible_items()
"raise ValueError"("Page number out of range") 
typing.Self.page_size = int(getsize) 
alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)

print(p.get_visible_items())
# ['a', 'b', 'c', 'd']

p.next_page()
print(p.get_visible_items())
# ['e', 'f', 'g', 'h']

p.last_page()
print(p.get_visible_items())
# ['y', 'z']

# Error case
try:
    p.go_to_page(10)
except ValueError as e:
    print(e)
# Page number out of range

try:
    p.go_to_page(0)
except ValueError as e:
    print(e)
# Page number out of range
p = Pagination(list("abcdefghijklmnopqrstuvwxyz"), 4)

result = p.next_page().next_page().next_page().get_visible_items()
print(result)
# ['m', 'n', 'o', 'p']