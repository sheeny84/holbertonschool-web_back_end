#!/usr/bin/env python3
""" This is the 'log_stats' module """
import pymongo


client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client.logs
collection = db.nginx
print(f"{collection.count_documents({})} logs")
print("Methods:")
print(f"    method GET: {collection.count_documents({'method':'GET'})}")
print(f"    method POST: {collection.count_documents({'method':'POST'})}")
print(f"    method PUT: {collection.count_documents({'method':'PUT'})}")
print(f"    method PATCH: {collection.count_documents({'method':'PATCH'})}")
print(f"    method DELETE: {collection.count_documents({'method':'DELETE'})}")
print(f"""{collection.count_documents({'method': 'GET',
                                     'path': '/status'})} status check""")
