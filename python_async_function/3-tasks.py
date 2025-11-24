#!/usr/bin/env python3
'''This is the tasks module'''
import asyncio
import time

wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    ''' Return the asyncio task for max_delay'''
    return (asyncio.create_task(wait_random(max_delay)))
