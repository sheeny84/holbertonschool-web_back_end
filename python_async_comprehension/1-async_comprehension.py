#!/usr/bin/env python3
'''This is the Async Comprehension module'''
from typing import List

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    '''Return 10 random numbers'''
    result = []
    async for i in async_generator():
        result.append(i)
    return (result)
