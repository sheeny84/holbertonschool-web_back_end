#!/usr/bin/env python3
""" This is the element length module """
import typing


def element_length(lst: typing.Iterable[typing.Sequence]) \
 -> typing.List[typing.Tuple[typing.Sequence, int]]:
    """ Return element length """
    return [(i, len(i)) for i in lst]
