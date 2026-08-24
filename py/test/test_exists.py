# Gcal SDK exists test

import pytest
from gcal_sdk import GcalSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = GcalSDK.test(None, None)
        assert testsdk is not None
