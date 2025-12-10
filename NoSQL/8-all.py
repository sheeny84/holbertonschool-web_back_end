#!/usr/bin/env python3
""" This is the 'all' module """


def list_all(mongo_collection):
    """List all documents in a collection"""
    return mongo_collection.find()
