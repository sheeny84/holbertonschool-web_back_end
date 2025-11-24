#!/usr/bin/env python3
'''This is the Measure Runtime module'''
import time
import asyncio

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    '''Return the runtime of async_comprehension'''
    tasks = [async_comprehension() for i in range(4)]
    start_time = time.monotonic()
    await asyncio.gather(*tasks)
    end_time = time.monotonic()
    elapsed_time = end_time - start_time
    return (elapsed_time)
