#!/usr/bin/env python3
""" This is the 'log_stats' module """
import pymongo


def log_stats():
    """Print stats for logs nginx"""
    client = pymongo.MongoClient("mongodb://localhost:27017/")
    db = client.logs
    collection = db.nginx
    print(f"{collection.count_documents({})} logs")
    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    print("Methods:")
    for method in methods:
        method_count = collection.count_documents({"method": method})
        print(f"\tmethod {method}: {method_count}")
    print(f"""{collection.count_documents({'method': 'GET',
                                        'path': '/status'})} status check""")


if __name__ == "__main__":
    log_stats()
