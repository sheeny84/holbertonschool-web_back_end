#!/usr/bin/env python3
""" This is the 'update_topics' module """


def update_topics(mongo_collection, name, topics):
    """Update topics in collection"""
    filter_query = {"name": name}
    update_operation = {"$set": {"topics": topics}}
    mongo_collection.update_many(filter_query, update_operation)
