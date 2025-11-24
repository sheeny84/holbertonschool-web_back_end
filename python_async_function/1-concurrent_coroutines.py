#!/usr/bin/env python3
'''This is the concurrent coroutines module'''
import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int = 10) -> List[float]:
    ''' Run wait_random n times'''
    delay_list = []
    tasks = [wait_random(max_delay) for i in range(n)]
    for task in asyncio.as_completed(tasks):
        delay_list.append(await task)
    return (delay_list)
