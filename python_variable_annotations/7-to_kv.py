#!/usr/bin/env python3
""" This is the to_kv list module """
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """ Return a tuple containing k and the square of v """
    return (k, float(v * v))
