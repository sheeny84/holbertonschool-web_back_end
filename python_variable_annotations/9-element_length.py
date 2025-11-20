#!/usr/bin/env python3
""" This is the element length module """
from typing import Tuple, Sequence, Iterable


def element_length(lst: Iterable[Sequence]) -> Tuple[Sequence, int]:
    """ Return element length """
    return [(i, len(i)) for i in lst]
