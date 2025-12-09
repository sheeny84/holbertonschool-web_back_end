#!/usr/bin/env python3
""" This is the simple_helper_function module """
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Return tuple containing start and end index for the
    given pagination parameters
    """
    start_ind = (page - 1) * page_size
    end_ind = start_ind + page_size
    return (start_ind, end_ind)
