#!/usr/bin/env python3
'''This is the measure runtime module'''
import asyncio
import time

wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int = 10) -> float:
    ''' Return the average time for execution of the wait_n function'''
    start_time = time.monotonic()
    asyncio.run(wait_n(n, max_delay))
    end_time = time.monotonic()
    elapsed_time = end_time - start_time
    return (elapsed_time/n)
