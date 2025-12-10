#!/usr/bin/env python3
""" This is the 'schools_by+topic' module """


def schools_by_topic(mongo_collection, topic):
    """List school from topic"""
    filter_query = {"topics": topic}
    return mongo_collection.find(filter_query)
