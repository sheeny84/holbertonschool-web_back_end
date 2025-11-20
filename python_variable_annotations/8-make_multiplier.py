#!/usr/bin/env python3
""" This is the make multiplier module """
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """ Return function that multiplies a float by multiplier """
    def fun(x: float):
        return x * multiplier
    return fun
