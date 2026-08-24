# Gcal SDK utility: make_context

from projectname_sdk.core.context import GcalContext


def make_context_util(ctxmap, basectx):
    return GcalContext(ctxmap, basectx)
