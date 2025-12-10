#!/usr/bin/env python3
""" This is the 'insert_school' module """


def insert_school(mongo_collection, **kwargs):
    """Insert new document in collection"""
    return mongo_collection.insert_one(kwargs)
