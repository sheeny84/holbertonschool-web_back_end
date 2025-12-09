#!/usr/bin/env python3
""" This is the simple_pagination module """
import csv
import math
from typing import List, Tuple


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """ Return page of data """
        assert (isinstance(page, int))
        assert (isinstance(page_size, int))
        assert (page > 0)
        assert (page_size > 0)
        ind = self.index_range(page, page_size)
        dataset = self.dataset()
        if ind[0] > len(dataset) or ind[1] > len(dataset):
            return []
        return dataset[ind[0]:ind[1]]

    def index_range(self, page: int, page_size: int) -> Tuple[int, int]:
        """
        Return tuple containing start and end index for the
        given pagination parameters
        """
        start_ind = (page - 1) * page_size
        end_ind = start_ind + page_size
        return (start_ind, end_ind)
