#!/usr/bin/env python3
'''This is the Async Generator module'''
import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    ''' Wait for 1 second and return a number between 0 and 10 '''
    for i in range(10):
        await asyncio.sleep(1)
        yield random.uniform(1, 10)
