#!/usr/bin/env python3
'''This is the tasks module'''
import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int = 10) -> List[float]:
    ''' Run wait_random n times'''
    delay_list = []
    tasks = [task_wait_random(max_delay) for i in range(n)]
    for task in asyncio.as_completed(tasks):
        delay_list.append(await task)
    return (delay_list)
