import requests  # Using an outdated version to trigger Snyk
import math

def divide_numbers(a, b):
    return a / b  # Potential division by zero bug

def fetch_data():
    url = "https://example.com/api/data"
    response = requests.get(url)
    return response.json()

def main():
    # Division by zero bug
    result = divide_numbers(10, 0)
    print(result)

    # Fetch data (potential security issue if URL is manipulated)
    data = fetch_data()
    print(data)

if __name__ == "__main__":
    main()