import os
import json  # Unused import
import sys   # Unused import

# Hardcoded credentials (Security Hotspot)
API_KEY = "123456789abcdef"

def get_data():
    response = {"status": "ok", "data": [1, 2, 3]}
    return response

def process_data():
    # Duplicated code
    result = get_data()
    if result["status"] == "ok":
        for item in result["data"]:
            print("Processing:", item)

def process_data_again():
    # Duplicate logic – SonarQube will detect this
    result = get_data()
    if result["status"] == "ok":
        for item in result["data"]:
            print("Processing again:", item)

def long_function_with_smells():
    x = 1
    y = 2
    z = 3
    a = 4
    b = 5
    c = 6
    d = 7
    e = 8
    f = 9
    g = 10
    h = 11
    i = 12
    print("This function does too much...")  # SonarQube flags long methods

def user_input_handler():
    username = input("Enter your name: ")
    print("Welcome " + username)  # No input validation

# Poor naming
def x1():
    return "bad function name"

if __name__ == "__main__":
    process_data()
    process_data_again()
    long_function_with_smells()
    user_input_handler()
