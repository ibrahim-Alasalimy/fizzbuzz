import unittest
from fizzbuzz import fizzbuzz  # Import the fizzbuzz function from fizzbuzz.py

class TestFizzBuzzEdgeCases(unittest.TestCase):
    def test_negative_input(self):
        self.assertEqual(fizzbuzz(-5), [])  # Expecting an empty list for negative input

    def test_zero_input(self):
        self.assertEqual(fizzbuzz(0), [])  # Expecting an empty list for zero input

    def test_one_input(self):
        self.assertEqual(fizzbuzz(1), ['1'])  # Expecting ['1'] for input of 1

    def test_two_input(self):
        self.assertEqual(fizzbuzz(2), ['1', '2'])  # Expecting ['1', '2'] for input of 2

if __name__ == '__main__':
    unittest.main()


print("hello man")

print("bruhhh")

print("hello man how are u doing")

print("hello man how are you ding ")

print("hello man how are you ding ")