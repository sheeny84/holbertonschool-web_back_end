#!/usr/bin/env python3
'''This is the basic async syntax module'''
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    ''' Wait for a random delay between 0 and max_delay '''
    random_float = random.uniform(0.0, max_delay)
    await asyncio.sleep(random_float)
    return (random_float)
