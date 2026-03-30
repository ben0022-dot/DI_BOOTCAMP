import math

class Circle:
    def __init__(self, radius):
        self.radius = radius

    # Class method to create a circle from diameter
    @classmethod
    def from_diameter(cls, diameter):
        return cls(diameter / 2)

    # Property for diameter
    @property
    def diameter(self):
        return self.radius * 2

    # Setter for diameter
    @diameter.setter
    def diameter(self, value):
        self.radius = value / 2

    # Compute area
    @property
    def area(self):
        return math.pi * self.radius ** 2

    # String representation
    def __str__(self):
        return f"Circle with radius: {self.radius:.2f}"

    def __repr__(self):
        return f"Circle({self.radius:.2f})"

    # Addition: sum of two circles returns new circle
    def __add__(self, other):
        if isinstance(other, Circle):
            return Circle(self.radius + other.radius)
        raise TypeError("Can only add Circle to Circle")

    # Comparison methods
    def __gt__(self, other):
        if isinstance(other, Circle):
            return self.radius > other.radius
        return NotImplemented

    def __eq__(self, other):
        if isinstance(other, Circle):
            return self.radius == other.radius
        return NotImplemented

    def __lt__(self, other):
        if isinstance(other, Circle):
            return self.radius < other.radius
        return NotImplemented
    
    # Create circles
c1 = Circle(5)
c2 = Circle.from_diameter(20)  # radius will be 10

# Access attributes
print(c1.radius)    # 5
print(c2.diameter)  # 20
print(c1.area)      # 78.53981633974483

# String representations
print(c1)           # Circle with radius: 5.00
print(repr(c2))     # Circle(10.00)

# Addition of circles
c3 = c1 + c2
print(c3)           # Circle with radius: 15.00

# Comparisons
print(c1 > c2)      # False
print(c1 == Circle(5))  # True

# Sorting a list of circles
circles = [c2, c1, c3]
sorted_circles = sorted(circles)
print(sorted_circles)  
# [Circle(5.00), Circle(10.00), Circle(15.00)]

import turtle

def draw_circles(circle_list):
    t = turtle.Turtle()
    t.speed(0)
    y = 0
    for c in sorted(circle_list):
        t.penup()
        t.goto(0, y)
        t.pendown()
        t.circle(c.radius * 10)  # scale for visibility
        y += c.radius * 20
    turtle.done()

draw_circles([c1, c2, c3])